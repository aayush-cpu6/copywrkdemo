document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const loader = document.getElementById('experience-loader');
  const introKey = 'copywrk-intro-v1';

  if (loader) {
    let seen = false;
    try { seen = sessionStorage.getItem(introKey) === '1'; } catch {}
    if (seen || reduceMotion) {
      loader.remove();
    } else {
      document.body.classList.add('experience-loading');
      window.setTimeout(() => {
        loader.classList.add('is-exiting');
        document.body.classList.remove('experience-loading');
        try { sessionStorage.setItem(introKey, '1'); } catch {}
        window.setTimeout(() => loader.remove(), 700);
      }, 1450);
    }
  }

  const canvas = document.getElementById('signal-field');
  const hero = canvas?.closest('section');
  if (!canvas || !hero) return;
  const context = canvas.getContext('2d', { alpha: true });
  if (!context) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let particles = [];
  let running = true;
  const pointer = { x: -9999, y: -9999, active: false };

  const particleCount = () => window.innerWidth < 700 ? 34 : window.innerWidth < 1100 ? 50 : 76;
  const makeParticle = () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - .5) * .18,
    vy: (Math.random() - .5) * .15,
    radius: Math.random() * 1.45 + .45,
    phase: Math.random() * Math.PI * 2,
    blue: Math.random() > .28
  });

  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 1.7);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    particles = Array.from({ length: particleCount() }, makeParticle);
  }

  function draw(time = 0) {
    context.clearRect(0, 0, width, height);
    const glow = context.createRadialGradient(width * .68, height * .42, 0, width * .68, height * .42, Math.max(width, height) * .58);
    glow.addColorStop(0, 'rgba(40,103,230,.075)');
    glow.addColorStop(.45, 'rgba(103,65,190,.025)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      if (!reduceMotion) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 125 && distance > .1) {
            const force = (125 - distance) / 125 * .38;
            particle.x += dx / distance * force;
            particle.y += dy / distance * force;
          }
        }
      }

      for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
        const other = particles[otherIndex];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distanceSquared = dx * dx + dy * dy;
        const linkDistance = window.innerWidth < 700 ? 86 : 112;
        if (distanceSquared < linkDistance * linkDistance) {
          const opacity = (1 - Math.sqrt(distanceSquared) / linkDistance) * .16;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(91,140,255,${opacity})`;
          context.lineWidth = .6;
          context.stroke();
        }
      }

      const pulse = reduceMotion ? 1 : .72 + Math.sin(time * .0013 + particle.phase) * .28;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius * pulse, 0, Math.PI * 2);
      context.fillStyle = particle.blue ? `rgba(103,160,255,${.32 + pulse * .38})` : `rgba(166,117,255,${.26 + pulse * .3})`;
      context.fill();
    }

    if (pointer.active && !reduceMotion) {
      const halo = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 115);
      halo.addColorStop(0, 'rgba(91,145,255,.11)');
      halo.addColorStop(1, 'rgba(91,145,255,0)');
      context.fillStyle = halo;
      context.fillRect(pointer.x - 115, pointer.y - 115, 230, 230);
    }
  }

  function frame(time) {
    if (running) draw(time);
    requestAnimationFrame(frame);
  }

  function updatePointer(clientX, clientY) {
    const rect = hero.getBoundingClientRect();
    pointer.x = clientX - rect.left;
    pointer.y = clientY - rect.top;
    pointer.active = pointer.x >= 0 && pointer.x <= rect.width && pointer.y >= 0 && pointer.y <= rect.height;
  }

  window.addEventListener('pointermove', event => updatePointer(event.clientX, event.clientY), { passive: true });
  window.addEventListener('touchmove', event => {
    const touch = event.touches[0];
    if (touch) updatePointer(touch.clientX, touch.clientY);
  }, { passive: true });
  hero.addEventListener('pointerleave', () => { pointer.active = false; });
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', () => { running = !document.hidden; });
  new IntersectionObserver(entries => { running = entries[0]?.isIntersecting ?? true; }, { threshold: .01 }).observe(hero);

  const copyLayer = document.querySelector('.hero-copy-layer');
  const agentLayer = document.querySelector('.agent-layer');
  if (window.matchMedia('(pointer:fine)').matches && !reduceMotion) {
    hero.addEventListener('pointermove', event => {
      const rect = hero.getBoundingClientRect();
      const x = event.clientX / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      copyLayer?.style.setProperty('transform', `translate3d(${x * -7}px,${y * -5}px,0)`);
      agentLayer?.style.setProperty('transform', `translate3d(${x * 11}px,${y * 8}px,0)`);
    });
    hero.addEventListener('pointerleave', () => {
      copyLayer?.style.removeProperty('transform');
      agentLayer?.style.removeProperty('transform');
    });
  }

  resize();
  draw();
  if (!reduceMotion) requestAnimationFrame(frame);
});
