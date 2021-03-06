//navigation

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const links = [...document.querySelectorAll('.nav__link')];

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav--active');
};

const closeMenu = () => {
  hamburger.classList.remove('hamburger--active');
  nav.classList.remove('nav--active');
};

links.forEach((link) => link.addEventListener('click', closeMenu));
hamburger.addEventListener('click', handleClick);

//smoth scroll
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 52;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

// gsap

const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

tl.fromTo(
  '.overlay__logo',
  { opacity: 0, scale: 0.6 },
  { duration: 1, scale: 1, opacity: 1 },
  '+=.5'
);

tl.to('.overlay', { y: '-100%', duration: 1, delay: 0.5 });
tl.fromTo(
  '.header',
  { y: '-100%', opacity: 0 },
  { y: '0', opacity: 1 },
  '-=.3'
);

tl.fromTo('.hero__title', { y: '-10%', opacity: 0 }, { y: '0%', opacity: 1 });
tl.fromTo(
  '.hero__subtitle',
  { y: '-10%', opacity: 0 },
  { y: '0%', opacity: 1 }
);

tl.fromTo('.hero__cta', { y: '-10%', opacity: 0 }, { y: '0%', opacity: 1 });

gsap.registerPlugin(ScrollTrigger);

const paragraph = document.querySelectorAll('.about__desc');
const photo = document.querySelectorAll('.about__photo');
const contentBox = document.querySelectorAll('.about__content');

gsap.fromTo(
  [...contentBox, paragraph],
  {
    x: -15,
    opacity: 0,
    ease: 'easeInOut',
  },
  {
    x: 0,
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: paragraph,
      start: 'center 70%',
    },
  }
);

gsap.fromTo(
  photo,
  {
    y: -25,
    opacity: 0,
    duration: 2,
    ease: Power1.easeOut,
  },
  {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: photo,
      start: 'center 80%',
    },
  }
);
