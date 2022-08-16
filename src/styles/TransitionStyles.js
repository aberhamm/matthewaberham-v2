import { css } from 'styled-components';

// https://reactcommunity.org/react-transition-group/css-transition

const TransitionStyles = css`
    /* Fade up */
    .fadeup-enter {
        opacity: 0.01;
        transform: translateY(20px);
        transition: opacity 300ms var(--transition-easing), transform 300ms var(--transition-easing);
    }

    .fadeup-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms var(--transition-easing), transform 300ms var(--transition-easing);
    }

    /* Fade down */
    .fadedown-enter {
        opacity: 0.01;
        transform: translateY(-20px);
        transition: opacity 300ms var(--transition-easing), transform 300ms var(--transition-easing);
    }

    .fadedown-enter-active {
        opacity: 1;
        transform: translateY(0px);
        transition: opacity 300ms var(--transition-easing), transform 300ms var(--transition-easing);
    }

    /* Fade */
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        opacity: 1;
        transition: opacity 300ms var(--transition-easing);
    }
    .fade-exit {
        opacity: 1;
    }
    .fade-exit-active {
        opacity: 0;
        transition: opacity 300ms var(--transition-easing);
    }
`;

export default TransitionStyles;
