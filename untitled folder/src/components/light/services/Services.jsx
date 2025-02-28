import React from 'react';
import { serviceData } from '../../../l-data/services';

function Services() {
  return (
    <section className="services-boxs section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              What We <span className="fw-200">Offer</span>
            </h2>
          </div>
        </div>
        <div className="row pt-30">
          {serviceData.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-3 items">
              <div className="item-box bg md-mb50">
                <div className="icon mb-40 opacity-10">
                  <img src={item.img} alt="img" />
                </div>
                <h5 className="mb-15 text-u">
                  {item.title}
                </h5>
                <p>{item.desc}</p>
                <a href={`${item.link}/${item.id}`} className="rmore mt-30">
                  <span className="sub-title">Read More</span>
                  <img
                    src="/light/assets/imgs/arrow-right.png"
                    alt="icon"
                    className="icon-img-20 ml-5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
