const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

const handleClick = () => {
  hamburger.classList.toggle('hamburger--active');
  nav.classList.toggle('nav--active');
};

hamburger.addEventListener('click', handleClick);

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
    },
  }
);

gsap.fromTo(
  paragraph,
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
    },
  }
);
