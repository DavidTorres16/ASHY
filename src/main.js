import themeIcon from '@phosphor-icons/core/assets/regular/circle-half.svg?raw';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { disciplines } from './works/works.js';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const workImages = import.meta.glob('./works/images/*/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

setupTheme();
setupYear();
renderWorks();
renderFeatured();
setupDisciplineNav();
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

function worksOf(discipline) {
  return discipline.works
    .map((work) => ({ ...work, discipline, src: workImages[`./works/images/${discipline.id}/${work.image}`] }))
    .filter((work) => {
      if (!work.src) console.warn(`[works] No existe images/${discipline.id}/${work.image} (${work.title}).`);
      return work.src;
    });
}

// Each discipline keeps its skeletons until works.js lists at least one work for it.
function renderWorks() {
  for (const discipline of disciplines) {
    const section = document.getElementById(discipline.id);
    section.querySelector('.discipline__title').textContent = discipline.name;
    section.querySelector('.discipline__desc').textContent = discipline.description;

    const works = worksOf(discipline);
    if (!works.length) continue;

    section.querySelector('[data-count]').textContent =
      works.length === 1 ? '1 proyecto' : `${works.length} proyectos`;

    const grid = section.querySelector('[data-works]');
    grid.innerHTML = works.map(workTemplate).join('');
    grid.removeAttribute('aria-busy');

    const deckMedia = document.querySelector(`[data-deck="${discipline.id}"] .deck__media`);
    deckMedia.classList.remove('deck__media--mark');
    deckMedia.innerHTML = `<img src="${works[0].src}" alt="" loading="eager" decoding="async" />`;
  }
}

// Up to three works flagged `featured: true`, from any discipline; empty slots stay as skeletons.
function renderFeatured() {
  const featured = disciplines.flatMap(worksOf).filter((work) => work.featured).slice(0, 3);
  if (!featured.length) return;

  const row = document.querySelector('[data-featured]');
  const items = row.querySelectorAll('.featured__item');
  featured.forEach((work, index) => {
    const href = work.link ?? `#${work.discipline.id}`;
    const external = work.link ? ' target="_blank" rel="noopener"' : '';
    items[index].innerHTML = `
      <a class="card featured__card" href="${escapeHtml(href)}"${external}>
        <img src="${work.src}" alt="${escapeHtml(work.alt ?? '')}" loading="lazy" decoding="async" />
      </a>
      <figcaption class="pill pill--text">${escapeHtml(work.title)}</figcaption>`;
  });
  if (featured.length === items.length) row.removeAttribute('aria-busy');
}

function workTemplate(work) {
  const meta = [work.year, work.client].filter(Boolean).map(escapeHtml).join(' · ');
  const body = `
    <div class="card work__media">
      <img src="${work.src}" alt="${escapeHtml(work.alt ?? '')}" loading="lazy" decoding="async" />
    </div>
    <figcaption class="work__caption">
      <span class="work__title">${escapeHtml(work.title)}</span>
      ${meta ? `<span class="work__meta">${meta}</span>` : ''}
    </figcaption>`;
  const content = work.link
    ? `<a class="work__link" href="${escapeHtml(work.link)}" target="_blank" rel="noopener">${body}</a>`
    : body;
  return `<figure class="work">${content}</figure>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);
}

// Highlights the discipline currently in the reading zone of the viewport.
function setupDisciplineNav() {
  const links = new Map(
    [...document.querySelectorAll('.discipline-nav__link')].map((link) => [link.hash.slice(1), link]),
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach((link, id) => {
          if (id === entry.target.id) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  );
  document.querySelectorAll('.discipline').forEach((section) => observer.observe(section));
}
