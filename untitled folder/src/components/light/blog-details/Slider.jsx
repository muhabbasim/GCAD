
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
function Slider() {
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
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="/">
                  <span>Design , </span>
                </a>
                <a href="/">
                  <span>Development</span>
                </a>
              </div>
              <h1 className="fz-55 mt-30">
                Network of wormholes colonies extraordinary claims require.
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="/" className="circle-60">
                        <img
                          src="/light/assets/imgs/blog/author.png"
                          alt="img"
                          className="circle-img"
                        />
                      </a>
                      <a href="/" className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">UiCamp</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="/">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">August 6, 2021</h6>
                    </a>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10"></span>
                  <span className="opacity-7">02 Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        data-background="/light/assets/imgs/blog/b1.jpg"
      ></div>
    </div>
  );
}

export default Slider;
