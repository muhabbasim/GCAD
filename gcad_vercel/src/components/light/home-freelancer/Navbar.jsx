import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img style={{ width: 130, marginTop: 0 }} src='/light/assets/imgs/gcadlogo-light.png' alt="logo" />
          </a>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="rolling-text">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">
                  <span className="rolling-text">Services</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <span className="rolling-text">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <span className="rolling-text">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="topnav white-burger">
            <div className="menu-icon cursor-pointer">
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      <div className="hamenu one-scroll">
        <div className="logo icon-img-100">
          <img src="/light/assets/imgs/logo-light.png" alt="img" />
        </div>
        <div className="close-menu cursor-pointer ti-close"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="menu-text">
                <div className="text">
                  <h2>Menu</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="menu-links">
                <ul className="main-menu rest">
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href='/' className="fill-text" data-text="Home">
                          Home
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href='/services' className="fill-text" data-text="Services">
                          Services
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href='/' className="fill-text" data-text="About">
                          About
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="o-hidden">
                      <div className="link cursor-pointer dmenu">
                        <a href='/' className="fill-text" data-text="Contact">
                          Contact
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cont-info">
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Address</h6>
                  <h5>
                    541 Melville Geek, <br /> Palo Alto, CA 94301
                  </h5>
                </div>
                <div className="item mb-50">
                  <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                  <ul className="rest social-text">
                    <li className="mb-10">
                      <a href="/" className="hover-this">
                        <span className="hover-anim">Facebook</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="/" className="hover-this">
                        <span className="hover-anim">Twitter</span>
                      </a>
                    </li>
                    <li className="mb-10">
                      <a href="/" className="hover-this">
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
                <div className="item mb-40">
                  <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                  <h5>
                    <a href="/">Hello@email.com</a>
                  </h5>
                  <h5 className="underline mt-10">
                    <a href="/">+1 840 841 25 69</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
