
       (function() {
           // ---------- AFFIRMATIONS DATA ----------
           let affirmations = [
   // Abundance & Wealth
   "I am open to receiving abundance in all areas of my life.",
   "I attract wealth and prosperity effortlessly.",
   "My mindset is that of a millionaire, and my actions align with my financial goals.",
   "I am a magnet for financial opportunities, and I embrace them with confidence.",
   "Every day, I am moving closer to my goal of becoming a millionaire.",
   "I am worthy of financial success and all the benefits it brings.",
   "Money flows to me easily and abundantly.",
   "I am grateful for the abundance that is already present in my life.",
   "I am a master of creating wealth, and I use my skills to generate prosperity.",
   "My thoughts are aligned with the energy of abundance and wealth.",
   "I deserve financial freedom, and I allow it to unfold in my life.",
   "My wealth grows as I continue creating value for others.",
   "I attract lucrative opportunities that contribute to my financial goals.",
   "I am constantly learning and improving my financial intelligence.",
   "My actions are aligned with my financial goals.",
   "I release limiting beliefs about money and embrace my potential for wealth.",
   "I surround myself with influences that support my growth and success.",
   "I make wise financial decisions that strengthen my future.",
   "I am open to creating multiple streams of income.",
   "Each day, I become more skilled, confident, disciplined, and successful.",


   // My Software Developer Journey
   "I am a software developer.",
   "I started with little knowledge, and I built my skills one project at a time.",
   "I am proud of how far I have come.",
   "Everything I know today was once something I did not know how to do.",
   "I can learn difficult technical concepts.",
   "I become a stronger developer every time I build something.",
   "Every project I complete adds to my experience.",
   "Every bug I solve makes me a better developer.",
   "Errors are information, not evidence that I cannot code.",
   "I do not need to know everything to be a successful software developer.",
   "I know how to research what I do not know.",
   "I know how to break complicated problems into manageable steps.",
   "I trust myself to figure things out.",
   "I am developing professional software engineering habits.",
   "I understand that great software is built through planning, testing, iteration, and improvement.",
   "I am becoming stronger in frontend development, backend development, databases, APIs, testing, deployment, and maintenance.",
   "My portfolio is evidence of my growth.",
   "I turn ideas into working software.",
   "I am capable of building software people will pay to use.",
   "I am building skills that can support me for the rest of my career.",
   "I am a software developer, and I build things that matter.",
   "I started from nothing, and I built everything I have with my own hands and mind.",
   "I am a self-taught developer, and my journey proves that anything is possible.",
   "I think like an engineer: I break down problems and solve them one step at a time.",
   "I am capable of learning any technology, language, or framework I set my mind to.",
   "Every line of code I write makes me a stronger developer.",
   "I belong in the tech industry, and I bring unique value that no one else can.",
   "I am proud of how far I've come, and excited for how far I'll go.",
   "Challenges in code are opportunities for me to grow and level up.",
   "I am disciplined, focused, and committed to mastering my craft.",
   "I debug problems with patience and confidence, knowing every issue has a solution.",
   "I build software that solves real problems for real people.",
   "I am constantly improving my skills, one project at a time.",
   "I turn ideas into working software — that is my superpower.",
   "I am the developer I once dreamed of becoming.",




   // AI Software Developer
   "I am building my career at the intersection of software development and artificial intelligence.",
   "I know how to turn AI technology into useful business solutions.",
   "I create AI-powered software that solves real problems.",
   "I understand how AI can automate repetitive business processes.",
   "I build intelligent systems that help businesses operate more efficiently.",
   "I continue learning new AI technologies and applying them to practical products.",
   "I am not just consuming AI technology; I am building with it.",
   "AI expands what I am capable of creating.",
   "My technical skills and creativity give me an advantage.",
   "I am becoming an expert in building practical AI-powered business software.",
   "I am the founder and creator of custom AI receptionist software that transforms businesses.",
   "I sell AI solutions that save people time, money, and stress — and I am paid well for it.",
   "Business owners trust me with their technology, and I deliver excellence.",
   "I create AI software that helps individuals and businesses thrive.",
   "Every client I serve is a testament to my skill, vision, and hard work.",
   "I am a builder of intelligent systems and a creator of real-world impact.",
   "I attract ideal clients who value my AI receptionist software and pay me what I'm worth.",
   "My AI software runs reliably, scales effortlessly, and serves clients around the clock.",
   "I am a tech entrepreneur — I create value, solve problems, and generate income.",
   "I confidently sell my software because I know it works and it helps people.",
   "I am pioneering AI solutions that make businesses more efficient and profitable.",
   "My customers win because I win — and we grow together.",
   "I am building a legacy as a developer, founder, and creator of intelligent software.",
   "I turn my technical skills into products that generate recurring revenue.",
   "I am not just writing code — I am building a future of freedom and wealth.",


   // AI Receptionist Business
   "I build and sell custom AI receptionist software.",
   "My AI receptionists help businesses answer customers, capture leads, schedule appointments, and automate communication.",
   "My software solves real business problems.",
   "Businesses are willing to pay for software that saves them time and helps them make money.",
   "I confidently explain the value of my AI receptionist solutions.",
   "I customize my software around the needs of each client.",
   "Every client teaches me how to make my products better.",
   "I am building repeatable systems for selling and deploying AI receptionist software.",
   "My AI receptionist business creates recurring revenue opportunities.",
   "I turn client problems into profitable software solutions.",
   "I create software that works for businesses even when they are closed.",
   "My products create value around the clock.",
   "I am building technology that businesses can depend on.",


   // Entrepreneur & Founder
   "I am not only a developer; I am a technology entrepreneur.",
   "I know how to transform an idea into a product.",
   "I know how to transform a product into an offer.",
   "I know how to transform an offer into a business.",
   "I create solutions instead of waiting for opportunities.",
   "I am building intellectual property that I own.",
   "My code, systems, templates, components, and processes become reusable business assets.",
   "Every project makes my business stronger.",
   "I am creating systems that allow me to serve more clients without starting over each time.",
   "I price my work according to the value I create.",
   "I do not have to compete by being the cheapest developer.",
   "The right customers value my expertise.",
   "I confidently communicate what my services are worth.",
   "I am learning how to sell technology as well as build it.",
   "I attract clients who need the solutions I know how to create.",
   "My business becomes more professional with every project.",
   "I am building a real software company, one system at a time.",


   // Customers & Sales
   "There are businesses right now that need solutions I can build.",
   "I confidently introduce my services to potential customers.",
   "I am comfortable talking about my software and its value.",
   "Selling is simply helping the right customer understand how my solution can help them.",
   "Rejection does not determine my value or my ability.",
   "Every conversation improves my sales skills.",
   "I consistently create opportunities instead of waiting for customers to find me.",
   "My work speaks for itself, and I learn to communicate its value clearly.",
   "I build relationships with customers based on trust, professionalism, and results.",
   "Satisfied clients create referrals, testimonials, and future opportunities.",
   "I am building a reputation for solving problems with technology.",


   // Professional Growth
   "I approach my projects like a professional software engineer.",
   "I plan before I build.",
   "I document my requirements.",
   "I use version control.",
   "I test my software.",
   "I fix defects instead of ignoring them.",
   "I protect customer information and take security seriously.",
   "I document my systems so they can be maintained and improved.",
   "I continuously improve my development process.",
   "I finish projects instead of endlessly chasing new ideas.",
   "I deploy what I build.",
   "I learn from real users.",
   "I improve my software based on evidence and feedback.",
   "My discipline is becoming as powerful as my creativity.",


   // Resilience
   "I started from nothing, but I did not stay there.",
   "I built knowledge where there was once uncertainty.",
   "I built skills where there was once inexperience.",
   "I built projects where there were once only ideas.",
   "I can look at my progress as proof that I am capable of changing my life.",
   "I have already learned things that once seemed impossible.",
   "When I do not know something, I learn it.",
   "When something breaks, I investigate it.",
   "When something fails, I improve it.",
   "When I make a mistake, I use it as data.",
   "I do not need perfect circumstances to continue progressing.",
   "Consistency compounds.",
   "Small improvements made every day create extraordinary results.",
   "My past does not determine the limits of my future.",
   "I am building the life I once imagined.",


   // Future Identity
   "I wake up knowing that I have valuable skills.",
   "I earn money using my knowledge, creativity, and technology.",
   "I build software from anywhere.",
   "I have customers who trust me to solve their technology problems.",
   "My software generates income.",
   "My business generates recurring revenue.",
   "My skills create opportunities wherever I go.",
   "I have multiple ways to generate income with technology.",
   "I own valuable software products and digital assets.",
   "I am financially independent because I learned how to create value.",
   "I am building something bigger than a job.",
   "I am creating a career, a company, and a body of work that belongs to me.",


   // The Transformation
   "I remember when I was trying to figure out where to begin.",
   "Now I know how to design, build, test, document, and improve software.",
   "I remember when these technologies were unfamiliar to me.",
   "Now I use them to turn ideas into real applications.",
   "I started as a beginner.",
   "I became a builder.",
   "I became a software developer.",
   "I became a business owner.",
   "I became someone who creates solutions.",
   "I started from nothing, and I built something real.",
   "I started from nothing, and now I have skills nobody can take away from me.",
   "I started from nothing, and now I have products I can sell.",
   "I started from nothing, and now I have a business I can grow.",
   "I started from nothing, and now I know how to create my own opportunities.",
   "I am living proof that consistent learning can completely change a person's direction.",
   "And I am still getting started."
];


           let total = affirmations.length;
           let currentIndex = 0;
           let favorites = new Set();
           let isReadAloudEnabled = false;
           let cardUpdateId = 0;
           let touchStartX = 0;
           let touchStartY = 0;
           let isSwiping = false;


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
           const favCountEl = document.getElementById('favCount');
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
                   favoriteBtn.textContent = '★';
                   favoriteBtn.classList.add('favorited');
               } else {
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
               progressDots.innerHTML = '';
               for (let i = 0; i < total; i++) {
                   const dot = document.createElement('span');
                   dot.classList.add('progress-dot');
                   if (i === currentIndex) dot.classList.add('active');
                   if (favorites.has(i)) dot.classList.add('favorite-dot');
                   dot.title = `Affirmation ${i + 1}`;
                   dot.addEventListener('click', () => goToIndex(i));
                   progressDots.appendChild(dot);
               }
           }


           function updateFavCount() {
               favCountEl.textContent = favorites.size;
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
               const newIndex = (currentIndex + 1) % total;
               goToIndex(newIndex, true, 'next');
           }


           function prevAffirmation() {
               const newIndex = (currentIndex - 1 + total) % total;
               goToIndex(newIndex, true, 'prev');
           }


           function randomAffirmation() {
               let newIndex;
               if (total <= 1) {
                   newIndex = 0;
               } else {
                   do {
                       newIndex = Math.floor(Math.random() * total);
                   } while (newIndex === currentIndex);
               }
               goToIndex(newIndex, true, 'random');
               showToast('🔮 New affirmation!');
           }


           // ---------- FAVORITES ----------
           function loadFavorites() {
               try {
                   const stored = localStorage.getItem('millionaireAffirmationFavorites');
                   if (stored) {
                       const arr = JSON.parse(stored);
                       if (Array.isArray(arr)) {
                           favorites = new Set(arr.filter(n => Number.isInteger(n) && n >= 0 && n < total));
                       }
                   }
               } catch (e) {
                   favorites = new Set();
               }
           }


           function saveFavorites() {
               try {
                   localStorage.setItem('millionaireAffirmationFavorites', JSON.stringify([...favorites]));
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
                               btnFavoritesToggle.textContent = '⭐ Favorites ' + favorites.size;
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
                   btnFavoritesToggle.textContent = '✕ Close';
               } else {
                   btnFavoritesToggle.textContent = '⭐ Favorites ' + favorites.size;
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
               showToast('✨ Your affirmation added!');
               saveAffirmationsToLocal(); // optional persistence
           }


           // Persist custom affirmations in localStorage (optional but nice)
           function saveAffirmationsToLocal() {
               try {
                   localStorage.setItem('millionaireAffirmationsCustom', JSON.stringify(affirmations));
               } catch (e) {}
           }


           function loadAffirmationsFromLocal() {
               try {
                   const stored = localStorage.getItem('millionaireAffirmationsCustom');
                   if (stored) {
                       const arr = JSON.parse(stored);
                       if (Array.isArray(arr)) {
                           const validAffirmations = arr.filter(item =>
                               typeof item === 'string' && item.trim().length > 0
                           );
                           if (validAffirmations.length > 0) {
                               affirmations = validAffirmations;
                               total = affirmations.length;
                           }
                       }
                   }
               } catch (e) {}
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
   
