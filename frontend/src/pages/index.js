import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import query from '../queries/pages/index.js';
import { Seo, Layout, Hero, About, Jobs, Contact } from '@components';

const StyledMainContainer = styled.main`
    counter-reset: section;
`;

const IndexPage = ({ location }) => {
    const data = query();
    const { allStrapiJob, strapiAbout, strapiContactSection: contact, strapiHero } = data;
    return (
        <Layout location={location}>
            <StyledMainContainer className="fill-height">
                <Hero
                    intro={strapiHero.intro}
                    heading={strapiHero.heading}
                    body={strapiHero.body.data.childMarkdownRemark.html}
                />
                <About
                    content={strapiAbout.content.data.childMarkdownRemark.html}
                    image={strapiAbout.image}
                    title={strapiAbout.title}
                />
                <Jobs jobs={allStrapiJob.nodes} />
                <Contact
                    headline={contact.headline}
                    subline={contact.subline}
                    content={contact.content}
                />
            </StyledMainContainer>
        </Layout>
    );
};
IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};

export default IndexPage;
