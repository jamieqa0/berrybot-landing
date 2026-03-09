// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (!entry.isIntersecting) return;
    // Stagger sibling cards
    const siblings = entry.target.parentElement.querySelectorAll('[data-reveal]');
    const idx = [...siblings].indexOf(entry.target);
    setTimeout(() => entry.target.classList.add('revealed'), idx * 100);
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== FLOATING CTA =====
const floatingCta = document.getElementById('floatingCta');
const heroSection  = document.getElementById('hero');
new IntersectionObserver(([entry]) => {
  floatingCta.classList.toggle('visible', !entry.isIntersecting);
}, { threshold: 0 }).observe(heroSection);
