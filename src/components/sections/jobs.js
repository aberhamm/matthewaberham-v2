import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

const StyledJobsSection = styled.section`
    max-width: 700px;

    .inner {
        // Prevent container from jumping
        @media (min-width: 700px) {
            min-height: 340px;
        }
    }
`;

const StyledTabPanels = styled.div`
    position: relative;
    width: 100%;
    margin-left: 0;

    @media (min-width: 600px) {
        margin-left: 20px;
    }
`;

const StyledTabPanel = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 5px;

    ul {
        ${({ theme }) => theme.mixins.fancyList};
    }

    h3 {
        margin-bottom: 2px;
        font-size: var(--size-font-size-07);
        font-weight: 500;
        line-height: 1.3;

        .company {
            color: var(--color-primary);
        }
    }

    .range {
        margin-bottom: 25px;
        color: var(--color-slate-04);
        font-family: var(--font-mono);
        font-size: var(--size-font-size-02);
    }
`;

const Jobs = () => {
    const data = useStaticQuery(graphql`
        query {
            jobs: allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
                sort: { frontmatter: { date: DESC } }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            company
                            location
                            range
                            url
                        }
                        html
                    }
                }
            }
        }
    `);

    const jobsData = data.jobs.edges;

    return (
        <StyledJobsSection id='jobs'>
            <h2 className='section-heading'>Where I’ve Worked</h2>

            <div className='inner'>
                <StyledTabPanels>
                    {jobsData &&
                        jobsData.map(({ node }, i) => {
                            const { frontmatter, html } = node;
                            const { title, url, company, range } = frontmatter;

                            return (
                                <CSSTransition
                                    key={i}
                                    timeout={250}
                                    classNames='fade'
                                >
                                    <StyledTabPanel
                                        id={`panel-${i}`}
                                        role='tabpanel'
                                    >
                                        <h3>
                                            <span>{title}</span>
                                            <span className='company'>
                                                &nbsp;@&nbsp;
                                                <a
                                                    href={url}
                                                    className='inline-link'
                                                >
                                                    {company}
                                                </a>
                                            </span>
                                        </h3>

                                        <p className='range'>{range}</p>

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: html,
                                            }}
                                        />
                                    </StyledTabPanel>
                                </CSSTransition>
                            );
                        })}
                </StyledTabPanels>
            </div>
        </StyledJobsSection>
    );
};

export default Jobs;
