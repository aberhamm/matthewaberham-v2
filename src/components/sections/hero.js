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

const Hero = () => {
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
    <h1 key="0">Hi, I'm Matt.</h1>,
    <h3 key="0" className="big-heading">
            Basically, I make websites.
    </h3>,
    <>
      <p>
                With a full commitment to the philosophy of life-long learning, I'm never running
                out of new things to discover and better ways to solve problems. I'm currently
                focused on architecting efficient, accessible, and intuitive web applications that
                are built on technologies like{' '}
        <a target="_blank" href="https://reactjs.org/" rel="noreferrer">
                    React
        </a>{' '}
                and{' '}
        <a target="_blank" href="https://vuejs.org/" rel="noreferrer">
                    Vue.js
        </a>
                .
      </p>
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
