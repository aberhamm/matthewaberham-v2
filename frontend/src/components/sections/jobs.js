import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import scroller from '@utils/scroller';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
    max-width: 700px;

    .inner {
        display: flex;

        @media (max-width: 600px) {
            display: block;
        }

        // Prevent container from jumping
        @media (min-width: 700px) {
            min-height: 340px;
        }
    }
`;

const StyledTabPanels = styled.div`
    position: relative;
    width: 100%;
    margin-left: 20px;

    @media (max-width: 600px) {
        margin-left: 0;
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
        font-size: var(--size-font-xxl);
        font-weight: 500;
        line-height: 1.3;

        .company {
            color: var(--color-primary);
        }
    }

    .range {
        margin-bottom: 25px;
        color: var(--light-slate);
        font-family: var(--font-mono);
        font-size: var(--size-font-xs);
    }
`;

const Jobs = ({ jobs }) => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        scroller.reveal(revealContainer.current);
    }, []);

    return (
        <StyledJobsSection id="jobs" ref={revealContainer}>
            <h2 className="section-heading">Where I’ve Worked</h2>

            <div className="inner">
                <StyledTabPanels>
                    {jobs &&
                        jobs.map((job, i) => {
                            const { company, companyUrl, startDate, title, endDate, content } = job;

                            const range = `${startDate} - ${endDate ? endDate : 'Present'}`;

                            return (
                                <CSSTransition key={i} timeout={50} classNames="fade">
                                    <StyledTabPanel id={`panel-${i}`} role="tabpanel">
                                        <h3>
                                            <span>{title}</span>
                                            <span className="company">
                                                &nbsp;@&nbsp;
                                                <a href={companyUrl} className="inline-link">
                                                    {company}
                                                </a>
                                            </span>
                                        </h3>

                                        <p className="range">{range}</p>

                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: content.data.childMarkdownRemark.html,
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
