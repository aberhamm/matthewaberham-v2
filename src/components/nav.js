import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { navLinks } from '@config';
import { loaderDelay } from '@utils';
import { useScrollDirection, usePrefersReducedMotion } from '@hooks';
import { Menu } from '@components';

const StyledHeader = styled.header`
    ${({ theme }) => theme.mixins.flexBetween};
    position: fixed;
    top: 0;
    z-index: 11;
    padding: 0 25px;
    width: 100%;
    height: var(--size-navigation-height);
    background-color: var(--color-header-background);
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    backdrop-filter: blur(10px);
    transition: var(--transition);

    @media (min-width: 768px) {
        padding: 0 40px;
    }

    @media (min-width: 1080px) {
        padding: 0px 50px;
    }

    @media (prefers-reduced-motion: no-preference) {
        ${props =>
            props.scrollDirection === 'up' &&
            !props.scrolledToTop &&
            css`
                height: var(--size-navigation-scroll-height);
                transform: translateY(0px);
                background-color: var(--color-header-background);
            `};

        ${props =>
            props.scrollDirection === 'down' &&
            !props.scrolledToTop &&
            css`
                height: var(--size-navigation-scroll-height);
                transform: translateY(calc(var(--size-navigation-scroll-height) * -1));
            `};
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    position: relative;
    width: 100%;
    color: var(--color-font-primary);
    font-family: var(--font-mono);
    counter-reset: item 0;
    z-index: 12;
`;

const StyledLinks = styled.div`
    display: none;
    align-items: center;

    @media (min-width: 768px) {
        display: flex;
    }

    ol {
        ${({ theme }) => theme.mixins.flexBetween};
        padding: 0;
        margin: 0;
        list-style: none;

        li {
            margin: 0 5px;
            position: relative;
            counter-increment: item 1;
            font-size: var(--size-font-xs);

            a {
                padding: 10px;
            }
        }
    }

    .resume-button {
        ${({ theme }) => theme.mixins.smallButton};
        margin-left: 15px;
        font-size: var(--size-font-xs);
    }
`;

const Nav = ({ isHome }) => {
    const [isMounted, setIsMounted] = useState(!isHome);
    const scrollDirection = useScrollDirection('down');
    const [scrolledToTop, setScrolledToTop] = useState(true);
    const prefersReducedMotion = usePrefersReducedMotion();

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50);
    };

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const timeout = isHome ? loaderDelay : 0;
    const fadeClass = isHome ? 'fade' : '';
    const fadeDownClass = isHome ? 'fadedown' : '';

    const ResumeLink = (
        <a
            className="resume-button"
            href="/Aberham-Matthew-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Resume
        </a>
    );

    return (
        <StyledHeader scrollDirection={scrollDirection} scrolledToTop={scrolledToTop}>
            <StyledNav>
                {prefersReducedMotion ? (
                    <>
                        <StyledLinks>
                            <ol>
                                {navLinks &&
                                    navLinks.map(({ url, name }, i) => (
                                        <li key={i}>
                                            <Link to={url}>{name}</Link>
                                        </li>
                                    ))}
                            </ol>
                            <div>{ResumeLink}</div>
                        </StyledLinks>

                        <Menu />
                    </>
                ) : (
                    <>
                        <StyledLinks>
                            <ol>
                                <TransitionGroup component={null}>
                                    {isMounted &&
                                        navLinks &&
                                        navLinks.map(({ url, name }, i) => (
                                            <CSSTransition
                                                key={i}
                                                classNames={fadeDownClass}
                                                timeout={timeout}>
                                                <li
                                                    key={i}
                                                    style={{
                                                        transitionDelay: `${
                                                            isHome ? i * 100 : 0
                                                        }ms`,
                                                    }}>
                                                    <Link to={url}>{name}</Link>
                                                </li>
                                            </CSSTransition>
                                        ))}
                                </TransitionGroup>
                            </ol>

                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeDownClass} timeout={timeout}>
                                        <div
                                            style={{
                                                transitionDelay: `${
                                                    isHome ? navLinks.length * 100 : 0
                                                }ms`,
                                            }}>
                                            {ResumeLink}
                                        </div>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </StyledLinks>

                        <TransitionGroup component={null}>
                            {isMounted && (
                                <CSSTransition classNames={fadeClass} timeout={timeout}>
                                    <Menu />
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                    </>
                )}
            </StyledNav>
        </StyledHeader>
    );
};

Nav.propTypes = {
    isHome: PropTypes.bool,
};

export default Nav;
