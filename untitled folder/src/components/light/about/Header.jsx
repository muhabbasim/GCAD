
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
function Header() {
 
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header ', { y: 100 }, { y: 0 }, '0.1');
    tl.fromTo(
      ' .container',
      { opacity: 0, translateY: 0 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);

  return (
    <div
      className="header page-header bg-img section-padding"
      data-background="/light/assets/imgs/header/bg1.jpg"
      data-overlay-dark="9"
    >
      <div className="container pt-100 pb-100">
        <div className="text-center">
          <h1 className="fz-100 text-u">About Us.</h1>
          <div className="mt-15">
            <a href="/">Home</a>
            <span className="padding-rl-20">|</span>
            <span className="main-color">About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
