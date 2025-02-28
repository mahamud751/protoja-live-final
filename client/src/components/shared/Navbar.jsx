import Image from "next/image";
import Link from "next/link";
import Logo from "../icons/Logo";

const Navbar = () => {
  return (
    <div className="mil-wrapper">
      <div className="mil-frame">
        <div className="mil-top-panel" style={{ background: "white" }}>
          <div className="flex ms-5">
            <Link href="/home-2" className="mil-logo">
              <Logo />
            </Link>
            <Link href="/home-2" className="mil-logo ms-1">
              <Image
                src="/assets/logoName.png"
                alt="logo"
                width={74.74}
                height={21.75}
              />
            </Link>
          </div>

          <div className="mil-navigation ">
            <nav id="swupMenu" className="mil-menu-transition">
              <ul className=" ">
                <li className="mil-has-children mil-active">
                  <Link href="#">Home</Link>
                  {/* <ul>
                    <li>
                      <Link href="/home-1">Default</Link>
                    </li>
                    <li>
                      <Link href="/home-2">Full width homepage</Link>
                    </li>
                    <li>
                      <Link href="/portfolio-5">Portfolio slider</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="mil-has-children">
                  <Link href="#">Services</Link>
                  {/* <ul>
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
                  </ul> */}
                </li>
                <li className="mil-has-children">
                  <Link href="#">Works</Link>
                  {/* <ul>
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
                  </ul> */}
                </li>
                <li>
                  <Link href="/contact">About Us</Link>
                </li>
                <li className="mil-has-children">
                  <Link href="#">Blog</Link>
                  {/* <ul>
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
                  </ul> */}
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
        {/* <div className="mil-left-panel">
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
        </div> */}
        {/* left bar end */}
        {/* back to top */}
        {/* back to top end */}
      </div>
    </div>
  );
};

export default Navbar;
