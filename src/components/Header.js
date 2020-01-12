import React from "react";
import "../assets/scss/components/Header.scss";
import { GitHub, LinkedIn } from "../assets/img/icons";

const externalLinks = [
  {
    icon: <GitHub />,
    href: "https://github.com/acschm1d",
    target: "_blank",
    title: "Visit me on Github"
  },
  {
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/acschmid",
    target: "_blank",
    title: "Visit me on LinkedIn"
  }
];

const Header = () => (
  <div id="topbar">
    <div>
      <div id="logo">
        acschmid<span className="yellow">.</span>
      </div>
      <nav id="externals">
        <ul>
          {externalLinks.map(({ icon, href, target, title }, key) => (
            <li key={key}>
              <a
                rel="nofollow noopener noreferrer"
                target={target}
                href={href}
                title={title}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
