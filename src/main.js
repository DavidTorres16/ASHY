import themeIcon from '@phosphor-icons/core/assets/regular/circle-half.svg?raw';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;

setupTheme();
setupYear();
const contactWord = setupContactWord();
setupMotion(contactWord);
window.__ashyMotionReady = true;

function setupTheme() {
  const button = document.querySelector('.float-btn--theme');
  button.querySelector('[data-icon="theme"]').innerHTML = themeIcon;

  const sync = () => button.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  sync();

  button.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('ashy-theme', root.dataset.theme);
    } catch {}
    sync();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    let stored = null;
    try {
      stored = localStorage.getItem('ashy-theme');
    } catch {}
    if (stored) return;
    root.dataset.theme = event.matches ? 'dark' : 'light';
    sync();
  });
}

function setupYear() {
  document.querySelector('[data-year]').textContent = String(new Date().getFullYear());
}

// Splits the giant CONTACTO into letters and scales it so it always spans the full width.
function setupContactWord() {
  const heading = document.querySelector('.contact__word');
  const word = heading.querySelector('span');
  word.innerHTML = [...word.textContent]
    .map((char) => `<span class="char">${char}</span>`)
    .join('');

  const fit = () => {
    const styles = getComputedStyle(heading);
    const available = heading.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight);
    heading.style.fontSize = '100px';
    heading.style.fontSize = `${(100 * available) / word.getBoundingClientRect().width}px`;
  };

  document.fonts.ready.then(fit);
  new ResizeObserver(fit).observe(heading.parentElement);
  return word;
}

function setupMotion(contactWord) {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    // Hero: the name lands, then the project cards are dealt from a single stack.
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .to('.hero__handle', { opacity: 1, duration: 0.5 })
      .fromTo('.hero__name', { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 0.9 }, '<0.1')
      .fromTo(
        '.deck__card',
        { opacity: 0, '--drop': '48px' },
        { opacity: 1, '--drop': '0px', duration: 0.6, stagger: 0.06 },
        '-=0.45',
      )
      .fromTo('.deck', { '--fan': 0 }, { '--fan': 1, duration: 1.1, ease: 'expo.out' }, '<0.15')
      .fromTo(
        '.hero__role, .hero__cta',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        '-=0.8',
      );

    // Sections enter in reading order as they reach the viewport.
    ScrollTrigger.batch('[data-reveal]', {
      start: 'top 88%',
      once: true,
      onEnter: (elements) =>
        gsap.fromTo(
          elements,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', overwrite: true },
        ),
    });

    // Featured cards arrive more tilted and settle onto the table as the row scrolls in.
    gsap.fromTo(
      '.featured__row',
      { '--tilt': 2.4 },
      {
        '--tilt': 1,
        ease: 'none',
        scrollTrigger: { trigger: '.featured__row', start: 'top bottom', end: 'center center', scrub: true },
      },
    );

    // Closing word rises letter by letter once, as the last beat of the page.
    gsap.from(contactWord.querySelectorAll('.char'), {
      yPercent: 110,
      duration: 0.9,
      stagger: 0.04,
      ease: 'power4.out',
      scrollTrigger: { trigger: '.contact', start: 'top 75%', once: true },
    });
  });
}
