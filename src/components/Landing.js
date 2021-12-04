import React from 'react';
import styled, { css } from 'styled-components';
import Devices from './Devices';
import settings from '../lib/settings';

const Wrapper = styled.div`
  padding: 0 15px;

  @media screen and (min-width: ${settings.breakpoints.s}) {
    padding: 0 20px;
  }
`;

const TextOuter = styled.div`
  position: relative;
  z-index: 2;

  @media screen and (min-width: ${settings.breakpoints.m}) {
    position: absolute;
    top: 0;
    left: 50%;
    max-width: 1560px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transform: translateX(-50%);
  }
`;

const TextInner = styled.div`
  @media screen and (min-width: ${settings.breakpoints.m}) {
    position: relative;
    top: 40%;
    padding: 0 30px;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${settings.breakpoints.l}) {
    top: 50%;
  }
`;

const Text = styled.div`
  @media screen and (min-width: ${settings.breakpoints.m}) {
    max-width: 520px;
  }

  @media screen and (min-width: ${settings.breakpoints.l}) {
    max-width: 730px;
  }
`;

const Title = styled.h1`
  font-family: ${settings.font.family.header};
  font-size: 3.2rem;
  line-height: 1.375em;
  margin: 0 0 0.65em 0;

  @media screen and (min-width: ${settings.breakpoints.s}) {
    font-size: 3.8rem;
    line-height: 1.316em;
  }

  @media screen and (min-width: ${settings.breakpoints.l}) {
    font-size: 6.5rem;
    line-height: 1.4em;
  }
`;

const Slash = styled.strong`
  font-weight: ${settings.font.weight.black};
  color: ${settings.color.pink};
`;

const Divider = ({ children = '/' }) => <Slash children={children} />;

const Highlight = styled.span`
  color: ${settings.color.yellow};

  ${({ weight }) => {
    if (weight === 'medium') {
      return css`
        font-weight: ${settings.font.weight.medium};
      `;
    }
  }}
`;

const Landing = () => (
  <Wrapper>
    <TextOuter>
      <TextInner>
        <Text>
          <header>
            <Title>
              Hi, my name is <Highlight>Adrian</Highlight>
            </Title>
          </header>
          <p>
            I'm a Full Stack Web Developer from{' '}
            <Highlight as="strong" weight="medium">
              Augsburg, Germany
            </Highlight>
            . Frontend, Backend, DevOps <Divider /> PHP, OOP, SQL, RESTful{' '}
            <Divider /> HTML5, ES2015+, CSS3, SCSS <Divider /> React, Next.js{' '}
            <Divider /> Docker, CI/CD <Divider /> WordPress, Typo3, Magento 2.
            Fascinated by new things and challenges.
          </p>
        </Text>
      </TextInner>
    </TextOuter>
    <Devices />
  </Wrapper>
);

export default Landing;
