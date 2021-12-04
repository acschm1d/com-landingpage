import React from 'react';
import styled from 'styled-components';
import settings from '../lib/settings';

const breakpoints = settings.breakpoints;
const sizes = [1024, 375, 320];

const images = ['cup', 'laptop'].reduce((carry, image) => {
  if (!carry[image]) {
    carry[image] = [];
  }

  sizes.forEach((size) => {
    carry[image] = [
      ...carry[image],
      { size, img: require(`../assets/img/device-${image}-${size}.png`) },
    ];
  });

  return carry;
}, {});

const Wrapper = styled.div`
  position: absolute;
  left: 15px;
  right: 15px;
  bottom: 0;

  @media screen and (min-width: ${breakpoints.s}) {
    left: 20px;
    right: 20px;
  }

  @media screen and (min-width: ${breakpoints.s}) and (min-height: 667px) {
    transform: translateY(10%);
  }

  @media screen and (min-width: ${breakpoints.s}) and (min-height: 736px) {
    transform: translateY(0);
  }

  @media screen and (min-width: ${breakpoints.m}) {
    width: 100%;
    left: 50%;
    max-width: 1560px;
    transform: translateX(-50%);
  }
`;

const Picture = styled.picture`
  display: flex;
  justify-content: flex-end;
`;

const Devices = () => (
  <Wrapper>
    {Object.entries(images).map(([key, imageSizePair]) => {
      return (
        <Picture key={key}>
          {imageSizePair.map(({ img, size }) => (
            <source
              key={size}
              srcSet={img.default}
              media={`(min-width: ${size}px)`}
            />
          ))}
          <img key={key} src={imageSizePair[0].img} alt="" />
        </Picture>
      );
    })}
  </Wrapper>
);

export default Devices;
