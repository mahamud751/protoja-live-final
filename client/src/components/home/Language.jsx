const LanguageSkillsSection = () => {
  return (
    <>
      <div className="mil-section-title mil-up">
        <div className="mil-divider"></div>
        <h3>Language Skills</h3>
      </div>

      <section className="mil-lang-skills mil-p-90-60">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 col-lg-3">
            <div className="mil-lang-skills-item mil-center mil-up mil-mb-30">
              <div className="mil-circular-progress" data-value="95%">
                <div className="mil-counter-frame mil-upper mil-dark">
                  <span className="mil-counter" data-number="95">
                    0
                  </span>
                  <span>%</span>
                </div>
              </div>
              <h6 className="mil-up">English</h6>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="mil-lang-skills-item mil-center mil-up mil-mb-30">
              <div className="mil-circular-progress" data-value="85%">
                <div className="mil-counter-frame mil-upper mil-dark">
                  <span className="mil-counter" data-number="85">
                    0
                  </span>
                  <span>%</span>
                </div>
              </div>
              <h6 className="mil-up">French</h6>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="mil-lang-skills-item mil-center mil-up mil-mb-30">
              <div className="mil-circular-progress" data-value="60%">
                <div className="mil-counter-frame mil-upper mil-dark">
                  <span className="mil-counter" data-number="60">
                    0
                  </span>
                  <span>%</span>
                </div>
              </div>
              <h6 className="mil-up">Spanish</h6>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="mil-lang-skills-item mil-center mil-up mil-mb-30">
              <div className="mil-circular-progress" data-value="40%">
                <div className="mil-counter-frame mil-upper mil-dark">
                  <span className="mil-counter" data-number="40">
                    0
                  </span>
                  <span>%</span>
                </div>
              </div>
              <h6 className="mil-up">German</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LanguageSkillsSection;
