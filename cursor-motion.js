document.addEventListener('DOMContentLoaded', () => {
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!finePointer || reduceMotion) return;

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'copywrk-cursor-dot';
  ring.className = 'copywrk-cursor-ring';
  dot.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7.2 4.8C5.2 3.8 3.8 5.5 4.5 8.1l9.1 32.5c.8 3 4.2 3.4 5.8.8l6.6-10.8c.8-1.3 1.8-1.9 3.3-2l12.5-1c3.1-.2 4-3.7 1.3-5.3L9.5 5.1c-.8-.4-1.6-.5-2.3-.3Z"/></svg>`;
  document.body.append(dot, ring);
  document.body.classList.add('has-copywrk-cursor');

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let ringX = targetX;
  let ringY = targetY;
  let visible = false;

  const render = () => {
    ringX += (targetX - ringX) * 0.16;
    ringY += (targetY - ringY) * 0.16;
    dot.style.transform = `translate3d(${targetX}px,${targetY}px,0)`;
    ring.style.transform = `translate3d(${ringX}px,${ringY}px,0) translate(-50%,-50%)`;
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  window.addEventListener('pointermove', event => {
    targetX = event.clientX;
    targetY = event.clientY;
    if (!visible) {
      visible = true;
      dot.classList.add('is-visible');
      ring.classList.add('is-visible');
    }
  }, { passive: true });

  document.addEventListener('pointerover', event => {
    const target = event.target.closest('a,button,.glass-panel,.feature-card,.step-card,.fit-pill,.principle,.hero-visual');
    const formControl = event.target.closest('input,textarea,select');
    ring.classList.toggle('is-hovering', Boolean(target) && !formControl);
    dot.classList.toggle('is-hovering', Boolean(target) && !formControl);
    ring.classList.toggle('is-hidden', Boolean(formControl));
    dot.classList.toggle('is-hidden', Boolean(formControl));
  });

  document.addEventListener('pointerdown', event => {
    dot.classList.add('is-pressed');
    ring.classList.add('is-pressed');
    const ripple = document.createElement('span');
    ripple.className = 'copywrk-cursor-ripple';
    ripple.style.left = `${event.clientX}px`;
    ripple.style.top = `${event.clientY}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
  });
  document.addEventListener('pointerup', () => {
    dot.classList.remove('is-pressed');
    ring.classList.remove('is-pressed');
  });
  document.documentElement.addEventListener('mouseleave', () => {
    visible = false;
    dot.classList.remove('is-visible');
    ring.classList.remove('is-visible');
  });
});
