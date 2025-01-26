import React from 'react';

function Skills() {
  return (
    <section
      className="about-crev section-padding sub-bg position-re ontop"
      data-scroll-index="4"
    >
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-6">
            <div className="left-block mt-100 md-mb50">
              <div className="d-flex align-items-center">
                <div>
                  <div className="info">
                    <p className="nowrap">Market Values</p>
                  </div>
                </div>
                <div>
                  <div className="img fit-img radius-30">
                    {/* <img src="/light/assets/imgs/intro/03.jpg" alt="" /> */}
                    <img 
                      src="https://img.freepik.com/free-photo/businessman-touching-glowing-increasing-arrow-business-profit-investment-growth-concept_616485-72.jpg?ga=GA1.1.1799722700.1719322866&semt=ais_incoming" 
                      alt="im" 
                      style={{ height: 500, with: 300 }}
                    />
                  </div>
                </div>
              </div>
              <div className="mz-shap">
                <svg
                  height="100%"
                  viewBox="0 0 610 547"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M116.134 529.548C116.134 538.642 123.506 546.015 132.6 546.015H211.63C211.635 546.015 211.638 546.011 211.638 546.007V546.007C211.638 546.003 211.642 545.999 211.646 545.999H592.691C601.786 545.999 609.158 538.627 609.158 529.533L609.157 251.366C609.157 242.272 601.785 234.899 592.691 234.899H401.097C392.003 234.899 384.631 227.527 384.631 218.433V112.465C384.631 103.371 377.259 95.999 368.164 95.999H214.466C205.372 95.999 198 88.6268 198 79.5327V16.4662C198 7.37219 190.628 0 181.534 0H88.4662C79.3722 0 72 7.37219 72 16.4662V104.534C72 113.628 79.3722 121 88.4662 121H166.917C176.011 121 183.383 128.372 183.383 137.466V273.565C183.383 282.659 176.011 290.031 166.917 290.031H116.134H116.134H16.5634C7.46936 290.031 0.0971666 297.403 0.0971666 306.497V445.923C0.0971666 455.017 7.46935 462.39 16.5634 462.39H99.6677C108.762 462.39 116.134 469.762 116.134 478.856V529.548Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content full-width">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">Assets value</h6>
                <h2>Our assets market value</h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text">
                    <p>
                      We shifted our talents to frontier science because we
                      wanted our work to have tangible
                    </p>
                  </div>
                  <div className="mt-50">
                    <div className="skills-box">
                      <div className="skill-item mb-20">
                        <h5 className="sub-title mb-15">Dall In Platform</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="100%"></div>
                          <div className="progres" market-value="27,600,000 SAR"/>
                        </div>
                      </div>
                      <div className="skill-item mb-20">
                        <h5 className="sub-title mb-15">IGI App</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="90%"></div>
                          <div className="progres" market-value="10,800,000 SAR"/>
                        </div>
                      </div>
                      <div className="skill-item mb-20">
                        <h5 className="sub-title mb-15">ACC App</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="80%"></div>
                          <div className="progres" market-value="3,600,000 SAR"/>
                        </div>
                      </div>
                      <div className="skill-item mb-20">
                        <h5 className="sub-title mb-15">IGI App</h5>
                        <div className="skill-progress">
                          <div className="progres" data-value="70%"></div>
                          <div className="progres" market-value="3,000,000 SAR"/>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text">
                    <br />
                    <p>
                      Total Market Value is 45,000,000 SAR
                    </p>
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

export default Skills;
