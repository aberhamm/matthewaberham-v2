import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import scroller from '@utils/scroller';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
    max-width: 900px;

    .inner {
        display: block;

        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 3fr 2fr;
            grid-gap: 50px;
        }
    }
`;
const StyledText = styled.div`
    ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        grid-gap: 0 10px;
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--size-font-xs);

            &:before {
                content: '▹';
                position: absolute;
                left: 0;
                color: var(--color-primary);
                font-size: var(--size-font-sm);
                line-height: 12px;
            }
        }
    }
`;
const StyledPic = styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }

    .wrapper {
        ${({ theme }) => theme.mixins.boxShadow};
        display: block;
        position: relative;
        width: 100%;
        border-radius: var(--size-border-radius);

        &:hover,
        &:focus {
            outline: 0;

            &:after {
                top: 10px;
                left: 10px;
            }
        }

        .img {
            position: relative;
            border-radius: var(--size-border-radius);
        }

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: var(--size-border-radius);
            transition: var(--transition);
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--color-white);
            mix-blend-mode: screen;
        }

        &:after {
            border: 1px solid var(--color-primary);
            top: 15px;
            left: 15px;
            z-index: -1;
        }
    }
`;

const About = ({ title, content, image }) => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        scroller.reveal(revealContainer.current);
    }, []);

    return (
        <StyledAboutSection id="about" ref={revealContainer}>
            <h2 className="section-heading">{title}</h2>

            <div className="inner">
                <StyledText>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: content,
                        }}></div>
                </StyledText>

                <StyledPic>
                    <div className="wrapper">
                        <img
                            className="img"
                            src={image.localFile.publicURL}
                            width={500}
                            alt=""
                            role="presentation"
                            aria-hidden="true"
                        />
                    </div>
                </StyledPic>
            </div>
        </StyledAboutSection>
    );
};

export default About;
