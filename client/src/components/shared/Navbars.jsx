import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

const Navbar = ({ children }) => {
  return (
    <div className="mil-wrapper" id="top">
      {/* preloader */}
      <div className="mil-preloader-frame">
        <div
          className="mil-preloader-content"
          style={{ transform: "scale(0.6) translateY(200px)", opacity: 0 }}
        >
          <div className="mil-preloader">
            <div className="mil-circ-1" />
            <div className="mil-circ-2" />
            <div className="mil-circ-3" />
            <div className="mil-circ-4" />
          </div>
          <div className="mil-upper">Loading</div>
        </div>
      </div>
      {/* preloader end */}
      <div className="mil-frame">
        {/* top bar */}
        <div className="mil-top-panel">
          {/* You need to remove the "mil-dot" class if you don't need a dot */}
          <Link href="/home-2" className="mil-logo">
            <span className="mil-dot">C</span>
          </Link>
          <div className="mil-navigation">
            <nav id="swupMenu" className="mil-menu-transition">
              <ul>
                <li className="mil-has-children mil-active">
                  <Link href="#">Home</Link>
                  <ul>
                    <li>
                      <Link href="/home-1">Default</Link>
                    </li>
                    <li>
                      <Link href="/home-2">Full width homepage</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-5">Portfolio slider</Link>
                    </li>
                  </ul>
                </li>
                <li className="mil-has-children">
                  <Link href="#">Projects</Link>
                  <ul>
                    <li>
                      <Link href="/portfolio-1">Projects list</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-2">Projects 2 column list</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-3">Full width list</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-4">Full width simple list</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-5">Carousel</Link>
                    </li>
                    <li>
                      <Link href="/project-1">Single Project</Link>
                    </li>
                    <li>
                      <Link href="/project-2">Full width Single Project</Link>
                    </li>
                  </ul>
                </li>
                <li className="mil-has-children">
                  <Link href="#">Blog</Link>
                  <ul>
                    <li>
                      <Link href="/blog-1">Blog list</Link>
                    </li>
                    <li>
                      <Link href="/blog-2">Full width list</Link>
                    </li>
                    <li>
                      <Link href="/publication-1">Publication</Link>
                    </li>
                    <li>
                      <Link href="/publication-2">Full width Publication</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="mil-has-children">
                  <Link href="#">Other</Link>
                  <ul>
                    <li>
                      <Link href="/story">Story timeline</Link>
                    </li>
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/service">Single Service</Link>
                    </li>
                    <li>
                      <Link href="/404">404</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mil-top-panel-btns">
            <Link href="/contact" className="mil-contact-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </Link>
            <div className="mil-menu-btn">
              <span />
            </div>
          </div>
        </div>
        {/* top bar end */}
        {/* left bar */}
        <div className="mil-left-panel">
          <div className="mil-page-name mil-upper mil-dark">Homepage</div>
          <ul className="mil-social-icons">
            <li>
              <Link href="#" className="social-icon">
                <i className="far fa-circle" />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-icon">
                <i className="far fa-circle" />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-icon">
                <i className="far fa-circle" />
              </Link>
            </li>
            <li>
              <Link href="#" className="social-icon">
                <i className="far fa-circle" />
              </Link>
            </li>
          </ul>
        </div>
        {/* left bar end */}
        {/* back to top */}
        {/* back to top end */}
      </div>
      <div className="mil-content">
        <div className="mil-scroll-wrapper transition-fade" id="swupMain">
          <div className="mil-container">
            {children}
            <Footer />
          </div>
        </div>

        <div className="mil-right-banner" id="scene">
          {/* scrollbar */}
          <div className="mil-progress-track">
            <div className="mil-progress"></div>
          </div>
          {/* scrollbar end */}

          <div className="mil-banner-wrapper" data-depth="1">
            <div id="swupBg" className="mil-banner-frame">
              <Image
                src="/assets/img/person/bg-1.jpg"
                alt="background"
                className="mil-banner-bg mil-blur"
                layout="fill"
              />
            </div>
          </div>

          <div className="mil-banner-wrapper" data-depth="0.2">
            <div id="swupPerson" className="mil-banner-frame">
              <Image
                src="/assets/img/person/2.png"
                alt="person"
                className="mil-banner-person"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="mil-flying-skills" data-depth="0.1">
            <div id="swupSkills" className="mil-skills-frame">
              <div className="mil-item" style={{ top: "30%", left: "10%" }}>
                <Image
                  src="/assets/img/logos/1.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mil-item" style={{ bottom: "15%", left: "20%" }}>
                <Image
                  src="/assets/img/logos/2.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mil-item" style={{ bottom: "45%", right: "15%" }}>
                <Image
                  src="/assets/img/logos/3.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mil-el mil-addition-el-1">+</div>
              <div className="mil-el mil-addition-el-2">+</div>
              <div className="mil-el mil-addition-el-3"></div>
              <div className="mil-el mil-addition-el-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
