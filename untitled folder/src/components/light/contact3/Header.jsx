
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function Header() {
  function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll('[data-background]');

    if (backgroudImages.length > 0) {
      backgroudImages.forEach((element) => {
        let image = element.dataset.background;
        element.style.backgroundImage = `url('${image}')`;
      });
    }
  }
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  return (
    <div
      className="header page-header-cerv bg-img section-padding"
      data-background="/light/assets/imgs/header/2.jpg"
      data-overlay-dark="4"
    >
      <div className="container pt-100">
        <div className="text-center">
          <h1 className="fz-100">Contact Us.</h1>
          <div className="mt-15">
            <a href="/light/home-main">Home</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">Contact</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
