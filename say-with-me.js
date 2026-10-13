(()=>{'use strict';
const $=id=>document.getElementById(id),start=$('startSayWithMe'),panel=$('saySession'),label=$('sayStage'),quote=$('sayText'),count=$('sayCountdown'),hint=$('sayHint');
let stage='idle',timer=null,session=0;
function clear(){if(timer!==null)clearInterval(timer);timer=null;if('speechSynthesis' in window)window.speechSynthesis.cancel()}
function setStage(title,message){label.textContent=title;hint.textContent=message;count.textContent=''}
function current(){return document.getElementById('cardText').textContent.trim()}
function listen(){const id=++session;clear();stage='listen';panel.hidden=false;quote.textContent=current();setStage('1 / 3 · Listen','Listen to the affirmation. When the audio finishes, the countdown will begin.');$('sayNext').textContent='Skip to countdown';$('sayRepeat').hidden=false;
 if(!('speechSynthesis' in window)||typeof SpeechSynthesisUtterance==='undefined'){setStage('1 / 3 · Read','Voice playback is not supported in this browser. Read the affirmation, then continue.');return}
 const u=new SpeechSynthesisUtterance(quote.textContent);u.lang='en-US';u.rate=.85;u.onend=()=>{if(id===session&&stage==='listen')countdown()};u.onerror=()=>{if(id===session&&stage==='listen')setStage('1 / 3 · Listen','Audio could not play. Tap Continue to start the countdown.')};window.speechSynthesis.speak(u)}
function countdown(){++session;clear();stage='countdown';setStage('2 / 3 · Repeat After Me','Prepare to say the affirmation out loud.');$('sayRepeat').hidden=true;$('sayNext').textContent='Skip countdown';let remaining=5;count.textContent=String(remaining);timer=setInterval(()=>{remaining--;if(remaining<=0){clearInterval(timer);timer=null;speak()}else count.textContent=String(remaining)},1000)}
function speak(){++session;clear();stage='speak';setStage('3 / 3 · Your Turn','Now say this affirmation out loud, at your own pace. No microphone or recording is required.');$('sayRepeat').hidden=false;$('sayNext').textContent='Done';$('sayRepeat').textContent='Listen again'}
function stop(){++session;clear();stage='idle';panel.hidden=true;$('sayRepeat').textContent='Repeat audio'}
start.addEventListener('click',()=>{stop();listen();panel.scrollIntoView({block:'nearest',behavior:'smooth'})});
$('sayNext').addEventListener('click',()=>{if(stage==='listen')countdown();else if(stage==='countdown')speak();else if(stage==='speak')stop()});
$('sayRepeat').addEventListener('click',()=>{if(stage==='speak'||stage==='listen')listen()});
$('sayExit').addEventListener('click',stop);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&stage!=='idle')stop()});
})();