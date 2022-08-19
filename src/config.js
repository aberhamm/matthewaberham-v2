module.exports = {
  email: 'contact@matthewaberham.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/aberhamm',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aberhamm',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    black: '#121212',
    white: '#fcfaf9',
    blue: '#004bff',
  },

  srConfig: (delay = 0, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 200,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
