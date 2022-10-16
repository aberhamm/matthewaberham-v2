import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Seo, Layout, Hero, About, Jobs, Contact } from '@components';
import { getImage } from 'gatsby-plugin-image';

const StyledMainContainer = styled.main`
    counter-reset: section;
`;

const IndexPage = ({ location }) => {
    const { strapiAbout, strapiHero } = useStaticQuery(graphql`
        query {
            strapiAbout {
                id
                title
                content {
                    data {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
                image {
                    url
                    localFile {
                        publicURL
                    }
                }
            }
            strapiHero {
                id
                intro
                heading
                body {
                    data {
                        body
                        childMarkdownRemark {
                            html
                            rawMarkdownBody
                        }
                    }
                }
            }
        }
    `);
    console.log(strapiAbout.image.url);
    return (
        <Layout location={location}>
            <StyledMainContainer className="fill-height">
                <Hero
                    intro={strapiHero.intro}
                    heading={strapiHero.heading}
                    body={strapiHero.body.data.childMarkdownRemark.html}
                />
                <About
                    content={strapiAbout.content}
                    image={strapiAbout.image}
                    title={strapiAbout.title}
                />
                <Jobs />
                <Contact />
            </StyledMainContainer>
        </Layout>
    );
};
IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;
