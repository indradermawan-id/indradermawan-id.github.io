(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuBtn = document.querySelector(".menu-btn");
  const progress = document.querySelector(".scroll-progress");

  // Mobile navigation.
  menuBtn?.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("open");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Reveal only when an element enters the viewport, then stop observing it.
  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }, {
    threshold: 0.04,
    rootMargin: "0px 0px -8% 0px"
  });

  revealItems.forEach(el => revealObserver.observe(el));

  // Active section navigation.
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-links a")];

  const navObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const id = "#" + entry.target.id;
      navLinks.forEach(a => a.classList.toggle(
        "active",
        a.getAttribute("href") === id
      ));
    }
  }, {
    rootMargin: "-38% 0px -52% 0px",
    threshold: 0
  });

  sections.forEach(section => navObserver.observe(section));

  // One passive scroll listener, one animation frame at a time.
  let scrollQueued = false;

  const updateScrollUI = () => {
    if (scrollQueued) return;
    scrollQueued = true;

    requestAnimationFrame(() => {
      const y = window.scrollY || 0;

      if (header) header.classList.toggle("scrolled", y > 20);

      if (progress) {
        const max = document.documentElement.scrollHeight - innerHeight;
        const ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
        progress.style.transform = `scaleX(${ratio})`;
      }

      scrollQueued = false;
    });
  };

  addEventListener("scroll", updateScrollUI, {
    passive: true,
    capture: false
  });

  updateScrollUI();

  // Animate counters only once, only when visible.
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = Number(el.dataset.count || 0);
    let started = false;

    const io = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting || started) return;
      started = true;

      const duration = 500;
      const startTime = performance.now();

      const tick = now => {
        const p = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);

        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.5 });

    io.observe(el);
  });

  // Desktop-only hover effects. No permanent RAF loop.
  const finePointer = matchMedia("(pointer:fine)").matches;

  if (finePointer) {
    document.querySelectorAll(".magnetic").forEach(el => {
      let frame = 0;

      el.addEventListener("pointermove", event => {
        cancelAnimationFrame(frame);

        frame = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          const x = (event.clientX - r.left - r.width / 2) * 0.055;
          const y = (event.clientY - r.top - r.height / 2) * 0.055;
          el.style.transform = `translate3d(${x}px,${y}px,0)`;
        });
      });

      el.addEventListener("pointerleave", () => {
        cancelAnimationFrame(frame);
        el.style.transform = "";
      });
    });

    const tilt = document.querySelector(".tilt-card");

    if (tilt) {
      let frame = 0;

      tilt.addEventListener("pointermove", event => {
        cancelAnimationFrame(frame);

        frame = requestAnimationFrame(() => {
          const r = tilt.getBoundingClientRect();
          const x = (event.clientX - r.left) / r.width - 0.5;
          const y = (event.clientY - r.top) / r.height - 0.5;

          tilt.style.transform =
            `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3}deg) translate3d(0,-2px,0)`;
        });
      });

      tilt.addEventListener("pointerleave", () => {
        cancelAnimationFrame(frame);
        tilt.style.transform = "";
      });
    }
  }

  // Current year.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
