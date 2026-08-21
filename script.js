const header=document.querySelector('.site-header');
const menuBtn=document.querySelector('.menu-btn');
const progress=document.querySelector('.scroll-progress');
const cursorDot=document.querySelector('.cursor-dot');
const cursorRing=document.querySelector('.cursor-ring');

menuBtn?.addEventListener('click',()=>{const open=header.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{header.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

const revealObserver=new IntersectionObserver(entries=>{entries.forEach((entry,index)=>{if(!entry.isIntersecting)return;entry.target.style.transitionDelay=`${Math.min(index*55,220)}ms`;entry.target.classList.add('visible');revealObserver.unobserve(entry.target);});},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('main section[id]')];
const navLinks=[...document.querySelectorAll('.nav-links a')];
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));});},{rootMargin:'-40% 0px -50% 0px',threshold:0});
sections.forEach(section=>navObserver.observe(section));

function updateScroll(){
  const max=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`;
  header.classList.toggle('scrolled',window.scrollY>24);
}
window.addEventListener('scroll',updateScroll,{passive:true});
updateScroll();

document.querySelectorAll('.magnetic').forEach(el=>{
  el.addEventListener('mousemove',e=>{
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)*.12;
    const y=(e.clientY-r.top-r.height/2)*.12;
    el.style.transform=`translate(${x}px,${y}px)`;
  });
  el.addEventListener('mouseleave',()=>{el.style.transform='';});
});

const tilt=document.querySelector('.tilt-card');
tilt?.addEventListener('mousemove',e=>{const r=tilt.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;tilt.style.transform=`perspective(900px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-3px)`;});
tilt?.addEventListener('mouseleave',()=>tilt.style.transform='');

if(window.matchMedia('(pointer:fine)').matches){
  let mx=0,my=0,rx=0,ry=0;
  window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursorDot.style.left=`${mx}px`;cursorDot.style.top=`${my}px`;});
  function cursorLoop(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;cursorRing.style.left=`${rx}px`;cursorRing.style.top=`${ry}px`;requestAnimationFrame(cursorLoop)}
  cursorLoop();
  document.querySelectorAll('a,button,.tilt-card').forEach(el=>{el.addEventListener('mouseenter',()=>cursorRing.classList.add('hover'));el.addEventListener('mouseleave',()=>cursorRing.classList.remove('hover'));});
}

document.querySelectorAll('[data-count]').forEach(el=>{
  const target=Number(el.dataset.count); let started=false;
  const io=new IntersectionObserver(entries=>{if(!entries[0].isIntersecting||started)return;started=true;let start=0;const step=()=>{start+=Math.max(1,Math.ceil(target/16));el.textContent=Math.min(start,target);if(start<target)requestAnimationFrame(step)};step();io.disconnect();},{threshold:.7});
  io.observe(el);
});

document.getElementById('year').textContent=new Date().getFullYear();
