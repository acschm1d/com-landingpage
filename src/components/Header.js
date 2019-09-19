import React from "react";
import "../assets/scss/components/Header.scss";
import { GitHub, LinkedIn } from "../assets/img/icons";

const externalLinks = [
  {
    icon: <GitHub />,
    href: "https://github.com/acschm1d/com",
    target: "_blank",
    title: "View Website on Github"
  },
  {
    icon: <LinkedIn />,
    href: "https://www.linkedin.com/in/acschmid",
    target: "_blank",
    title: "Visit LinkedIn profile"
  }
];

const Header = () => (
  <div id="topbar">
    <div id="logo">
      acschmid<span>.</span>
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
);

export default Header;
