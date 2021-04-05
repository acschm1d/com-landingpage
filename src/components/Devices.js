import React from "react";
import "../assets/scss/components/Devices.scss";

const sizes = [1024, 375, 320];

const images = ["cup", "laptop"].reduce((carry, image) => {
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

const Devices = () => (
  <div className="devices">
    <div className="devices-inner">
      {Object.entries(images).map(([key, imageSizePair]) => {
        return (
          <picture key={key}>
            {imageSizePair.map(({ img, size }) => (
              <source
                key={size}
                srcSet={img.default}
                media={`(min-width: ${size}px)`}
              />
            ))}
            <img key={key} src={imageSizePair[0].img} alt="" />
          </picture>
        );
      })}
    </div>
  </div>
);

export default Devices;
