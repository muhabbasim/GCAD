
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Brands() {
  const swiperOptions = {
    speed: 600,
    loop: true,

    breakpoints: {
      // when window width is >= 640px
      640: {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      // when window width is >= 768px
      600: {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      // when window width is >= 1200px
      1200: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 40,
        centeredSlides: false,
      },
    },
  };
  return (
    <div className="clients-carso2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="swiper5">
              <Swiper
                id="content-carousel-container-unq-clients"
                className="swiper-container"
                data-swiper="container"
                {...swiperOptions}
              >
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="/">
                        <img src="/light/assets/imgs/brands/01.png" alt="img" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="/">
                        <img src="/light/assets/imgs/brands/02.png" alt="img" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="/">
                        <img src="/light/assets/imgs/brands/03.png" alt="img" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="/">
                        <img src="/light/assets/imgs/brands/04.png" alt="img" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="/">
                        <img src="/light/assets/imgs/brands/05.png" alt="img" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="item">
                    <div className="img icon-img-100">
                      <a href="/">
                        <img src="/light/assets/imgs/brands/05.png" alt="img" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
