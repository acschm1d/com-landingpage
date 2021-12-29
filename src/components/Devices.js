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
      { size, img: `/assets/img/device-${image}-${size}.png` },
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

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Devices = () => (
  <Wrapper>
    {Object.entries(images).map(([key, imageSizePair]) => {
      return (
        <Picture key={key}>
          {imageSizePair.map(({ img, size }) => (
            <source key={size} srcSet={img} media={`(min-width: ${size}px)`} />
          ))}
          <Image
            key={key}
            src={imageSizePair.at(-1).img}
            alt={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        </Picture>
      );
    })}
  </Wrapper>
);

export default Devices;
