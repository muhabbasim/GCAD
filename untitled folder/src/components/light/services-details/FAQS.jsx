import React from 'react';

function FAQS() {
  return (
    <section className="faqs section-padding pt-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 valign">
            <div className="faq-img md-mb50">
              <img src="/light/assets/imgs/intro/03.jpg" alt="img" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">FAQS</h6>
                <h3>Frequently asked questions</h3>
              </div>
              <div className="list-serv">
                <div className="accordion bord">
                  <div
                    className="item active mb-15 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div className="title">
                      <h6>Designing Content With AI Power</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole.
                      </p>
                    </div>
                  </div>

                  <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                    <div className="title">
                      <h6>Talented, Professional & Expert Team</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div className="title">
                      <h6>We Build and Activate Brands</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Taken possession of my entire soul, like these sweet
                        mornings of spring which i enjoy with my whole.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQS;
