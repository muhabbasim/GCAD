import React from 'react';
import data from '../../../l-data/team.json';

function Team() {
  return (
    <section className="team section-padding pb-60">
      <div className="container">
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item mb-80">
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
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {data.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item mb-80">
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
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-behance"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-instagram"></i>
                    </a>
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
