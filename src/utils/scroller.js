import ScrollReveal from 'scrollreveal';

const isSSR = typeof window === 'undefined';
const scroller = isSSR ? null : ScrollReveal();

export default scroller;
