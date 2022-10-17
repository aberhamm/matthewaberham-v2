import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

const StyledMainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
`;

const StyledTitle = styled.h1`
    color: var(--color-black);
    font-family: var(--font-mono);
    line-height: 1;
`;

const StyledSubtitle = styled.h2`
    font-weight: 400;
    margin: 20px 0 0;
    max-width: 540px;
`;

const StyledHomeButton = styled(Link)`
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
    const [isMounted, setIsMounted] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);

    const content = (
        <StyledMainContainer className="fill-height">
            <StyledTitle>Thank you!</StyledTitle>
            <StyledSubtitle>
                Your request for contact has been received. I will try to reach back out within the
                next few days.
            </StyledSubtitle>
            <StyledHomeButton to="/">Go Home</StyledHomeButton>
        </StyledMainContainer>
    );

    return (
        <Layout location={location}>
            <Helmet title="Page Not Found" />

            {prefersReducedMotion ? (
                <>{content}</>
            ) : (
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition timeout={500} classNames="fadeup">
                            {content}
                        </CSSTransition>
                    )}
                </TransitionGroup>
            )}
        </Layout>
    );
};

NotFoundPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default NotFoundPage;
