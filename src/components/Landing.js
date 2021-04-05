import React from "react";
import Devices from "./Devices";
import "../assets/scss/components/Landing.scss";

const Landing = () => (
  <div className="landing">
    <div className="text-outer">
      <div className="text-inner">
        <div className="text">
          <header>
            <h1 className="header">
              Hi, my name is <span className="yellow">Adrian</span>
            </h1>
          </header>
          <div>
            <p>
              I'm a Full Stack Web Developer from{" "}
              <strong className="yellow">Augsburg, Germany</strong>. Frontend,
              Backend, DevOps <strong className="pink heavy">/</strong> PHP,
              OOP, SQL, RESTful <strong className="pink heavy">/</strong> HTML5,
              ES2015+, CSS3, SCSS <strong className="pink heavy">/</strong>{" "}
              React, Next.js <strong className="pink heavy">/</strong> Docker,
              CI/CD <strong className="pink heavy">/</strong> WordPress, Typo3,
              Magento 2. Fascinated by new things and challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Devices />
  </div>
);

export default Landing;
