import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
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
    ul.skills-list {
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
        border-radius: var(--border-radius);

        &:hover,
        &:focus {
            outline: 0;

            &:after {
                top: 15px;
                left: 15px;
            }
        }

        .img {
            position: relative;
            border-radius: var(--border-radius);
        }

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius);
            transition: var(--transition);
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--navy);
            mix-blend-mode: screen;
        }

        &:after {
            border: 2px solid var(--color-primary);
            top: 20px;
            left: 20px;
            z-index: -1;
        }
    }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    scroller.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Vue.js',
    'Node.js',
    '.NET Framework',
    'Sitecore CMS',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="section-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
                            Hello, my name is Matt! I'm a solutions architect and full-stack
                            developer with an affinity for front-end technologies. I am currently
                            working on React and Vue.js applications, integrating with Sitecore CMS
                            on the .NET platform. I've been developing for the web since 2013;
                            starting off with jQuery and Vanilla JS. Now, I'm focused on building
                            lean, accessible sites using Single-Page Application frameworks.
            </p>

            <p>
                            I’ve had the privilege of working with an insurance software startup{' '}
              <a href="https://www.vipsoftware.com/">(VIP Software)</a>, a
                            tele/e-commerce corporation{' '}
              <a href="https://www.hsn.com/">(HSN Inc.)</a>, a VR experience startup{' '}
              <a href="https://www.threshold360.com/">(Threshold 360)</a>, an IT
                            consultancy <a href="https://www.perficient.com/">(Perficient)</a>, and
                            a major, regional grocery story{' '}
              <a href="https://www.publix.com/">(Publix)</a>.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/matthew.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
