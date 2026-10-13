
       (function() {
           // ---------- AFFIRMATIONS DATA ----------
           const publicGroups=window.MILLIONAIRE_LIBRARY || [];
           const builtIn=publicGroups.flatMap(group=>group.affirmations);
           let affirmations=[...builtIn];
           const BASE_COUNT=builtIn.length;


           let total = affirmations.length;
           let currentIndex = 0;
           let favorites = new Set();
           const NEW_FAVORITES_KEY='millionaireFavoritesV2';
           let isReadAloudEnabled = false;
           let cardUpdateId = 0;
           let touchStartX = 0;
           let touchStartY = 0;
           let isSwiping = false;


           // Category boundaries correspond to the immutable built-in affirmation library.
           // Custom affirmations are appended after the 178 originals.
           const baseCategories=publicGroups.map(group=>[group.name,group.affirmations.length]);
           const categorySelect = document.getElementById('affirmationCategory');
           const categorySummary = document.getElementById('categorySummary');
           baseCategories.forEach(([name]) => categorySelect.add(new Option(name,name)));
           categorySelect.add(new Option('My Custom Affirmations','custom'));
           function categoryForIndex(index) {
             let cursor = 0;
             for (const [name,count] of baseCategories) {
               if (index < cursor+count) return name;
               cursor += count;
             }
             return 'custom';
           }
           function filteredIndices() {
             const selected = categorySelect.value;
             return affirmations.map((_,index)=>index).filter(index =>
                selected === 'all' || categoryForIndex(index) === selected);
           }
           function refreshCategorySummary() {
             const visible = filteredIndices();
             categorySummary.textContent = visible.length + ' in category';
           }
           categorySelect.addEventListener('change',()=> {
             const visible=filteredIndices();
             refreshCategorySummary();
             if(visible.length) goToIndex(visible[0]); else showToast('No affirmations in this category yet');
           });

           // ---------- DOM ELEMENTS ----------
           const splashScreen = document.getElementById('splashScreen');
           const card = document.getElementById('affirmationCard');
           const cardText = document.getElementById('cardText');
           const cardNumber = document.getElementById('cardNumber');
           const favoriteBtn = document.getElementById('favoriteBtn');
           const progressDots = document.getElementById('progressDots');
           const progressLabel = document.getElementById('progressLabel');
           const btnPrev = document.getElementById('btnPrev');
           const btnNext = document.getElementById('btnNext');
           const btnRandom = document.getElementById('btnRandom');
           const btnAutoPlay = document.getElementById('btnAutoPlay');
           const btnSpeak = document.getElementById('btnSpeak');
           const btnFavoritesToggle = document.getElementById('btnFavoritesToggle');
           // The favorites button label is refreshed directly so it never becomes stale.
           const favoritesPanel = document.getElementById('favoritesPanel');
           const favoritesList = document.getElementById('favoritesList');
           const autoRotateIndicator = document.getElementById('autoRotateIndicator');
           const toast = document.getElementById('toast');
           const customInput = document.getElementById('customAffirmationInput');
           const btnAddCustom = document.getElementById('btnAddCustom');


           // ---------- SPLASH SCREEN ----------
           function hideSplash() {
               splashScreen.classList.add('fade-out');
               // After transition, remove if needed
               setTimeout(() => {
                   if (splashScreen.parentNode) splashScreen.parentNode.removeChild(splashScreen);
               }, 800);
           }
           document.getElementById('btnBegin').addEventListener('click', hideSplash);
           splashScreen.addEventListener('click', hideSplash);
           // Also hide after 6 seconds if no interaction
           setTimeout(() => {
               if (splashScreen && !splashScreen.classList.contains('fade-out')) {
                   hideSplash();
               }
           }, 6000);


           // ---------- TOAST ----------
           let toastTimeout;
           function showToast(message) {
               clearTimeout(toastTimeout);
               toast.textContent = message;
               toast.classList.add('show');
               toastTimeout = setTimeout(() => {
                   toast.classList.remove('show');
               }, 2000);
           }


           // ---------- SPARKLES ----------
           function spawnSparkles(count = 6) {
               const sparkleEmojis = ['✨', '💫', '⭐', '🌟', '💎', '⚡'];
               for (let i = 0; i < count; i++) {
                   const sparkle = document.createElement('span');
                   sparkle.classList.add('sparkle');
                   sparkle.textContent = sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)];
                   sparkle.style.left = (15 + Math.random() * 70) + '%';
                   sparkle.style.top = (40 + Math.random() * 40) + '%';
                   sparkle.style.animationDuration = (1.8 + Math.random() * 2.5) + 's';
                   sparkle.style.animationDelay = (Math.random() * 0.5) + 's';
                   sparkle.style.fontSize = (14 + Math.random() * 20) + 'px';
                   card.appendChild(sparkle);
                   sparkle.addEventListener('animationend', () => sparkle.remove());
               }
           }


           // ---------- TEXT TO SPEECH ----------
           function speakAffirmation(text) {
               if (!('speechSynthesis' in window)) {
                   showToast('🔇 Speech not supported in this browser');
                   return;
               }
               window.speechSynthesis.cancel();
               const utterance = new SpeechSynthesisUtterance(text);
               utterance.lang = 'en-US';
               utterance.rate = 0.9;
               utterance.pitch = 1.0;
               window.speechSynthesis.speak(utterance);
           }


           function speakCurrent() {
               speakAffirmation(affirmations[currentIndex]);
           }


           function toggleReadAloud() {
               if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
                   showToast('🔇 Speech not supported in this browser');
                   return;
               }


               if (isAutoPlaying) stopAutoPlay();
               isReadAloudEnabled = !isReadAloudEnabled;
               if (isReadAloudEnabled) {
                   btnSpeak.innerHTML = '🔊 Reading On';
                   btnSpeak.style.borderColor = 'var(--gold)';
                   showToast('🔊 Will read aloud automatically');
                   // Immediately read current one
                   speakCurrent();
               } else {
                   btnSpeak.innerHTML = '🔊 Read';
                   btnSpeak.style.borderColor = 'var(--border)';
                   window.speechSynthesis.cancel();
                   showToast('🔇 Read aloud off');
               }
           }


           // ---------- UPDATE UI ----------
           function updateCard(animate = true, direction = 'none') {
               const affirmation = affirmations[currentIndex];
               const updateId = ++cardUpdateId;
               const displayedIndex = currentIndex;
               cardText.style.opacity = '0';
               setTimeout(() => {
                   if (updateId !== cardUpdateId) return;
                   cardText.textContent = affirmation;
                   cardNumber.textContent = `AFFIRMATION ${displayedIndex + 1} OF ${total}`;
                   cardText.style.opacity = '1';
               }, animate ? 200 : 0);


               if (favorites.has(currentIndex)) {
                   favoriteBtn.setAttribute('aria-pressed', 'true');
                   favoriteBtn.textContent = '★';
                   favoriteBtn.classList.add('favorited');
               } else {
                   favoriteBtn.setAttribute('aria-pressed', 'false');
                   favoriteBtn.textContent = '☆';
                   favoriteBtn.classList.remove('favorited');
               }


               updateProgressDots();
               progressLabel.textContent = `${currentIndex + 1} / ${total}`;


               if (animate && direction !== 'none') {
                   card.classList.add('celebrate');
                   setTimeout(() => card.classList.remove('celebrate'), 600);
               }
               if (animate) spawnSparkles(5);


               if (favoritesPanel.classList.contains('open')) renderFavoritesPanel();
               updateFavCount();


               // Auto-speak if enabled and the update was triggered by navigation/auto-play
               if (isReadAloudEnabled && animate && !isAutoPlaying) {
                   speakCurrent();
               }
           }


           function updateProgressDots() {
               // Rendering hundreds of clickable dots overwhelms narrow screens.
               progressDots.replaceChildren();
               if (total > 30) return;
               for (let i = 0; i < total; i++) {
                   const dot = document.createElement('button');
                   dot.type = 'button';
                   dot.className = 'progress-dot';
                   dot.setAttribute('aria-label', 'Go to affirmation ' + (i + 1));
                   dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
                   if (i === currentIndex) dot.classList.add('active');
                   if (favorites.has(i)) dot.classList.add('favorite-dot');
                   dot.addEventListener('click', () => goToIndex(i));
                   progressDots.appendChild(dot);
               }
           }

           function updateFavCount() {
               const isOpen = favoritesPanel.classList.contains('open');
               btnFavoritesToggle.textContent = isOpen ? '✕ Close favorites' : '⭐ Favorites ' + favorites.size;
               btnFavoritesToggle.setAttribute('aria-expanded', String(isOpen));
           }


           // ---------- NAVIGATION ----------
           function goToIndex(index, animate = true, direction = 'none') {
               if (index < 0 || index >= total) return;


               if (isAutoPlaying) {
                   if (autoPlayTimeout) {
                       clearTimeout(autoPlayTimeout);
                       autoPlayTimeout = null;
                   }
                   speechRequestId++;
                   window.speechSynthesis.cancel();
               }


               currentIndex = index;
               updateCard(animate, direction);
               if (isAutoPlaying) speakCurrentAffirmation();
           }


           function nextAffirmation() {
               const indices=filteredIndices();
               if (!indices.length) return;
               const pos=indices.indexOf(currentIndex);
               const newIndex=indices[(pos+1)%indices.length];
               goToIndex(newIndex, true, 'next');
           }


           function prevAffirmation() {
               const indices=filteredIndices();
               if (!indices.length) return;
               const pos=indices.indexOf(currentIndex);
               const newIndex=indices[(pos<0?0:pos-1+indices.length)%indices.length];
               goToIndex(newIndex, true, 'prev');
           }


           function randomAffirmation() {
               const indices=filteredIndices();
               if (!indices.length) return;
               const options=indices.filter(i=>i!==currentIndex);
               const pool=options.length?options:indices;
               const newIndex=pool[Math.floor(Math.random()*pool.length)];
               goToIndex(newIndex, true, 'random');
               showToast('🔮 New affirmation!');
           }


           // ---------- FAVORITES ----------
           function loadFavorites() {
               try {
                 const stored=JSON.parse(localStorage.getItem(NEW_FAVORITES_KEY)||'[]');
                 if(Array.isArray(stored))favorites=new Set(stored.filter(n=>Number.isInteger(n)&&n>=0&&n<total));
               }catch(e){favorites=new Set()}
               // Legacy favorites are not mapped by index to a different library.
               // The original legacy keys remain untouched for safe recovery.
           }
           function saveFavorites() {
               try {
                   localStorage.setItem(NEW_FAVORITES_KEY, JSON.stringify([...favorites]));
               } catch (e) {}
           }


           function toggleFavorite() {
               if (favorites.has(currentIndex)) {
                   favorites.delete(currentIndex);
                   showToast('Removed from favorites');
               } else {
                   favorites.add(currentIndex);
                   showToast('⭐ Added to favorites!');
                   spawnSparkles(8);
               }
               saveFavorites();
               updateCard(false, 'none');
           }


           function escapeHtml(value) {
               return String(value).replace(/[&<>'"]/g, character => ({
                   '&': '&amp;',
                   '<': '&lt;',
                   '>': '&gt;',
                   "'": '&#39;',
                   '"': '&quot;'
               }[character]));
           }


           function renderFavoritesPanel() {
               if (favorites.size === 0) {
                   favoritesList.innerHTML = '<p class="favorites-empty">No favorites yet. Tap the ☆ on any card.</p>';
               } else {
                   let html = '';
                   const sortedFavs = [...favorites].sort((a, b) => a - b);
                   for (const idx of sortedFavs) {
                       const preview = affirmations[idx].substring(0, 70);
                       html += `<div class="favorite-item" data-index="${idx}" title="Go to affirmation ${idx + 1}">
                                   <strong>#${idx + 1}</strong> ${escapeHtml(preview)}${affirmations[idx].length > 70 ? '...' : ''}
                               </div>`;
                   }
                   favoritesList.innerHTML = html;
                   favoritesList.querySelectorAll('.favorite-item').forEach(item => {
                       item.addEventListener('click', () => {
                           const idx = parseInt(item.getAttribute('data-index'));
                           if (!isNaN(idx)) {
                               goToIndex(idx, true, 'jump');
                               favoritesPanel.classList.remove('open');
                               updateFavCount();
                               showToast(`Went to affirmation #${idx + 1}`);
                           }
                       });
                   });
               }
           }


           function toggleFavoritesPanel() {
               const isOpen = favoritesPanel.classList.toggle('open');
               if (isOpen) {
                   renderFavoritesPanel();
                   updateFavCount();
               } else {
                   updateFavCount();
               }
           }


        // ---------- AUTO PLAY ----------
let autoPlayTimeout = null;
let isAutoPlaying = false;
let speechRequestId = 0;


// Adjust these
const SPEECH_RATE = 0.78;      // 1 = normal, lower = slower
const PAUSE_BETWEEN = 1800;    // pause after sentence finishes


function startAutoPlay() {
   if (isAutoPlaying) return;


   if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
       showToast('🔇 Speech not supported in this browser');
       return;
   }


   isAutoPlaying = true;


   btnAutoPlay.textContent = '⏸ Stop Auto';
   btnAutoPlay.style.borderColor = 'var(--gold)';
   autoRotateIndicator.style.display = 'flex';


   showToast('▶ Auto-play started');


   // Speak the current affirmation
   speakCurrentAffirmation();
}


function stopAutoPlay() {
   isAutoPlaying = false;
   speechRequestId++;


   if (autoPlayTimeout) {
       clearTimeout(autoPlayTimeout);
       autoPlayTimeout = null;
   }


   // Stop current speech when the browser provides speech synthesis.
   if ('speechSynthesis' in window) {
       window.speechSynthesis.cancel();
   }


   btnAutoPlay.textContent = '▶ Auto-Play';
   btnAutoPlay.style.borderColor = 'var(--border)';
   autoRotateIndicator.style.display = 'none';
}


function toggleAutoPlay() {
   if (isAutoPlaying) {
       stopAutoPlay();
       showToast('⏸ Auto-play stopped');
   } else {
       startAutoPlay();
   }
}


function speakCurrentAffirmation() {
   if (!isAutoPlaying) return;


   const text = affirmations[currentIndex];
   const requestId = ++speechRequestId;


   // Cancel anything already speaking. Cancellation can emit an expected error event.
   window.speechSynthesis.cancel();


   const utterance = new SpeechSynthesisUtterance(text);


   // -----------------------------
   // VOICE SETTINGS
   // -----------------------------
   utterance.rate = SPEECH_RATE;
   utterance.pitch = 1;
   utterance.volume = 1;


   // When the ENTIRE affirmation has finished
   utterance.onend = function () {
       if (!isAutoPlaying || requestId !== speechRequestId) return;


       // Give the listener a moment to absorb it
       autoPlayTimeout = setTimeout(() => {
           if (!isAutoPlaying) return;


           nextAffirmation();


       }, PAUSE_BETWEEN);
   };


   utterance.onerror = function (event) {
       // 'canceled'/'interrupted' is expected when changing cards or stopping playback.
       const errorType = event && event.error;
       if (errorType === 'canceled' || errorType === 'interrupted') return;
       if (!isAutoPlaying || requestId !== speechRequestId) return;


       showToast('🔇 Speech could not be played');
       stopAutoPlay();
   };


   window.speechSynthesis.speak(utterance);
}


           // ---------- CUSTOM AFFIRMATION ----------
           function addCustomAffirmation() {
               const text = customInput.value.trim();
               if (text.length > 300) {
                   showToast('Keep affirmations under 300 characters');
                   return;
               }
               if (affirmations.some(value => value.toLocaleLowerCase() === text.toLocaleLowerCase())) {
                   showToast('This affirmation already exists');
                   return;
               }
               if (!text) {
                   showToast('✍️ Please enter an affirmation');
                   return;
               }
               affirmations.push(text);
               total = affirmations.length;
               customInput.value = '';
               // Navigate to the newly added one
               goToIndex(total - 1, true, 'next');
               updateProgressDots();
               refreshCategorySummary();
               showToast('✨ Your affirmation added!');
               saveAffirmationsToLocal(); // optional persistence
           }


           // Persist custom affirmations in localStorage (optional but nice)
           function saveAffirmationsToLocal() {
               try {
                   localStorage.setItem('millionaireCustomV2', JSON.stringify(affirmations.slice(BASE_COUNT)));
               } catch (e) {}
           }


           function loadAffirmationsFromLocal() {
               // Existing localStorage contains the entire old 178-item built-in array.
               // Retain only additions beyond that original list, without replacing new public content.
               try {
                 const legacy=JSON.parse(localStorage.getItem('millionaireAffirmationsCustom')||'null');
                 const saved=JSON.parse(localStorage.getItem('millionaireCustomV2')||'null');
                 const extras=Array.isArray(saved)?saved:(Array.isArray(legacy)?legacy.slice(178):[]);
                 const clean=extras.filter(x=>typeof x==='string'&&x.trim()&&x.length<=300);
                 affirmations=[...builtIn,...new Set(clean)];total=affirmations.length;
               }catch(e){affirmations=[...builtIn];total=affirmations.length}
           }
           // ---------- TOUCH / SWIPE ----------
           card.addEventListener('touchstart', (e) => {
               if (e.target.closest('button')) return;
               touchStartX = e.touches[0].clientX;
               touchStartY = e.touches[0].clientY;
               isSwiping = true;
               card.classList.add('swiping');
           }, { passive: true });


           card.addEventListener('touchmove', (e) => {
               if (!isSwiping) return;
               const dx = e.touches[0].clientX - touchStartX;
               const dy = e.touches[0].clientY - touchStartY;
               if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) < 150) {
                   const rotation = dx * 0.05;
                   card.style.transform = `translateX(${dx * 0.3}px) rotate(${rotation}deg)`;
                   card.style.boxShadow = `0 8px 40px rgba(0,0,0,0.5), var(--shadow-gold), ${dx > 0 ? '10px 0 30px rgba(212,168,83,0.1)' : '-10px 0 30px rgba(212,168,83,0.1)'}`;
               }
           }, { passive: true });


           card.addEventListener('touchend', (e) => {
               if (!isSwiping) return;
               isSwiping = false;
               card.classList.remove('swiping');
               card.style.transform = '';
               card.style.boxShadow = '';
               const dx = (e.changedTouches[0]?.clientX || touchStartX) - touchStartX;
               const dy = (e.changedTouches[0]?.clientY || touchStartY) - touchStartY;
               if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
                   if (dx < -40) nextAffirmation();
                   else if (dx > 40) prevAffirmation();
               }
           });


           // Mouse drag support
           let mouseDown = false,
               mouseStartX = 0;
           card.addEventListener('mousedown', (e) => {
               if (e.target.closest('button')) return;
               mouseDown = true;
               mouseStartX = e.clientX;
               card.classList.add('swiping');
               card.style.cursor = 'grabbing';
           });
           window.addEventListener('mousemove', (e) => {
               if (!mouseDown) return;
               const dx = e.clientX - mouseStartX;
               if (Math.abs(dx) < 150) {
                   const rotation = dx * 0.04;
                   card.style.transform = `translateX(${dx * 0.25}px) rotate(${rotation}deg)`;
               }
           });
           window.addEventListener('mouseup', (e) => {
               if (!mouseDown) return;
               mouseDown = false;
               card.classList.remove('swiping');
               card.style.transform = '';
               card.style.boxShadow = '';
               card.style.cursor = 'default';
               const dx = e.clientX - mouseStartX;
               if (Math.abs(dx) > 50) {
                   if (dx < -40) nextAffirmation();
                   else if (dx > 40) prevAffirmation();
               }
           });


           // Keyboard shortcuts
           window.addEventListener('keydown', (e) => {
               if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;
               switch (e.key) {
                   case 'ArrowRight':
                   case 'ArrowDown':
                       e.preventDefault();
                       nextAffirmation();
                       break;
                   case 'ArrowLeft':
                   case 'ArrowUp':
                       e.preventDefault();
                       prevAffirmation();
                       break;
                   case ' ':
                       e.preventDefault();
                       randomAffirmation();
                       break;
                   case 'f':
                   case 'F':
                       e.preventDefault();
                       toggleFavorite();
                       break;
                   case 'a':
                   case 'A':
                       e.preventDefault();
                       toggleAutoPlay();
                       break;
                   case 'r':
                   case 'R':
                       e.preventDefault();
                       toggleReadAloud();
                       break;
                   default:
                       break;
               }
           });


           // ---------- EVENT LISTENERS ----------
           btnPrev.addEventListener('click', prevAffirmation);
           btnNext.addEventListener('click', nextAffirmation);
           btnRandom.addEventListener('click', randomAffirmation);
           btnAutoPlay.addEventListener('click', toggleAutoPlay);
           btnSpeak.addEventListener('click', toggleReadAloud);
           favoriteBtn.addEventListener('click', toggleFavorite);
           btnFavoritesToggle.addEventListener('click', toggleFavoritesPanel);
           btnAddCustom.addEventListener('click', addCustomAffirmation);
           customInput.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') addCustomAffirmation();
           });


           // ---------- INIT ----------
           function init() {
               loadAffirmationsFromLocal(); // load custom list if exists
               loadFavorites();
               refreshCategorySummary();
               currentIndex = 0;
               updateCard(false, 'none');
               updateFavCount();
               updateProgressDots();
               progressLabel.textContent = `1 / ${total}`;
               favoritesPanel.classList.remove('open');
               btnFavoritesToggle.textContent = '⭐ Favorites ' + favorites.size;
               stopAutoPlay();
               isReadAloudEnabled = false;
               btnSpeak.innerHTML = '🔊 Read';
               btnSpeak.style.borderColor = 'var(--border)';
           }


           init();
       })();
   
