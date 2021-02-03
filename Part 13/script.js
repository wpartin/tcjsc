'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const allSections = document.querySelectorAll('.section');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('.nav');

const header = document.querySelector('.header');

const imgTargets = document.querySelectorAll('img[data-src]');

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const slidesLength = slides.length - 1;

const dotContainer = document.querySelector('.dots');

//////////////////////////    Slider Component    /////////////////////////////
const sliderModule = function () {
  let currentSlide = 0;

  // set the translateX style on each slide section
  slides.forEach(
    (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`)
  );

  // Let's build the dots into the HTML
  const createDots = function () {
    slides.forEach(function (_, index) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${index}"></button>`
      );
    });
  };

  // Let's activate the dot
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  // Functions to handle slide movements
  const moveSlides = function (slide) {
    slides.forEach((sl, index) => {
      sl.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
  };

  const nextSlide = function () {
    currentSlide === slidesLength ? (currentSlide = 0) : currentSlide++;
    moveSlides(currentSlide);
    activateDot(currentSlide);
  };

  const previousSlide = function () {
    currentSlide === 0 ? (currentSlide = slidesLength) : currentSlide--;
    moveSlides(currentSlide);
    activateDot(currentSlide);
  };
  // End of slide functions

  ////////////////////// Initialization for Slider //////////////////////////
  const sliderInit = function () {
    createDots();
    activateDot(0);
    moveSlides(0);
  };
  sliderInit();

  // Code for the right button
  btnRight.addEventListener('click', nextSlide);
  // Code for the left button
  btnLeft.addEventListener('click', previousSlide);
  // Code for arrow buttons
  document.addEventListener('keydown', function (event) {
    event.key === 'ArrowLeft' && previousSlide();
    event.key === 'ArrowRight' && nextSlide();
  });
  // Code for clicking directly on the dots
  dotContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('dots__dot')) {
      const { slide } = event.target.dataset;
      moveSlides(slide);
      activateDot(slide);
    }
  });
};
sliderModule();

//////////////////////////    Lazy Image Loading    /////////////////////////////

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src w/ data-src

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

//////////////////////////    Section Scroll In    /////////////////////////////

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  // section.classList.add('section--hidden');
  // console.log(section);
  sectionObserver.observe(section);
});

//////////////////////////    Sticky Navigation Bar    /////////////////////////////

// const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function (event) {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// Sticky Navigation: Intersection Observer API

// const observerCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const observerOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////////////////////    Menu Fade Animation    /////////////////////////////

const handleHover = function (event, opacity) {
  if (event.target.classList.contains('nav__link')) {
    const link = event.target;
    const siblings = link.closest('.nav__links').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', event => handleHover(event, 0.5));
// nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', event => handleHover(event, 1.0));
// nav.addEventListener('mouseover', handleHover.bind(1));

//////////////////////////    Modal Code    /////////////////////////////

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////    Tabbed Components    /////////////////////////////

tabsContainer.addEventListener('click', function (event) {
  const clicked = event.target.closest('.operations__tab');
  // console.log(clicked);

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////    Button Components    /////////////////////////////

btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  //   // console.log(s1coords);

  //   // console.log(e.target.getBoundingClientRect());

  //   // console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  //   // console.log(
  //   //   `height/width of viewport`,
  //   //   document.documentElement.clientHeight,
  //   //   document.documentElement.clientWidth
  //   );

  //   // Scrolling using the document size not window size
  //   // window.scrollTo(
  //   //   s1coords.left + window.pageXOffset,
  //   //   s1coords.top + window.pageYOffset
  //   // );

  //   // Adding in the smooth animation
  //   // window.scrollTo({
  //   //   left: s1coords.left + window.pageXOffset,
  //   //   top: s1coords.top + window.pageYOffset,
  //   //   behavior: 'smooth',
  //   // });

  //   // We don't even need the positioning with modern methods
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed & DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// DOM Traversal

// const h1 = document.querySelector('h1');

// // Going downwards: children
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings ---- only previous & next ones
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

///////////////////////////////////////////////////////////////////

// Page Navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event Delegation

// 1. Add eventlistener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// Creating & inserting elements
// .insertAdjacentHTML -> great way to do this
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality & analytics.';
message.innerHTML =
  'We use cookies for improved functionality & analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

/////////////////////////////////////////////////////////////////////////////

// Delete Elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
// message.parentElement.removeChild(message); --> DOM traversing (old way)

//////////////////////////////////////////////////////////////////////////////

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '105%';

// console.log(message.style.color, message.style.backgroundColor);
// console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

///////////////////////////////////////////////////////////////////////////////

// Attributes

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt, logo.src); // There are only some standard attributes

// Non-standard
// console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src')); // relative

const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// Data attributes
// console.log(logo.dataset.versionNumber);

///////////////////////////////////////////////////////////////////////////////////

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes, same concept

// Don't use .className = ''; it overwrites everything

// const h1 = document.querySelector('h1');

// const alertH1 = e => {
//   alert(`AddEventListener: Great! You are reading the heading :D`);
//   // h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// This one is more old school, can't use multiple events etc  Will override any prior onmouseenter
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// rgb(255,255,255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// addEventListener only works in the bubbling phase, not the capture phase
// must use a 3rd parameter for this to work

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // e.stopPropagation(); // prevents the bubbling up
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   false
// );
