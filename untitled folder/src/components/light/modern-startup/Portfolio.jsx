import React from 'react';

function Portfolio() {
  return (
    <section
      className="portfolio-tab crev section-padding"
      data-scroll-index="3"
    >
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Portfolio</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              Featured <span className="fw-200">projects</span>
            </h2>
            <div className="ml-auto">
              <a href="/light/outline" className="go-more">
                <span className="text">View all Works</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div className="glry-img">
              <div
                id="tab-1"
                className="bg-img tab-img current"
                data-background="/light/assets/imgs/works/1/1.jpg"
              ></div>
              <div
                id="tab-2"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/2.jpg"
              ></div>
              <div
                id="tab-3"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/3.jpg"
              ></div>
              <div
                id="tab-4"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/4.jpg"
              ></div>
              <div
                id="tab-5"
                className="bg-img tab-img"
                data-background="/light/assets/imgs/works/1/5.jpg"
              ></div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 content">
            <div className="cluom mb-30 current" data-tab="tab-1">
              <div className="info">
                <h6 className="sub-title opacity-7">UI-UX Design</h6>
                <h4>Iridescent Wallpapers</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/1.jpg" alt="img" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project6">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-2">
              <div className="info">
                <h6 className="sub-title opacity-7">UI-UX Design</h6>
                <h4>Proof Template</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/2.jpg" alt="img" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project5">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-3">
              <div className="info">
                <h6 className="sub-title opacity-7">UI-UX Design</h6>
                <h4>Ledge Phone</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/3.jpg" alt="img" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project4">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom mb-30" data-tab="tab-4">
              <div className="info">
                <h6 className="sub-title opacity-7">UI-UX Design</h6>
                <h4>Frame Sans</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/4.jpg" alt="img" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project3">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
            <div className="cluom" data-tab="tab-5">
              <div className="info">
                <h6 className="sub-title opacity-7">UI-UX Design</h6>
                <h4>Modern Minimalist</h4>
              </div>
              <div className="img">
                <img src="/light/assets/imgs/works/1/5.jpg" alt="img" />
              </div>
              <div className="more text-u ls1 fz-12">
                <a href="/light/project2">
                  View Project <i className="ml-15 ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
