const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const progress = document.querySelector('.scroll-progress');
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

menuBtn?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
    menuBtn?.setAttribute('aria-expanded', 'false');
  });
});

// Reveal animation: opacity + transform only, once per element.
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Active navigation.
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => navObserver.observe(section));

// Scroll work is batched into one animation frame.
let scrollTick = false;
function updateScroll() {
  if (scrollTick) return;
  scrollTick = true;

  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? window.scrollY / max : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    header.classList.toggle('scrolled', window.scrollY > 24);
    scrollTick = false;
  });
}

window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

// Lightweight magnetic hover.
if (window.matchMedia('(pointer:fine)').matches) {
  document.querySelectorAll('.magnetic').forEach(el => {
    let frame = 0;
    el.addEventListener('pointermove', e => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.08;
        const y = (e.clientY - r.top - r.height / 2) * 0.08;
        el.style.transform = `translate3d(${x}px,${y}px,0)`;
      });
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });

  const tilt = document.querySelector('.tilt-card');
  tilt?.addEventListener('pointermove', e => {
    const r = tilt.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.style.transform =
      `perspective(900px) rotateX(${y * -3}deg) rotateY(${x * 4}deg) translate3d(0,-2px,0)`;
  });
  tilt?.addEventListener('pointerleave', () => {
    tilt.style.transform = '';
  });

  // Custom cursor uses transform instead of layout-changing left/top.
  let mx = innerWidth / 2, my = innerHeight / 2;
  let rx = mx, ry = my;
  let cursorFrame = 0;

  window.addEventListener('pointermove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.transform = `translate3d(${mx}px,${my}px,0) translate(-50%,-50%)`;
  }, { passive: true });

  const cursorLoop = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    cursorRing.style.transform =
      `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
    cursorFrame = requestAnimationFrame(cursorLoop);
  };
  cursorLoop();

  document.querySelectorAll('a,button,.tilt-card').forEach(el => {
    el.addEventListener('pointerenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('pointerleave', () => cursorRing.classList.remove('hover'));
  });
}

// Small counters animate only when visible.
document.querySelectorAll('[data-count]').forEach(el => {
  const target = Number(el.dataset.count);
  let started = false;

  const io = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || started) return;
    started = true;

    let start = 0;
    const step = () => {
      start += Math.max(1, Math.ceil(target / 16));
      el.textContent = Math.min(start, target);
      if (start < target) requestAnimationFrame(step);
    };
    step();
    io.disconnect();
  }, { threshold: 0.7 });

  io.observe(el);
});

document.getElementById('year').textContent = new Date().getFullYear();
