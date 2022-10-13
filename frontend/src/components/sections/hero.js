import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
    ${({ theme }) => theme.mixins.flexCenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;

    @media (max-width: 480px) and (min-height: 700px) {
        padding-bottom: 10vh;
    }

    h1 {
        margin: 0 0 20px 2px;
        color: var(--color-font-primary);
        font-family: var(--font-mono);
        font-size: clamp(var(--size-font-sm), 5vw, var(--size-font-md));
        font-weight: 400;

        @media (min-width: 480px) {
            margin: 0 0 30px 4px;
        }
    }

    h3 {
        margin-top: 10px;
        color: var(--color-font-primary);
        line-height: 0.9;
    }

    p {
        margin: 20px 0 0;
        max-width: 540px;
    }

    .email-link {
        ${({ theme }) => theme.mixins.bigButton};
        margin-top: 50px;
    }
`;

const Hero = ({ intro, heading, body }) => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const nodes = [
        <h1 key="0">{intro}</h1>,
        <h3 key="0" className="big-heading">
            {heading}
        </h3>,
        <>
            <p
                dangerouslySetInnerHTML={{
                    __html: body,
                }}></p>
        </>,
    ];

    return (
        <StyledHeroSection>
            {prefersReducedMotion ? (
                <>
                    {nodes.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted &&
                        nodes.map((item, i) => (
                            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                            </CSSTransition>
                        ))}
                </TransitionGroup>
            )}
        </StyledHeroSection>
    );
};

export default Hero;
