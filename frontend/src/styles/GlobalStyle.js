import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import variables from './variables';
import transitions from './transitions';
import typography from './typography';

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables};
    ${typography};

    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
    /* Provide basic, default focus styles.*/
    :focus {
        outline: 2px dashed var(--color-primary);
        outline-offset: 3px;
    }
    /*
        Remove default focus styles for mouse users ONLY if
        :focus-visible is supported on this platform.
    */
    :focus:not(:focus-visible) {
        outline: none;
        outline-offset: 0;
    }
    /*
        Optionally: If :focus-visible is supported on this
        platform, provide enhanced focus styles for keyboard
        focus.
    */
    :focus-visible {
        outline: 2px dashed var(--color-primary);
        outline-offset: 3px;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-slate-03);
        border-radius: 10px;
    }

    html {
        box-sizing: border-box;
        width: 100%;
        scrollbar-width: thin;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-body-background);
        color: var(--color-font-primary);
        font-family: var(--font-sans);
        font-size: var(--size-font-lg);
        line-height: 1.3;

        @media (min-width: 480px) {
            font-size: var(--size-font-xl);
        }

        &.hidden {
            overflow: hidden;
        }

        &.blur {
            overflow: hidden;

            header {
                background-color: transparent;
            }

            #content > * {
                filter: blur(5px) brightness(0.7);
                transition: var(--transition);
                pointer-events: none;
                user-select: none;
            }
        }
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 100%;
    }

    main {
        margin: 0 auto;
        width: 100%;
        min-height: 100vh;
        max-width: 1600px;
        padding: 125px 25px;

        @media (min-width: 480px) {
            padding: 150px 50px;
        }

        @media (min-width: 768px) {
            padding: 200px 100px;
        }

        @media (min-width: 1080px) {
            padding: 200px 150px;
        }

        &.fill-height {
            padding: 0 50px;

            @media (min-width: 480px) {
                padding: 0 100px;
            }
            @media (min-width: 768px) {
                padding: 0 150px;
            }
            @media (min-width: 1080px) {
                padding: 0 25px;
            }
        }
    }

    section {
        margin: 0 auto;
        max-width: 1000px;
        padding: 60px 0;
        @media (max-width: 768px) {
            padding: 100px 0;
        }
        @media (max-width: 480px) {
            padding: 80px 0;
        }
    }

    .gatsby-image-wrapper,
    img,
    svg {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: currentColor;
        vertical-align: middle;

        &.feather {
            fill: none;
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);

        &:focus,
        &:hover {
            color: var(--color-primary);
        }

        &.inline-link {
            ${({ theme }) => theme.mixins.inlineLink};
        }
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 0;
    }

    label {
        color: var(--color-black);
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        display: block;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    input,
    textarea {
        display: block;
        color: var(--color-black);
        background-color: var(--color-white);
        border-color: var(--color-black);
        border-width: 1px;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.625rem;
        width: 100%;
        transition: border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;

        &:focus {
            outline: 0;
        }

        &:active,
        &:focus {
            &::placeholder {
                opacity: 0.5;
            }
        }
    }

    p {
        margin: 0 0 15px;

        &:last-child,
        &:last-of-type {
            margin: 0;
        }

        & > a {
            ${({ theme }) => theme.mixins.inlineLink};
        }
    }

    ul {
        &.fancy-list {
            padding: 0;
            margin: 0;
            list-style: none;
            font-size: var(--size-font-lg);

            li {
                position: relative;
                padding-left: 30px;
                margin-bottom: 10px;

                &:before {
                    content: '▹';
                    position: absolute;
                    left: 0;
                    color: var(--color-primary);
                }
            }
        }
    }

    blockquote {
        border-left-color: var(--color-primary);
        border-left-style: solid;
        border-left-width: 1px;
        margin-left: 0;
        margin-right: 0;
        padding-left: 1.5rem;

        p {
            font-style: italic;
            font-size: 24px;
        }
    }

    hr {
        background-color: var(--color-black);
        height: 1px;
        border-width: 0;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        margin: 1rem;
    }

    code {
        font-family: var(--font-mono);
        font-size: var(--size-font-md);
    }

    .skip-to-content {
        ${({ theme }) => theme.mixins.button};
        position: absolute;
        top: auto;
        left: -999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        z-index: -99;

        &:active,
        &:focus {
            background-color: var(--color-primary);
            color: var(--color-black);
            top: 0;
            left: 0;
            width: auto;
            height: auto;
            overflow: auto;
            z-index: 99;
        }
    }

    #logo {
        color: var(--color-primary);
    }

    .gatsby-image-outer-wrapper {
        height: 100%;
    }

    ${transitions};
`;

export default GlobalStyle;
