import React from "react";
import Image from "next/image";

const Blog = () => {
  return (
    <div>
      <div className="mil-section-title mil-up">
        <div className="mil-divider" />
        <h3>Latest from blog</h3>
      </div>

      <section className="mil-p-90-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6">
            <a href="publication-1.html" className="mil-blog-card mil-mb-60">
              <div className="mil-cover mil-up">
                <Image
                  src="/assets/img/blog/1.jpg"
                  alt="cover"
                  width={500}
                  height={300}
                />
                <div className="mil-link mil-icon-link">
                  <i className="fa fa-link" aria-hidden="true"></i>
                </div>
              </div>
              <div className="mil-descr">
                <h4 className="mil-up mil-mb-30">
                  How to Become a Graphic Designer in 10 Simple Steps
                </h4>
                <p className="mil-up">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  sequi commodi dignissimos.
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-6">
            <a href="publication-1.html" className="mil-blog-card mil-mb-60">
              <div className="mil-cover mil-up">
                <Image
                  src="/assets/img/blog/2.jpg"
                  alt="cover"
                  width={500}
                  height={300}
                />
                <div className="mil-link mil-icon-link">
                  <i className="fa fa-link" aria-hidden="true"></i>
                </div>
              </div>
              <div className="mil-descr">
                <h4 className="mil-up mil-mb-30">
                  16 Best Graphic Design Online and Offline Courses
                </h4>
                <p className="mil-up">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  sequi commodi dignissimos.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
