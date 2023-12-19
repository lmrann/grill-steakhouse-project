'use strict';

const slides = document.querySelectorAll('.platter');
const btnLeft = document.querySelector('.platter-btn--left');
const btnRight = document.querySelector('.platter-btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);

btnLeft.addEventListener('click', prevSlide);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const slides2 = document.querySelectorAll('.guest-testimonial-box');
const btnLeft2 = document.querySelector('.guest-btn--left');
const btnRight2 = document.querySelector('.guest-btn--right');
const dotContainer = document.querySelector('.dots');

let curSlide2 = 0;
const maxSlide2 = slides2.length;

const createDots = function () {
  slides2.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dot" data-slide="${i}">&nbsp;</button>`
    );
  });
};

createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll('.dot')
    .forEach(dot => dot.classList.remove('dot--fill'));

  document
    .querySelector(`.dot[data-slide="${slide}"]`)
    .classList.add('dot--fill');
};

activateDot(0);

const goToSlide2 = function (slide2) {
  slides2.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide2)}%)`)
  );
};

goToSlide2(0);

const nextSlide2 = function () {
  if (curSlide2 === maxSlide2 - 1) {
    curSlide2 = 0;
  } else {
    curSlide2++;
  }

  goToSlide2(curSlide2);
  activateDot(curSlide2);
};

const prevSlide2 = function () {
  if (curSlide2 === 0) {
    curSlide2 = maxSlide2 - 1;
  } else {
    curSlide2--;
  }

  goToSlide2(curSlide2);
  activateDot(curSlide2);
};

btnRight2.addEventListener('click', nextSlide2);

btnLeft2.addEventListener('click', prevSlide2);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') prevSlide2();
  e.key === 'ArrowRight' && nextSlide2();
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dot')) {
    const { slide } = e.target.dataset;
    goToSlide2(slide);
    activateDot(slide);
  }
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector('.header');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.querySelector('.nav').classList.add('sticky');
      document.querySelector('.nav').classList.add('intersecting');
    }

    if (ent.isIntersecting === true) {
      document.querySelector('.nav').classList.remove('sticky');
      document.querySelector('.nav').classList.remove('intersecting');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);

obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    if (href !== href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const navLinks = document.querySelectorAll('.main-nav-link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    if (headerEl.classList.contains('nav-open')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function newTab() {
  window.open('https://m.me/lmrannn/', '_blank');
}

function makeCall() {
  window.location = 'tel:01531714432';
}

function makeMail() {
  window.location = 'mailto:lmrannhhossainn@gmail.com';
}

function newTab2() {
  window.open('https://www.facebook.com/', '_blank');
}

function newTab3() {
  window.open('https://www.instagram.com/', '_blank');
}

function newTab4() {
  window.open('https://www.facebook.com/lmrannn', '_blank');
}
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const testimonialBox = document.querySelector('.test-box');
const root = document.querySelector(':root');

const setTestimonialHeight = function () {
  root.style.setProperty(
    '--testimonial-height',
    `${testimonialBox.clientHeight}px`
  );
};

window.addEventListener('resize', setTestimonialHeight);
window.addEventListener('DOMContentLoaded', setTestimonialHeight);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

const platterBox = document.querySelector('.platter-1');

const setPlatterHeight = function () {
  root.style.setProperty('--platter-height', `${platterBox.clientHeight}px`);
};

window.addEventListener('resize', setPlatterHeight);
window.addEventListener('DOMContentLoaded', setPlatterHeight);

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
