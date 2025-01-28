
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header ', { y: 100 }, { y: 0 }, '0.1');
    tl.fromTo(
      '.generals .container',
      { opacity: 0, translateY: 0 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    // Cleanup function
    return () => tl.kill();
  }, []);
  
  return (
    <div
      className="header main-header bg-img"
      data-background="/light/assets/imgs/header/bg1.jpg"
      data-overlay-dark="8"
    >
      <div className='generals'>
        <div className="container pt-100">
          <div className="row justify-content-end">
            <div className="col-lg-6">
              <div className="text mb-100">
                <h4 style={{ fontWeight: 200 }}>
                  A tech startup delivering leading products through an exclusive business lap
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ontop">
          <div className="container">
            <div className="lg-text">
              <div className="d-flex">
                <h6>BUILIDNG DIGITAL BRANDS</h6>
                {/* <h6 className="ml-auto">GCAD</h6> */}
              </div>
              <h1>GCAD LAP FACTORY </h1>
            </div>
          </div>
          <div className="img">
            {/* <img src="/light/assets/imgs/header/2.jpg" alt="img" /> */}
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="img" 
              style={{ maxHeight: 500 }}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Header;
