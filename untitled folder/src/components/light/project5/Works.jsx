import React from 'react';

function Works() {
  return (
    <div className="img-column3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img fit-img md-mb30">
              <img src="/light/assets/imgs/works/projects/5/2.jpg" alt="img" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img md-mb30 position-re o-hidden">
              <img
                src="/light/assets/imgs/works/projects/5/v.jpg"
                alt="img"
                data-speed="0.2"
                data-lag="0"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img fit-img">
              <img src="/light/assets/imgs/works/projects/5/3.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
