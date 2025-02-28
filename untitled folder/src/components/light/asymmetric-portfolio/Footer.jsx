import React from 'react';

function Footer() {
  return (
    <footer className="min-footer2">
      <div className="footer-container">
        <div className="container pt-60 pb-25 ontop">
          <div className="text-center mb-30">
            <h6 className="sub-title mb-15">Get In Touch</h6>
            <h2 className="fz-100 text-u ls1">
              <a href="/light/page-contact2">Let&apos;s Talk</a>
            </h2>
          </div>
          <div className="row mt-40 pt-25 bord-thin-top">
            <div className="col-lg-4 col-md-6 md-mb15">
              <div className="logo icon-img-100">
                <img src="/light/assets/imgs/logo-light.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-4 order-md-3">
              <div className="text-center">
                <p className="fz-14">
                  © 2024 InFolio is Proudly Powered by{' '}
                  <span className="underline main-color">
                    <a
                      href="https://themeforest.net/user/UiCamp"
                      target="_blank"
                    >
                      UiCamp
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 order-md-2 md-mb15">
              <div className="links d-flex justify-content-end">
                <ul className="rest d-flex align-items-center">
                  <li>
                    <a href="/light/page-FAQS">FAQ</a>
                  </li>
                  <li className="ml-30">
                    <a href="/light/page-about3">Careers</a>
                  </li>
                  <li className="ml-30">
                    <a href="/light/page-contact3">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
