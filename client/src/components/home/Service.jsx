import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <>
      <div className="mil-section-title mil-up">
        <div className="mil-divider"></div>
        <h3>Services</h3>
      </div>

      <section className="mil-p-90-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4">
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-service-icon mil-up">
                <Image
                  src="/assets/img/icons/1.svg"
                  alt="UI/UX Design icon"
                  width={100}
                  height={100}
                  className="mil-mb-30"
                />
              </div>
              <h5 className="mil-up mil-mb-30">UI/UX Design</h5>
              <p className="mil-up mil-mb-30">
                Elevate your online presence with captivating user interfaces
                and seamless experiences
              </p>
              <div className="mil-up">
                <Link href="/service.html" className="mil-link mil-icon-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-service-icon mil-up">
                <Image
                  src="/assets/img/icons/2.svg"
                  alt="Logo Design icon"
                  width={100}
                  height={100}
                  className="mil-mb-30"
                />
              </div>
              <h5 className="mil-up mil-mb-30">Logo Design</h5>
              <p className="mil-up mil-mb-30">
                Establish a strong and cohesive brand identity that resonates
                with your audience.
              </p>
              <div className="mil-up">
                <Link href="/service.html" className="mil-link mil-icon-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Branding Service */}
          <div className="col-lg-4">
            <div className="mil-icon-box mil-center mil-mb-60">
              <div className="mil-service-icon mil-up">
                <Image
                  src="/assets/img/icons/3.svg"
                  alt="Branding icon"
                  width={100}
                  height={100}
                  className="mil-mb-30"
                />
              </div>
              <h5 className="mil-up mil-mb-30">Branding</h5>
              <p className="mil-up mil-mb-30">
                All of which have a singular goal: to build environments where
                our clients thrive.
              </p>
              <div className="mil-up">
                <Link href="/service.html" className="mil-link mil-icon-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
