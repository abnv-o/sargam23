import React from 'react'

function Hero() {
  return (
    <div>
              <section className="slider_section">
        <div className="container-fluid">
          <div
            id="carouselExampleControl"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-3 col-lg-2 offset-md-2">
                    <div className="detail-box">
                      <h1 className="tit h1">Sargam '24</h1>
                      <p>Cochin University Arts Fest</p>
                      <div>
                        <a disabled href=""> February 29, March 1, 2, 3,4 </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-8">
                    <div className="img-box">
                      <img src="images/hero.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero