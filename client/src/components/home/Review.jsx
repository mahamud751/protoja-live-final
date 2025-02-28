import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div>
      <div className="mil-section-title mil-up">
        <div className="mil-divider" />
        <h3>Reviews</h3>
      </div>

      <section className="mil-p-90-90">
        <div className="row justify-content-center mil-reviews-slider-frame">
          <div className="col-lg-8">
            <div className="swiper-container mil-reviews-slider mil-mb-30">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="mil-review mil-center"
                    data-swiper-parallax-opacity={0}
                    data-swiper-parallax={-90}
                    data-swiper-parallax-scale=".8"
                  >
                    <div className="mil-review-top">
                      import Image from "next/image";
                      <Image
                        src="/assets/img/customers/1.jpg"
                        alt="customer"
                        className="mil-avatar mil-up"
                        width={100}
                        height={100}
                      />
                      <div className="mil-name">
                        <h4 className="mil-up mil-mb-5">Paul Trueman</h4>
                        <p className="mil-upper mil-up">Eqanta app</p>
                      </div>
                    </div>
                    <p className="mil-up">
                      Working with Courtney Davis as our UI designer was an
                      absolute pleasure. Her attention to detail and creative
                      approach brought our vision to life. The user interface
                      she designed exceeded our expectations, and we received
                      positive feedback from our clients. Highly recommended!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review mil-center"
                    data-swiper-parallax-opacity={0}
                    data-swiper-parallax={-90}
                    data-swiper-parallax-scale=".8"
                  >
                    <div className="mil-review-top">
                      <Image
                        src="/assets/img/customers/2.jpg"
                        alt="customer"
                        className="mil-avatar mil-up"
                        width={100}
                        height={100}
                      />
                      <div className="mil-name">
                        <h4 className="mil-up mil-mb-5">Olivia Oldman</h4>
                        <p className="mil-upper mil-up">Eqanta app</p>
                      </div>
                    </div>
                    <p className="mil-up">
                      I had the opportunity to collaborate with Courtney, and I
                      must say she is incredibly talented. Her ability to
                      understand our brand and translate it into a interface was
                      impressive. Courtney's designs were intuitive, and
                      enhanced the overall user experience. I look forward to
                      working with her again!
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="mil-review mil-center"
                    data-swiper-parallax-opacity={0}
                    data-swiper-parallax={-90}
                    data-swiper-parallax-scale=".8"
                  >
                    <div className="mil-review-top">
                      <img
                        src="img/customers/3.jpg"
                        alt="customer"
                        className="mil-avatar mil-up"
                      />
                      <div className="mil-name">
                        <h4 className="mil-up mil-mb-5">Oscar Newman</h4>
                        <p className="mil-upper mil-up">Eqanta app</p>
                      </div>
                    </div>
                    <p className="mil-up">
                      Courtney Davis is an exceptional UI designer. She has a
                      keen eye for aesthetics and understands how to create
                      interfaces. Courtney's designs greatly improved the
                      usability of our application, and we couldn't be happier
                      with the results. Highly skilled and reliable!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mil-slider-nav mil-up">
            <div className="mil-reviews-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="mil-reviews-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="swiper-reviews-pagination mil-up" />
        </div>
      </section>
    </div>
  );
};

export default Review;
