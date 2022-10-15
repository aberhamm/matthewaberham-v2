import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Seo, Nav, Social, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Layout = ({ children, location, pageName }) => {
    const isHome = location.pathname === '/';

    // Sets target="_blank" rel="noopener noreferrer" on external links
    const handleExternalLinks = () => {
        const allLinks = Array.from(document.querySelectorAll('a'));
        if (allLinks.length > 0) {
            allLinks.forEach(link => {
                if (link.host !== window.location.host) {
                    link.setAttribute('rel', 'noopener noreferrer');
                    link.setAttribute('target', '_blank');
                }
            });
        }
    };

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1); // location.hash without the '#'
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView();
                    el.focus();
                }
            }, 0);
        }

        handleExternalLinks();
    });

    return (
        <>
            <Seo pageName={pageName} />

            <div id="root">
                <ThemeProvider theme={theme}>
                    <GlobalStyle />

                    <a className="skip-to-content" href="#content">
                        Skip to Content
                    </a>

                    <StyledContent>
                        <Nav isHome={isHome} />
                        <Social isHome={isHome} />

                        <div id="content">
                            {children}
                            <Footer />
                        </div>
                    </StyledContent>
                </ThemeProvider>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

export default Layout;