export const fontFace = (
  name,
  weight = 400,
  style = 'normal',
  exts = ['eot', 'woff', 'woff2', 'ttf', 'svg']
) => {
  const filePath = `/assets/fonts/${name.toLowerCase()}/`;

  const extMods = {
    eot: '?',
    svg: '#' + name.replace(/ /g, '_'),
  };

  const formats = {
    otf: 'opentype',
    ttf: 'truetype',
  };

  let srcSet = [];
  exts.forEach((ext) => {
    const extmod = ext in extMods ? ext + extMods[ext] : ext;
    const format = ext in formats ? formats[ext] : ext;
    const fileName = weight + (style !== 'normal' && style);

    srcSet.push(`url("${filePath}${fileName}.${extmod}") format("${format}")`);
  });

  const src = srcSet.join(', ');
  return `@font-face { font-family: "${name}"; font-style: "${style}"; font-weight: ${weight}; src: ${src}; font-display: swap; }`;
};
