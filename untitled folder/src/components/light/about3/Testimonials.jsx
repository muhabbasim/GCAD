
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../l-data/testimonials.json';

function Testimonials() {
  const swperOptions = {
    modules: [Navigation],
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
      prevEl: '.swiper-arrow-control .swiper-button-prev',
    },
  };
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-15">Testimonials</h6>
              <h3 className="fw-600">
                What People <span className="fw-200">Say?</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-8 position-re">
            <div className="testim-swiper">
              <Swiper
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
                {...swperOptions}
              >
                {data.slice(0, 2).map((item, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256.721"
                            height="208.227"
                            viewBox="0 0 256.721 208.227"
                            className="qout-svg"
                          >
                            <path
                              data-name="Path"
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1"
                              opacity="0.322"
                            ></path>
                          </svg>
                          <p className="fz-30">{item.desc}</p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src={item.img} alt="img" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>{item.name}</h5>
                            <span className="sub-title main-color">
                              {item.subName}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="swiper-arrow-control control-abslout">
              <div className="swiper-button-prev">
                <span className="ti-arrow-left"></span>
              </div>
              <div className="swiper-button-next">
                <span className="ti-arrow-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="small-line">
        <div className="line-overlay">
          <svg
            viewBox="0 0 1728 1101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
              style={{ strokeDasharray: 3246.53 }}
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
