import { createGlobalStyle } from "styled-components";
import fonts from "./fonts";
import variables from "./variables";
import TransitionStyles from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`
    ${fonts};
    ${variables};

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
        scrollbar-width: thin;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--color-slate-03);
        border-radius: 10px;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    /* Provide basic, default focus styles. */
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

    body {
        font-family: var(--font-sans);
        font-size: var(--size-font-size-05);
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--color-body-background);
        color: var(--color-font-primary);
        line-height: 1.3;

        @media (width > 480px) {
            font-size: var(--size-font-size-06);
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

    main {
        margin: 0 auto;
        width: 100%;
        max-width: 1600px;
        min-height: 100vh;
        padding: 125px 25px;

        @media (width > 480px) {
            padding: 150px 50px;
        }

        @media (width > 768px) {
            padding: 200px 100px;
        }

        @media (width > 1080px) {
            padding: 200px 150px;
        }

        &.fill-height {
            padding: 0 25px;

            @media (width > 480px) {
                padding: 0 50px;
            }

            @media (width > 768px) {
                padding: 0 100px;
            }

            @media (width > 1080px) {
                padding: 0 150px;
            }
        }
    }
    section {
        margin: 0 auto;
        max-width: 1000px;
        padding: 60px 0;

        @media (width > 480px) {
            padding: 80px 0;
        }

        @media (width > 768px) {
            padding: 100px 0;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px;
        font-weight: 600;
        color: var(--color-font-primary);
        line-height: 1.1;
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .medium-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 60px);
    }

    .section-heading {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0 40px;
        width: 100%;
        font-size: clamp(26px, 5vw, var(--size-font-size-08));
        white-space: nowrap;

        &::after {
            content: '';
            display: block;
            position: relative;
            top: -5px;
            width: 100%;
            height: 1px;
            margin-left: 10px;
            background-color: var(--color-black);

            @media (width > 600px) {
                margin-left: 20px;
            }

            @media (width > 768px) {
                width: 200px;
            }

            @media (width > 1080px) {
                width: 300px;
            }
        }
    }

    img,
    svg,
    .gatsby-image-wrapper {
        width: 100%;
        max-width: 100%;
        vertical-align: middle;
    }

    svg {
        width: 100%;
        height: 100%;
        fill: currentcolor;
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

        &:hover,
        &:focus {
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
        font-size: var(--size-font-size-03);
        line-height: 1.25rem;
        display: block;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    input, textarea {
        display: block;
        color: var(--color-black);
        background-color: var(--color-white);
        border-color: var(--color-black);
        border-width: 1px;
        border-radius: 0.5rem;
        font-size: var(--size-font-size-03);
        line-height: 1.25rem;
        padding: 0.625rem;
        width: 100%;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

        &:focus {
            outline: 0;
        }

        &:focus,
        &:active {
            &::placeholder {
                opacity: 0.5;
            }
        }
    }

    p {
        margin: 0 0 15px 0;

        &:last-child,
        &:last-of-type {
            margin: 0;
        }

        & > a {
            ${({ theme }) => theme.mixins.inlineLink};
        }
    }

    blockquote {
        border-left: 1px solid var(--color-primary);
        margin-left: 0;
        margin-right: 0;
        padding-left: 1.5rem;

        p {
            font-style: italic;
            font-size: var(--size-font-size-07);;
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

    .skip-to-content {
        ${({ theme }) => theme.mixins.button};
        position: absolute;
        top: auto;
        left: -999px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        z-index: -99;

        &:focus,
        &:active {
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

    .overline {
        color: var(--color-primary);
        font-family: var(--font-mono);
        font-size: var(--size-font-size-04);
        font-weight: 400;
    }

    .subtitle {
        font-size: var(--size-font-size-02);
        color: var(--color-primary);
        margin: 0 0 20px;
        font-family: var(--font-mono);
        font-weight: 400;
        line-height: 1.5;

        @media (width > 768px) {
            font-size: var(--size-font-size-03);
        }

        @media (width > 1080px) {
            font-size: var(--size-font-size-04);
        }

        a {
            ${({ theme }) => theme.mixins.inlineLink};
            line-height: 1.5;
        }
    }

    .breadcrumb {
        display: flex;
        align-items: center;
        margin-bottom: 50px;
        color: var(--color-primary);

        .arrow {
            display: block;
            margin-right: 10px;
            padding-top: 4px;
        }

        a {
            ${({ theme }) => theme.mixins.inlineLink};
            font-family: var(--font-mono);
            font-size: var(--size-font-size-03);
            font-weight: 600;
            line-height: 1.5;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }
    }

    .gatsby-image-outer-wrapper {
        height: 100%;
    }

    ${TransitionStyles};
`;

export default GlobalStyle;
