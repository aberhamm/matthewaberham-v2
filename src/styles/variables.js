import { css } from 'styled-components';

const variables = css`
    ::after,
    ::before,
    :root {
        --color-body-background: var(--color-white);
        --color-header-background: var(--color-white);
        --color-primary: var(--color-blue-02);
        --color-font-primary: var(--color-black);
        --color-font-accent: var(--color-primary);
        --color-button: var(--color-black);
        --color-button-hover: var(--color-white);
        --color-link: var(--color-primary);

        --color-black: #121212;
        --color-white: #fcfaf9;
        --color-blue-01: #41b6e6;
        --color-blue-02: #004bff;
        --color-slate-01: #ccd6f6;
        --color-slate-02: #a8b2d1;
        --color-slate-03: #8892b0;
        --color-green-01: #7db290;
        --color-green-02: #407d6c;

        --navy: #0a192f;
        --light-navy: #112240;
        --lightest-navy: #233554;
        --navy-shadow: rgba(2, 12, 27, 0.7);
        --dark-slate: #495670;
        --slate: #8892b0;
        --light-slate: #a8b2d1;
        --lightest-slate: #ccd6f6;
        --white: #e6f1ff;
        --pink: #f57dff;
        --blue: #57cbff;

        --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
            sans-serif;
        --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

        --size-font-xxs: 0.75rem;
        --size-font-xs: 0.8125rem;
        --size-font-sm: 0.875rem;
        --size-font-md: 1rem;
        --size-font-lg: 1.125rem;
        --size-font-xl: 1.25rem;
        --size-font-xxl: 1.375;
        --size-font-heading: 2rem;

        --border-radius: 4px;
        --nav-height: 100px;
        --nav-scroll-height: 70px;

        --tab-height: 42px;
        --tab-width: 120px;

        --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        --hamburger-width: 30px;

        --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
        --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
        --ham-after: bottom 0.1s ease-in 0.25s,
            transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        --ham-after-active: bottom 0.1s ease-out,
            transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
    }
`;

export default variables;
