// --- Theme Toggle + Animated Transition ---
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  if (document.documentElement.classList.contains('dark')) {
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
  document.body.classList.add('transition-colors');
  setTimeout(()=>document.body.classList.remove('transition-colors'),600);
});
if(localStorage.getItem('theme')==='dark'){
  document.documentElement.classList.add('dark');
  themeIcon.textContent = '☀️';
}

// --- Animated cursor trail ---
const cursorTrail = document.getElementById("cursor-trail");
document.addEventListener('mousemove', e => {
  cursorTrail.style.transform = `translate(${e.clientX-8}px,${e.clientY-8}px)`;
});
// Glow on hover for buttons/links
[...document.querySelectorAll('.btn-animated, .nav-link, .skill-icon')].forEach(el=>{
  el.addEventListener('mouseenter',()=>cursorTrail.style.background='rgba(168,139,250,0.29)');
  el.addEventListener('mouseleave',()=>cursorTrail.style.background='rgba(59,130,246,0.27)');
});

// --- Typing animation with glitch + colors ---
const typedEl = document.getElementById('typed');
const words = [
  "Hi, I'm <span class='text-blue-400'>[Name]</span>, a <span class='text-pink-400'>17-year-old</span> developer passionate about <span class='text-yellow-300'>building websites</span> and <span class='text-green-400'>Minecraft mods</span>!",
  "Hi, I'm <span class='text-blue-400'>[Name]</span>, and I love <span class='text-purple-400'>coding cool stuff</span>."
];
let wordIndex = 0, letterIndex = 0, cur = '', isDeleting = false;

function typeLoop() {
  const plainWord = words[wordIndex];
  let cleanText = plainWord.replace(/<[^>]+>/g,'');
  if(isDeleting){
    letterIndex--;
    if(letterIndex<0){
      isDeleting=false;
      wordIndex=(wordIndex+1)%words.length;
      setTimeout(typeLoop,750);
      return;
    }
  }else{
    letterIndex++;
    if(letterIndex>cleanText.length){
      isDeleting=true;
      setTimeout(typeLoop,1500);
      return;
    }
  }
  // Colorize output per letter using original markup
  let out = plainWord;
  let visibleLen = letterIndex;
  let insideTag=false, result='', charCount=0;
  for(let i=0;i<out.length;i++){
    if(out[i]==='<') insideTag=true;
    if(!insideTag) charCount++;
    if(charCount>visibleLen) break;
    result+=out[i];
    if(out[i]==='>') insideTag=false;
  }
  typedEl.innerHTML = result;
  setTimeout(typeLoop, isDeleting?34:85);
}
document.addEventListener('DOMContentLoaded', typeLoop);

// --- Animate particles background with tsParticles ---
window.addEventListener('DOMContentLoaded',()=>{
  tsParticles.load("particle-hero",{
    background:{ color: {value: "transparent"} },
    fpsLimit: 60,
    particles: {
      number:{ value:44 }, color:{ value: "#60a5fa" },
      shape:{ type:"circle" }, opacity:{ value:0.16 },
      size:{ value:3 }, move:{ enable:true, speed:1.2 },
      links:{
        enable:true, distance:115, color:"#a78bfa", opacity:0.13, width:2
      }
    },
    interactivity:{
      events:{ onhover:{ enable:true, mode:"grab" } },
      modes:{ grab:{distance:124, line_linked:{opacity:0.9} } }
    }
  });
});

// --- Navbar entrance, sticky show/hide on scroll ---
const navbar=document.getElementById('navbar');
let lastScroll=0;
window.addEventListener('scroll', ()=>{
  let curScroll=window.scrollY;
  if(curScroll===0){ navbar.style.opacity='1'; navbar.style.transform='translateY(0)'; }
  if(curScroll>lastScroll && curScroll>90){ navbar.style.opacity='0.77'; navbar.style.transform='translateY(-25px)'; }
  else {navbar.style.opacity='1'; navbar.style.transform='translateY(0)'; }
  lastScroll=curScroll;
});

// --- GSAP: Card/sticky section entrance, project card hovers ---
window.addEventListener('DOMContentLoaded',()=>{
  gsap.registerPlugin(ScrollTrigger);
  // Animate project cards on entrance
  gsap.utils.toArray('.project-card').forEach((card,i)=>{
    gsap.from(card,{
      opacity:0, y:48, scale:0.83, duration:1.05,
      delay:0.12+0.11*i,
      scrollTrigger:{
        trigger:card, start:"top 80%", toggleActions:'play none none none'
      }
    });
    // Slight pop hover using event
    card.addEventListener('mouseenter',()=>gsap.to(card, {scale:1.07,boxShadow:'0 12px 36px #a78bfa42', duration:0.27}));
    card.addEventListener('mouseleave',()=>gsap.to(card, {scale:1,boxShadow:'0 4px 14px #a78bfa21', duration:0.33}));
  });

  // Animated progress bars on skills
  gsap.utils.toArray('.animate-progress').forEach(bar=>{
    gsap.from(bar,{width:"0", duration:1.35, ease:"power3.out",
      scrollTrigger:{ trigger:bar, start:"top 90%", toggleActions:'play none none none' }
    })
  });
});
