// Replay a published cover's drawing: once when it first scrolls into view, then on hover or keyboard focus.
const still = matchMedia('(prefers-reduced-motion: reduce)');
const covers = [...document.querySelectorAll('a.cover')];

// The EDiV token is moved by SMIL; at rest (transform in the markup) it sits at the end of its path.
const walk = document.getElementById('walk');
const token = walk && walk.parentElement;

function play(cover) {
  if (still.matches) return;
  cover.classList.remove('play');
  void cover.offsetWidth; // restart CSS animations
  cover.classList.add('play', 'played');
  if (walk && cover.contains(walk)) { token.removeAttribute('transform'); walk.beginElement(); }
}

covers.forEach(c => {
  c.addEventListener('mouseenter', () => play(c));
  c.addEventListener('focus', () => play(c));
});

const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (!e.isIntersecting) return;
  io.unobserve(e.target);
  setTimeout(() => play(e.target), covers.indexOf(e.target) * 220);
}), { threshold: 0.6 });
covers.forEach(c => io.observe(c));
