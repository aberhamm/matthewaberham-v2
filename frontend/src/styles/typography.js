import { css } from 'styled-components';
export default css`
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

    .heading-lg {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .heading-md {
        margin: 0;
        font-size: clamp(40px, 8vw, 60px);
    }

    .section-heading {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0 40px;
        width: 100%;
        font-size: clamp(26px, 5vw, var(--size-font-heading));
        white-space: nowrap;

        &:after {
            content: '';
            display: block;
            position: relative;
            top: -5px;
            width: 300px;
            height: 1px;
            margin-left: 20px;
            background-color: var(--color-black);
            @media (max-width: 1080px) {
                width: 200px;
            }
            @media (max-width: 768px) {
                width: 100%;
            }
            @media (max-width: 600px) {
                margin-left: 10px;
            }
        }
    }
    .overline {
        color: var(--color-primary);
        font-family: var(--font-mono);
        font-size: var(--size-font-md);
        font-weight: 400;
    }

    .subtitle {
        color: var(--color-primary);
        margin: 0 0 20px;
        font-size: var(--size-font-md);
        font-family: var(--font-mono);
        font-weight: 400;
        line-height: 1.5;

        @media (max-width: 1080px) {
            font-size: var(--size-font-sm);
        }
        @media (max-width: 768px) {
            font-size: var(--size-font-xs);
        }

        a {
            ${({ theme }) => theme.mixins.inlineLink};
            line-height: 1.5;
        }
    }
`;
