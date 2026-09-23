document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll([
    '.hero > *', '.about-hero > *', '.section-intro', '.feature-card',
    '.step-card', '.fit-pill', '.manifesto', '.principle', '.founder-card',
    '.founder-copy', '.cta-box'
  ].join(','));

  if (reduceMotion) {
    revealTargets.forEach(element => element.classList.add('motion-visible'));
    return;
  }

  revealTargets.forEach((element, index) => {
    element.classList.add('motion-reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 80}ms`);
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('motion-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

  revealTargets.forEach(element => observer.observe(element));

  const nav = document.querySelector('.site-nav');
  const updateNav = () => nav?.classList.toggle('is-scrolled', window.scrollY > 24);
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  const reactiveCards = document.querySelectorAll('.hero-visual, .feature-card, .step-card, .manifesto, .founder-card, .founder-copy');
  reactiveCards.forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
      card.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
    });
  });

  const heroVisual = document.querySelector('.hero-visual');
  heroVisual?.addEventListener('pointermove', event => {
    if (event.pointerType === 'touch') return;
    const rect = heroVisual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    heroVisual.style.transform = `perspective(1000px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg) translateY(-3px)`;
  });
  heroVisual?.addEventListener('pointerleave', () => { heroVisual.style.transform = ''; });
});
