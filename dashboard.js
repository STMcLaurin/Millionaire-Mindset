(()=>{'use strict';
const KEY='millionaireMindsetDashboardV2',OLD='millionaireMindsetDashboardV1';
const $=id=>document.getElementById(id),today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const defaults=[['affirmation','Complete my affirmations'],['goal','Take one action toward my income goal'],['learn','Learn a financial skill for 10 minutes'],['review','Review and record my progress']].map(([id,text])=>({id,text}));
let state={version:2,onboarded:false,focus:'Financial Independence',goal:'',notes:'',routines:defaults,history:{}};
try {
 const saved=JSON.parse(localStorage.getItem(KEY)||'null');
 if(saved && saved.version===2){state=validate(saved)}
 else {
  const old=JSON.parse(localStorage.getItem(OLD)||'null');
  if(old&&typeof old==='object'){state.goal=String(old.goal||'').slice(0,160);state.notes=String(old.notes||'').slice(0,2000);
   if(Array.isArray(old.done)&&typeof old.date==='string')state.history[old.date]=old.done.filter(x=>defaults.some(t=>t.id===x));
  }
 }
}catch(e){$('storageNotice').textContent='Some stored data could not be loaded. You can import a backup.'}
function validate(input){
 const output={...state,goal:typeof input.goal==='string'?input.goal.slice(0,160):'',notes:typeof input.notes==='string'?input.notes.slice(0,2000):'',onboarded:input.onboarded===true,focus:typeof input.focus==='string'?input.focus.slice(0,100):'Financial Independence'};
 if(Array.isArray(input.routines))output.routines=input.routines.filter(t=>t&&typeof t.id==='string'&&typeof t.text==='string'&&t.text.trim()).slice(0,40).map(t=>({id:t.id.slice(0,90),text:t.text.slice(0,100)}));
 output.history={};if(input.history&&typeof input.history==='object'&&!Array.isArray(input.history))for(const [date,done] of Object.entries(input.history).slice(-400)){if(/^\d{4}-\d{2}-\d{2}$/.test(date)&&Array.isArray(done))output.history[date]=done.filter(x=>typeof x==='string').slice(0,40)}
 return output;
}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){$('storageNotice').textContent='Unable to save. Browser storage may be unavailable or full.'}}
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
function render(){
 $('primaryGoal').value=state.goal;$('notes').value=state.notes;$('focusDisplay').textContent=state.focus;
 $('onboarding').hidden=state.onboarded;
 const completed=state.history[today()]||[];
 const list=$('routineList');list.replaceChildren();
 for(const [i,t] of state.routines.entries()){
  const row=el('div','routine-row');const label=el('label','task');const check=el('input');check.type='checkbox';check.checked=completed.includes(t.id);check.setAttribute('aria-label','Complete '+t.text);check.addEventListener('change',()=>{const set=new Set(state.history[today()]||[]);if(check.checked)set.add(t.id);else set.delete(t.id);state.history[today()]=[...set];save();render()});
  label.append(check,el('span','',t.text));row.append(label);
  const controls=el('div','routine-actions');
  for(const [symbol,title,fn] of [['↑','Move up',()=>move(i,-1)],['↓','Move down',()=>move(i,1)],['Edit','Edit',()=>edit(i)],['Delete','Delete',()=>remove(i)]]){const btn=el('button','mini',symbol);btn.type='button';btn.title=title+' '+t.text;btn.setAttribute('aria-label',title+' '+t.text);btn.addEventListener('click',fn);controls.append(btn)}
  row.append(controls);list.append(row);
 }
 const count=state.routines.filter(t=>completed.includes(t.id)).length;
 $('dailyProgress').max=Math.max(1,state.routines.length);$('dailyProgress').value=count;
 $('progressText').textContent=count+' / '+state.routines.length;
 $('completionMessage').textContent=state.routines.length&&count===state.routines.length?'Your daily routine is complete. Great work!':(state.routines.length-count)+' daily actions remaining.';
 const history=$('history');history.replaceChildren();let active=0;
 for(let offset=6;offset>=0;offset--){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()-offset);const date=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');const done=(state.history[date]||[]).length;if(done)active++;const b=el('div','day');b.append(el('strong','',d.toLocaleDateString(undefined,{weekday:'short'})),el('span','',String(done)));b.title=date+': '+done+' completed';history.append(b)}
 $('historyText').textContent=active+' of the last 7 days with completed actions.';
}
function move(i,delta){const j=i+delta;if(j<0||j>=state.routines.length)return;[state.routines[i],state.routines[j]]=[state.routines[j],state.routines[i]];save();render()}
function edit(i){const value=prompt('Rename this daily habit:',state.routines[i].text);if(value===null)return;const v=value.trim().slice(0,100);if(!v)return;state.routines[i].text=v;save();render()}
function remove(i){if(!confirm('Delete this daily habit?'))return;state.routines.splice(i,1);save();render()}
$('today').textContent=new Intl.DateTimeFormat(undefined,{month:'short',day:'numeric',year:'numeric'}).format(new Date());
$('primaryGoal').addEventListener('input',e=>{state.goal=e.target.value;save()});
$('notes').addEventListener('input',e=>{state.notes=e.target.value;save()});
$('newRoutineForm').addEventListener('submit',e=>{e.preventDefault();const field=$('newRoutine'),name=field.value.trim();if(!name||state.routines.length>=40)return;state.routines.push({id:'custom-'+Date.now()+'-'+Math.random().toString(36).slice(2,6),text:name.slice(0,100)});field.value='';save();render()});
$('finishOnboarding').addEventListener('click',()=>{state.focus=$('focus').value;state.onboarded=true;save();render()});
$('editFocus').addEventListener('click',()=>{state.onboarded=false;$('focus').value=state.focus;render();$('onboarding').scrollIntoView({behavior:'smooth'})});
$('exportData').addEventListener('click',()=>{
 const copy={...state,exportedAt:new Date().toISOString(),affirmationData:{favorites:localStorage.getItem('millionaireAffirmationFavorites'),custom:localStorage.getItem('millionaireAffirmationsCustom')}};
 const blob=new Blob([JSON.stringify(copy,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='millionaire-mindset-backup-'+today()+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);$('backupStatus').textContent='Backup prepared. Store the file somewhere private.';
});
$('importData').addEventListener('change',async e=>{
 const file=e.target.files[0];if(!file)return;
 try{if(file.size>1024*1024)throw Error('Backup exceeds 1MB');
 const data=JSON.parse(await file.text());if(data.version!==2||!Array.isArray(data.routines)||!data.history||typeof data.history!=='object')throw Error('Invalid Millionaire Mindset backup');
 if(confirm('Replace current dashboard data with this backup?')){state=validate(data);save();if(data.affirmationData&&typeof data.affirmationData==='object'){for(const [field,key] of [['favorites','millionaireAffirmationFavorites'],['custom','millionaireAffirmationsCustom']]){const value=data.affirmationData[field];if(typeof value==='string'&&value.length<1000000){const parsed=JSON.parse(value);if(Array.isArray(parsed))localStorage.setItem(key,value)}}}render();$('backupStatus').textContent='Dashboard backup restored. Reload the affirmation studio to see restored entries.'}
 }catch(err){$('backupStatus').textContent='Import failed: '+err.message}finally{e.target.value=''}
});
render();
})();