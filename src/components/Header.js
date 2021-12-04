import React from 'react';
import styled from 'styled-components';
import settings from '../lib/settings';
import { GitHub, LinkedIn } from '../assets/img/icons';

const externalLinks = [
  {
    icon: <GitHub />,
    href: 'https://github.com/acschm1d',
    target: '_blank',
    title: 'Visit me on Github',
  },
  {
    icon: <LinkedIn />,
    href: 'https://www.linkedin.com/in/acschmid',
    target: '_blank',
    title: 'Visit me on LinkedIn',
  },
];

const Wrapper = styled.div`
  position: relative;
  z-index: 3;
`;

const Inner = styled.div`
  display: flex;
  max-width: 1560px;
  margin: 0 auto;
  margin-bottom: 25px;

  @media screen and (min-width: ${settings.breakpoints.m}) {
    margin-bottom: 20px;
  }
`;

const Logo = styled.div`
  font-family: ${settings.font.family.header};
  font-weight: ${settings.font.weight.bold};
  font-size: 1.6rem;
  color: ${settings.color.pink};
  padding: 15px;
  flex: 1;

  @media screen and (min-width: ${settings.breakpoints.s}) {
    padding: 15px 20px;
  }

  @media screen and (min-width: ${settings.breakpoints.m}) {
    padding: 50px 30px 20px 30px;
  }

  @media screen and (min-width: ${settings.breakpoints.l}) {
    font-size: 2.2rem;
  }
`;

const Highlight = styled.span`
  color: ${settings.color.yellow};
`;

const Externals = styled.nav`
  padding: 5px;

  @media screen and (min-width: ${settings.breakpoints.s}) {
    padding: 5px 10px;
  }

  @media screen and (min-width: ${settings.breakpoints.m}) {
    padding: 40px 20px 10px 20px;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
  }
`;

const ListElement = styled.li`
  display: inline-block;
  list-style: none;

  &:not(:last-child) {
    margin-right: 5px;

    @media screen and (min-width: ${settings.breakpoints.l}) {
      margin-right: 15px;
    }
  }
`;

const LinkElement = styled.a`
  display: inline-block;
  padding: 10px;

  &:hover {
    svg {
      opacity: 0.8;
    }
  }

  svg {
    width: 16px;
    height: auto;
    opacity: 1;
    transition: 150ms opacity ease;

    @media screen and (min-width: ${settings.breakpoints.l}) {
      width: 22px;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <Inner>
      <Logo>
        acschmid<Highlight>.</Highlight>
      </Logo>
      <Externals>
        <ul>
          {externalLinks.map(({ icon, href, target, title }, key) => (
            <ListElement key={key}>
              <LinkElement
                rel="nofollow noopener noreferrer"
                target={target}
                href={href}
                title={title}
              >
                {icon}
              </LinkElement>
            </ListElement>
          ))}
        </ul>
      </Externals>
    </Inner>
  </Wrapper>
);

export default Header;
