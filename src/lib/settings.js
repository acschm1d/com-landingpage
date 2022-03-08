const settings = {
  color: {
    blue: '#3e5bff',
    yellow: '#fce764',
    pink: '#fe99a8',
  },
  font: {
    weight: {
      text: 400,
      medium: 500,
      bold: 600,
      extraBold: 700,
      black: 900,
    },
    family: {
      text: `"Roboto", sans-serif`,
      header: `"Poppins", sans-serif`,
    },
    variants: [
      {
        name: 'Poppins',
        variants: [
          { weight: 600, style: 'normal' },
          { weight: 700, style: 'normal' },
        ],
      },
      {
        name: 'Roboto',
        variants: [
          { weight: 400, style: 'normal' },
          { weight: 500, style: 'normal' },
        ],
      },
    ],
  },
  breakpoints: {
    xs: '320px',
    s: '375px',
    m: '1024px',
    l: '1400px',
  },
};

export default settings;
