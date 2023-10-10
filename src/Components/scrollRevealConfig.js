import ScrollReveal from 'scrollreveal';

const sr = ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 1500,
  delay: 400,
  origin: 'left',
});

// 각 요소에 reveal을 호출하여 애니메이션 효과를 설정합니다.
export const setScrollReveal = () => {
  sr.reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
  sr.reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom' });
  sr.reveal('.text-box', { delay: 700, origin: 'right' });
  sr.reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
  sr.reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top' });
  sr.reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });
  sr.reveal('.banner-content h1', { delay: 500, origin: 'top' });
  sr.reveal('.banner-content p', { delay: 500, origin: 'bottom' });
  sr.reveal('.icon-box img, .section-two .col', { delay: 600, origin: 'bottom', interval: 200 });
  sr.reveal('.section-two .row-ptr', { delay: 600, origin: 'bottom', interval: 200 });
  sr.reveal('.top-container', { delay: 700, origin: 'bottom' });
};