import React from 'react';

function Contact() {
  return (
    <section className="contact section-padding sub-bg padded-container">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="sec-head md-mb80">
              <h2 className="text-u ls1 d-rotate wow">
                <span className="rotate-text">
                  Let&apos;s make your <br /> brand{' '}
                  <span className="fw-200">brilliant!</span>
                </span>
              </h2>
              <p className="mt-20 mb-20">
                If you would like to work with us or just want to get in touch,
                we’d love to hear from you!
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Address</h6>
                    <p>KSA, Al Shoqiyah, Mecca 25553</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="morinfo mt-30">
                    <h6 className="mb-15">Email</h6>
                    <p>co@begining.online</p>
                  </div>
                </div>
              </div>
              <div className="phone fz-30 fw-600 mt-30 underline main-color">
                <a href="/">+966 59 595 1565</a>
              </div>
              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="/" className="hover-this">
                    <span className="hover-anim">Facebook</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="/" className="hover-this">
                    <span className="hover-anim">Twitter</span>
                  </a>
                </li>
                <li className="mr-30">
                  <a href="www.linkedin.com/company/gcad-sa/posts/?feedView=all" target='_blank' rel="noreferrer" className="hover-this">
                    <span className="hover-anim">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="/" className="hover-this">
                    <span className="hover-anim">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h3 className="text-u ls1">
                  Send a <span className="fw-200">message</span>
                </h3>
              </div>
              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">Let&apos;s Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
