import ScrollReveal from 'scrollreveal';
import { srConfig } from '@config';

const isSSR = typeof window === 'undefined';
const scroller = isSSR ? null : ScrollReveal(srConfig());

export default scroller;
