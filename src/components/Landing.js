import React from "react";
import "../assets/scss/components/Landing.scss";

const Landing = () => (
  <div className="landing">
    <div className="text-outer">
      <div className="text-inner">
        <div className="text">
          <header>
            <h1 className="header">
              Hi, my name is <span class="yellow">Adrian</span>
            </h1>
          </header>
          <div>
            <p>
              I'm a Web Developer from{" "}
              <strong class="yellow">Augsburg, Germany</strong>. PHP7+, OOP,
              SQL, HTML5, ES2015+, React 1608+ (Basics), CSS3, SCSS{" "}
              <strong class="pink heavy">/</strong> Docker, Git, npm, Composer,
              Jenkins <strong class="pink heavy">/</strong> WordPress, Typo3,
              Magento 2. Fascinated by new things and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
