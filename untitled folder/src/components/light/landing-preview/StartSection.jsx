
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

function StartSection() {
  return (
    <>
      <Helmet>
        <script src="/dark/assets/js/hscroll.js"></script>
      </Helmet>
      <section className="works showcases thecontainer  ontop sub-bg">
        <div className="text">
          <h2 className="text-bg">Showcases</h2>
        </div>
        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/1.jpg" alt="img" />
            </div>
            <div className="text-center">
              <h5>Fullscreen slider</h5>
            </div>
            <a
              href="/light/showcase-fullscreen"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/2.jpg" alt="img" />
            </div>
            <div className="text-center">
              <h5>Carousel Showcase</h5>
            </div>
            <a
              href="/light/showcase-carousel"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/3.jpg" alt="img" />
            </div>
            <div className="text-center">
              <h5>Creative slider</h5>
            </div>
            <a
              href="/light/showcase-half-slider"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/4.jpg" alt="img" />
            </div>
            <div className="text-center">
              <h5>Interactive Fullscreen</h5>
            </div>
            <a
              href="/light/showcase-interactive-full"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/5.jpg" alt="img" />
            </div>
            <div className="text-center">
              <h5>Interactive Center</h5>
            </div>
            <a
              href="/light/showcase-interactive-center"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>

        <div className="panel">
          <div className="item">
            <div className="img">
              <img src="/landing-preview/img/showcase/6.jpg" alt="img" />
            </div>
            <div className="text-center">
              <h5>Interactive Vertical</h5>
            </div>
            <a
              href="/light/showcase-interactive-vertical"
              className="plink"
              target="_blank"
            ></a>
          </div>
        </div>
      </section>
    </>
  );
}

export default StartSection;
