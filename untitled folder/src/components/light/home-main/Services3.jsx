import React from 'react';
import { serviceData } from '../../../l-data/services';

function Services3() {
  return (
    <section className="services-crev section-padding" data-scroll-index="1">
      <div className="container">
        <div className="sec-head mb-80">
          <h6 className="sub-title main-color mb-25">Our Specialize</h6>
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600 text-u ls1">
              Our <span className="fw-200"> Products</span>
            </h2>
            <div className="ml-auto">
              <a href="/services" className="go-more">
                <span className="text">View all Services</span>
                <span className="icon ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((item, i) => (
            <div key={i} className="col-lg-6 mb-40">
              <div className="service-item">
                <video
                  width="100%"
                  preload="metadata"
                  poster={item.images[1]}
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src={item.vid} type="video/webm" />
                  <track
                    src="subtitles.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                    default
                  />
                </video>
                <div className="d-flex service-dsec align-items-center">
                  <div>
                    <div className="icon">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <div style={{ display: 'flex', justifyContent: 'center' }} className="text mt-10">
                      <p className="item-box-desc mb-20">{item.desc}</p>
                    </div>
                    <a href={`${item.link}/${item?.id}`}>
                      <span>Explore</span>
                      <span className="icon ti-arrow-top-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* {serviceData.map((item, i) => (
            <div key={i} className="col-lg-6">
              <div className="item-box mb-30">
                <div className="d-flex align-items-end">
                  <div>
                    <span className="num fz-20">0{i + 1}.</span>
                    <div className="icon mr-80">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <div className="text mt-30">
                      <p className="item-box-desc mb-60">{item.desc}</p>
                    </div>
                    <a href={`${item.link}/${item?.id}`}>
                      <span>Explore</span>
                      <span className="icon ti-arrow-top-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}

export default Services3;
