// ==========================================
// CUSTOMIZATION VARIABLES (Configure Here)
// ==========================================
const pin = "0101"; 
const girlfriendName = "BINI"; 
const age = "20"; 
const yourName = "Nirmal";

// 1. YOUR RELATIONSHIP DATE (Change this to your exact anniversary date)
const relationshipStartDate = "2025-04-14T00:00:00"; // Format: YYYY-MM-DDTHH:MM:SS

// 2. YOUR MUSIC (Updated with your custom background audio track)
const musicUrl = "https://files.catbox.moe/2lkspv.mp3"; 

// 3. YOUR PHOTO GALLERY (Replace the links inside "" with your own image URLs)
const photos = [
    "https://i.postimg.cc/gkvN61k7/1783538539591.webp", // Photo 1
    "https://i.postimg.cc/BQWmbJsV/1783538539632.jpg", // Photo 2
    "https://i.postimg.cc/15pJNb3y/1783538539763.jpg", // Photo 3
    "https://i.postimg.cc/02gVj9xn/1783538539604.jpg", // Photo 4
    "https://i.postimg.cc/mZ1dTPxF/1783538539619.jpg", // Photo 5
    "https://i.postimg.cc/xTr689Yg/1783538539664.jpg", // Photo 6
    "https://i.postimg.cc/ZnSrLKww/PC290488-(1).jpg", // Photo 7
    "https://i.postimg.cc/ZKmc8jQG/DSC9368.jpg"   // Photo 8
];

// 4. YOUR BEAUTIFUL MEMORIES TIMELINE (4 photos + custom text for your memories)
const memoryPhotos = [
    "https://i.postimg.cc/28MrVby7/MNP00158.jpg", // Memory Photo 1
    "https://i.postimg.cc/k5GwV4HK/IMG-20250319-170652.jpg", // Memory Photo 2
    "https://i.postimg.cc/Y0ykNj3x/IMG-20250414-164420.jpg", // Memory Photo 3
    "https://i.postimg.cc/02b9kdkD/IMG-20260515-171631-(1).jpg"  // Memory Photo 4
]; 
    
const timelineData = [
    { title: "Th Best Day Ever", text: "The day the universe rewrote itself and my life shifted forever.", date: "Beautiful Captured" },
    { title: "Our Very First Movie Date", text: "Butterflies, nervous laughs, and an undeniable cosmic pull.", date: "Beginning of BINI Era" },
    { title: "A Special Milestone Together", text: "Hand in hand, overcoming challenges and sealing our bond.", date: "Forever Special- Day" },
    { title: "Another Year of Pure Bliss", text: "Standing stronger, loving harder, and looking forward to forever.", date: "Today" }
];

// 5. 10 REASONS I LOVE YOU (Exactly 10 cards)
const coreTraits = [
    "Your gorgeous smile that brightens up my day.",
    "Your pure kindness to everyone around you..AWwwww.",
    "Your sweet voice I can listen to forever.",
    "Your golden heart that loves me unconditionally.",
    "Your limitless support whenever I feel down.",
    "Your Katil eyes that look right into my soul.",
    "Your absolute honesty and transparency.",
    "Your inspiring dreams that make me want to be better.",
    "The way you wrap your hands around me.",
    "Infinity reasons to LOVE YOU my baby."
];

// 6. YOUR EDITABLE LOVE LETTER
const customLoveLetterText = `My Dearest LOVE,

Happy Birthday to the most precious person in my life. Every single day spent with you feels like a beautiful dream I never want to wake up from. You are my laughter, my peace, and my greatest adventure. Entering this beautiful BINI Era with you has been the best part of my journey.

Thank you for being my rock, my biggest supporter, and the love of my life. May this year bring you as much endless joy as you unconditionally bring to my heart.

Forever and always, yours.`;

const finalMessage = "HAPPY BIRTHDAY MY Princess! 🎂🎉 You make my universe complete. Today, tomorrow, and for the rest of eternity, my heart belongs entirely to you. BINI FOREVER! ♾️❤️";

// 7. WISH TREE PROMISES (30 Custom promises)
const romanticWishes = [
    "I promise to always hold your hand through every single storm.",
    "I promise to celebrate your triumphs as if they were my own.",
    "I promise to love you deeper even on difficult days.",
    "I promise to listen to you with an open heart and soul.",
    "I promise to keep choosing you, every single morning.",
    "I promise to be your safest shelter and comfort zone.",
    "I promise to never stop trying to win your smile.",
    "I promise to respect your boundaries and fuel your passions.",
    "I promise to make you laugh whenever you feel heavy.",
    "I promise to construct a beautiful future with you.",
    "I promise to stay faithful, honest, and completely yours.",
    "I promise to love every flaw and perfect imperfection.",
    "I promise to remind you of your worth when you forget.",
    "I promise to share all my dreams and secrets with you.",
    "I promise to stand firmly by your side against the world.",
    "I promise to make ordinary moments feel magical.",
    "I promise to dance with you in the pouring rain.",
    "I promise to prioritize our connection above all else.",
    "I promise to cook your favorite meals when you are weary.",
    "I promise to grow old alongside you gracefully.",
    "I promise to protect your peace with all my strength.",
    "I promise to find new reasons to admire you daily.",
    "I promise to love your family like my own family.",
    "I promise to support your wildly beautiful dreams.",
    "I promise to cherish the quiet spaces between us.",
    "I promise to count stars with you on silent nights.",
    "I promise to be your absolute best friend forever.",
    "I promise to wrap you in warmth when it gets freezing.",
    "I promise to write our love story with beautiful memories.",
    "I promise my heart will beat for you until its very last thump."
];

// ==========================================
// CORE ENGINE AND SLIDE NAVIGATION LOGIC
// ==========================================
let currentPinInput = "";
const canvas = document.getElementById("magicCanvas");
const ctx = canvas.getContext("2d");
let activeParticles = [];
let currentSlideIndex = 0;
let sectionsList = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class MagicParticle {
    constructor(type) {
        this.type = type;
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = this.type === 'petal' || this.type === 'heart' ? -20 : Math.random() * canvas.height;
        this.size = Math.random() * 8 + (this.type === 'petal' ? 8 : 3);
        this.speedX = Math.random() * 2 - 1;
        this.speedY = this.type === 'firefly' ? Math.random() * 1 - 0.5 : Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.4;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        if (this.type === 'petal') {
            this.color = ['#D41434', '#FF4D6D', '#FFB3C1'][Math.floor(Math.random() * 3)];
        } else if (this.type === 'heart') {
            this.color = '#FF1A43';
        } else {
            this.color = '#D4AF37';
        }
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) this.reset();
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        if (this.type === 'petal') {
            ctx.ellipse(0, 0, this.size, this.size / 1.5, 0, 0, 2 * Math.PI);
        } else {
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();
    }
}

function deployExplosion(intensity) {
    for (let i = 0; i < intensity; i++) {
        let p = new MagicParticle('heart');
        p.x = Math.random() * canvas.width;
        p.y = Math.random() * canvas.height * 0.5;
        activeParticles.push(p);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 40; i++) activeParticles.push(new MagicParticle('petal'));
    for (let i = 0; i < 20; i++) activeParticles.push(new MagicParticle('heart'));
    
    function runLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        activeParticles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(runLoop);
    }
    runLoop();
    simulateLoadingEngine();
    populateDataInjections();
});

function simulateLoadingEngine() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        document.getElementById("progressBar").style.width = progress + '%';
        document.getElementById("progressText").innerText = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            transitionScreen("loadingScreen", "lockScreen");
        }
    }, 40);
}

function populateDataInjections() {
    document.getElementById("heroGfName").innerText = girlfriendName;
    document.getElementById("todayDate").innerText = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("bgMusic").src = musicUrl;
    document.getElementById("letterText").innerText = customLoveLetterText;

    // Build Gallery
    const galleryGrid = document.getElementById("galleryGrid");
    photos.forEach((url, i) => {
        const div = document.createElement("div");
        div.className = "gallery-card glass-card";
        div.onclick = () => openLightbox(url);
        div.innerHTML = `<img src="${url}"><div class="gallery-overlay"><h4>Memory #${i+1}</h4></div>`;
        galleryGrid.appendChild(div);
    });

    // Build Timeline
    const timeline = document.getElementById("timelineContainer");
    timelineData.forEach((data, i) => {
        const div = document.createElement("div");
        div.className = "timeline-item visible";
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${data.date}</div>
            <div class="glass-card timeline-content-box">
                <img class="timeline-img" src="${memoryPhotos[i]}">
                <div class="timeline-text"><h3>${data.title}</h3><p>${data.text}</p></div>
            </div>`;
        timeline.appendChild(div);
    });

    // Build 10 Reasons
    const reasonsGrid = document.getElementById("reasonsGrid");
    coreTraits.forEach((trait, i) => {
        const div = document.createElement("div");
        div.className = "reason-card-wrapper";
        div.onclick = () => div.classList.toggle("flipped");
        div.innerHTML = `
            <div class="reason-card-inner">
                <div class="reason-card-front"><i class="fa-solid fa-heart"></i><p>Reason #${i+1}</p></div>
                <div class="reason-card-back"><h4>${trait}</h4></div>
            </div>`;
        reasonsGrid.appendChild(div);
    });

    // Build Wish Tree Coordinates
    const treeContainer = document.getElementById("treeLeavesContainer");
    const canopy = [{t:15, l:50}, {t:25, l:35}, {t:22, l:65}, {t:35, l:20}, {t:32, l:50}, {t:35, l:80}, {t:45, l:15}, {t:48, l:40}, {t:43, l:62}, {t:46, l:85}, {t:55, l:25}, {t:58, l:50}, {t:54, l:75}, {t:28, l:42}, {t:27, l:58}];
    romanticWishes.slice(0, canopy.length).forEach((wish, i) => {
        const leaf = document.createElement("i");
        leaf.className = "fa-solid fa-heart tree-leaf-heart";
        leaf.style.top = canopy[i].t + '%';
        leaf.style.left = canopy[i].l + '%';
        leaf.onclick = (e) => { e.stopPropagation(); document.getElementById("wishDisplayText").innerText = wish; document.getElementById("wishDisplayCard").classList.remove("hidden"); };
        treeContainer.appendChild(leaf);
    });
}

function transitionScreen(fromId, toId) {
    document.getElementById(fromId).classList.remove("active");
    document.getElementById(fromId).classList.add("hidden");
    document.getElementById(toId).classList.remove("hidden");
    document.getElementById(toId).classList.add("active");
}

function pressKey(num) {
    if (currentPinInput.length >= 4) return;
    currentPinInput += num;
    const dots = document.querySelectorAll(".pin-dot");
    dots.forEach((d, i) => i < currentPinInput.length ? d.classList.add("active") : d.classList.remove("active"));
}

function clearPin() {
    currentPinInput = "";
    document.querySelectorAll(".pin-dot").forEach(d => d.classList.remove("active"));
}

function submitPin() {
    if (currentPinInput === pin) {
        deployExplosion(50);
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        
        const audio = document.getElementById("bgMusic");
        audio.play().catch(() => {});
        
        // Gather all sections
        sectionsList = Array.from(document.querySelectorAll("#mainContent > section"));
        
        // Reset and hide everything except the first section (Welcome Hero)
        sectionsList.forEach((s, idx) => {
            if (idx === 0) {
                s.classList.remove("hidden");
                s.classList.add("active");
            } else {
                s.classList.add("hidden");
                s.classList.remove("active");
            }
            
            // Attach explicit next navigation buttons to eligible sections
            if (idx === 1 || (idx >= 3 && s.id !== "finalPage")) {
                // Clear any leftover duplicate buttons first
                const existingBtn = s.querySelector(".grand-surprise-btn");
                if (existingBtn) existingBtn.remove();

                const nextBtn = document.createElement("button");
                nextBtn.className = "grand-surprise-btn";
                nextBtn.style.marginTop = "40px";
                nextBtn.innerText = idx === sectionsList.length - 2 ? "See Final Surprise ❤️" : "Next Chapter ✨";
                nextBtn.onclick = (e) => {
                    e.stopPropagation(); // Prevents double-firing crashes
                    advanceToNextSlide();
                };
                s.appendChild(nextBtn);
            }
        });
        
        animateAgeCounter();
        initializeChronographTimer();
    } else {
        document.getElementById("errorMessage").innerText = "❌ Try again, my queen.";
        clearPin();
    }
}

function handleExcitedEngagement() {
    const excitedBtn = document.getElementById("excitedBtn");
    if (excitedBtn) {
        excitedBtn.style.boxShadow = "0 0 50px #FF1A43";
        excitedBtn.style.transform = "scale(0.95)";
    }
    
    deployExplosion(60);
    let burstCount = 0;
    const burstInterval = setInterval(() => {
        deployExplosion(20);
        burstCount++;
        if(burstCount > 3) clearInterval(burstInterval);
    }, 400);

    const excitedScreen = document.getElementById("excitedScreen");
    excitedScreen.classList.add("cinematic-fade-out");

    setTimeout(() => {
        excitedScreen.classList.remove("active", "cinematic-fade-out");
        excitedScreen.classList.add("hidden");
        
        // --- THIS CRITICAL LINE WAS MISSING OR BROKEN ---
        // It brings the entire birthday layout to life!
        document.getElementById("mainContent").classList.remove("hidden");
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
}
function advanceToNextSlide() {
    if (currentSlideIndex < sectionsList.length) {
        sectionsList[currentSlideIndex].classList.add("hidden");
        sectionsList[currentSlideIndex].classList.remove("active");
    }
    
    currentSlideIndex++;
    
    if (currentSlideIndex < sectionsList.length) {
        sectionsList[currentSlideIndex].classList.remove("hidden");
        sectionsList[currentSlideIndex].classList.add("active");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        deployExplosion(20);
        
        if (sectionsList[currentSlideIndex].id === "finalPage") {
            triggerGrandFinale();
        }
    }
}

function toggleMusic() {
    const audio = document.getElementById("bgMusic");
    if (audio.paused) audio.play(); else audio.pause();
}

function changeVolume(val) { document.getElementById("bgMusic").volume = val; }

function animateAgeCounter() {
    let count = 0;
    const timer = setInterval(() => {
        count++;
        const ageDisp = document.getElementById("ageDisplay");
        if(ageDisp) ageDisp.innerText = count;
        if (count >= parseInt(age)) clearInterval(timer);
    }, 50);
}

function initializeChronographTimer() {
    const start = new Date(relationshipStartDate).getTime();
    setInterval(() => {
        const diff = new Date().getTime() - start;
        const cy = document.getElementById("cd-years");
        const cm = document.getElementById("cd-months");
        const cd = document.getElementById("cd-days");
        const ch = document.getElementById("cd-hours");
        const cmin = document.getElementById("cd-minutes");
        const cs = document.getElementById("cd-seconds");

        if(cy) cy.innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))).padStart(2, '0');
        if(cm) cm.innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.43))).padStart(2, '0');
        if(cd) cd.innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24 * 30.43)) / (1000 * 60 * 60 * 24))).padStart(2, '0');
        if(ch) ch.innerText = String(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        if(cmin) cmin.innerText = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        if(cs) cs.innerText = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
    }, 1000);
}

function igniteCake() {
    document.getElementById("candleFlame").style.display = "block";
    document.getElementById("cakeMessage").classList.remove("hidden");
    deployExplosion(40);
}

function openLetter() { document.getElementById("envelopeWrapper").classList.toggle("open"); }
function openLightbox(url) { document.getElementById("lightbox").style.display = "block"; document.getElementById("lightboxImg").src = url; }
function closeLightbox() { document.getElementById("lightbox").style.display = "none"; }

function triggerGrandFinale() {
    const finalGfNameElement = document.getElementById("finalGfName");
    if (finalGfNameElement) finalGfNameElement.innerText = girlfriendName;
    
    const finalCustomMsgElement = document.getElementById("finalCustomMessage");
    if (finalCustomMsgElement) {
        finalCustomMsgElement.innerHTML = `<span style="font-size: 1.6rem; font-weight: bold; display: block; margin-bottom: 15px; color: #D4AF37;">${finalMessage}</span>`;
    }
    
    const namesDisplayElement = document.getElementById("namesDisplay");
    if (namesDisplayElement) namesDisplayElement.innerText = `From Your Love, ${yourName} ❤️`;
    
    const finalDateDisplayElement = document.getElementById("finalDateDisplay");
    if (finalDateDisplayElement) finalDateDisplayElement.innerText = "July 12";
    
    const finalPageElement = document.getElementById("finalPage");
    if (finalPageElement) finalPageElement.classList.remove("hidden");
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setInterval(() => deployExplosion(5), 1000);
}