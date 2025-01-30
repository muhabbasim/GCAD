import React from 'react';
import data from '../../../l-data/team.json';
function Team() {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Team</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 d-rotate wow">
              <span className="rotate-text">
                Meet our <span className="fw-200">legends</span>
              </span>
            </h2>
            <div className="ml-auto">
              <a href="/light/page-team" className="go-more">
                <span className="text">Join to us</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="item-container">
          {data.map((item, i) => (
            <div key={i} className="flex">
              <div className="item md-mb50">
                <div className="img">
                  <img src={item.img} alt="img" />
                  <div className="info">
                    <span className="fz-12">{item.subName}</span>
                    <h6 className="fz-18">{item.name}</h6>
                  </div>
                </div>
                <div className="social">
                  <div className="links">
                    <a href="/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    {/* <a href="/">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
