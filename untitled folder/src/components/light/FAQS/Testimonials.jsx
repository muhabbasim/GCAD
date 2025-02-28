
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../l-data/testimonials.json';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-arrow-control .swiper-button-next',
    },
    spaceBetween: 30,
    loop: true,
  };
  return (
    <section
      className="testimonials-crev section-padding pb-0 bg-img"
      data-background="/light/assets/imgs/background/2.jpg"
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-10">
            <div className="sec-head mb-80">
              <h2 className="fw-600 fz-70">
                What <br /> People <span className="fw-200">Say?</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-11 position-re">
            <div className="testim-swiper testim1">
              <Swiper
                id="content-carousel-container-unq-testim"
                className="swiper-container"
                data-swiper="container"
                {...swiperOptions}
              >
                {data.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="item d-flex align-items-center">
                      <div>
                        <div className="fit-img circle">
                          <img src={item.img} alt="img" />
                        </div>
                      </div>
                      <div className="content ml-100">
                        <div className="text">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="256.721"
                            height="208.227"
                            viewBox="0 0 256.721 208.227"
                            id="null"
                            className="qout-svg"
                          >
                            <path
                              id="Path_76570"
                              data-name="Path 76570"
                              d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                              transform="translate(121.55 640.568)"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="1"
                              opacity="0.322"
                            ></path>
                          </svg>
                          <h4>{item.desc}</h4>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <h5>{item.name}</h5>
                            <span className="sub-title main-color">
                              {item.subName}
                            </span>
                          </div>
                          <div className="ml-auto">
                            <div className="rate-stars fz-14">
                              <span className="rate main-color">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </span>
                            </div>
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
    </section>
  );
}

export default Testimonials;
