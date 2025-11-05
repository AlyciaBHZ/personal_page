import gsap from 'gsap';

export interface CurtainAnimationOptions {
  duration?: number;
  ease?: string;
  delay?: number;
  onComplete?: () => void;
}

export const curtainReveal = (options: CurtainAnimationOptions = {}) => {
  const { duration = 1.2, ease = 'power4.inOut', delay = 0.3, onComplete } = options;

  const tl = gsap.timeline({
    onComplete,
  });

  tl.to('.curtain-left', {
    xPercent: -100,
    duration,
    ease,
    delay,
  });

  tl.to(
    '.curtain-right',
    {
      xPercent: 100,
      duration,
      ease,
    },
    '<'
  );

  return tl;
};

export const fadeInUp = (
  element: string | HTMLElement,
  options: { delay?: number; duration?: number } = {}
) => {
  const { delay = 0, duration = 0.8 } = options;

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease: 'power3.out',
  });
};

export const staggerFadeIn = (
  elements: string | HTMLElement | NodeList,
  options: { stagger?: number; delay?: number } = {}
) => {
  const { stagger = 0.1, delay = 0 } = options;

  return gsap.from(elements, {
    opacity: 0,
    y: 20,
    duration: 0.6,
    stagger,
    delay,
    ease: 'power2.out',
  });
};

export const setupScrollAnimations = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

