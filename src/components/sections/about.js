import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
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
        border-radius: var(--size-border-radius);

        &:hover,
        &:focus {
            outline: 0;

            &:after {
                top: 10px;
                left: 10px;
            }
        }

        .img {
            position: relative;
            border-radius: var(--size-border-radius);
        }

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: var(--size-border-radius);
            transition: var(--transition);
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--color-white);
            mix-blend-mode: screen;
        }

        &:after {
            border: 1px solid var(--color-primary);
            top: 15px;
            left: 15px;
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

    scroller.reveal(revealContainer.current);
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
                            I'm currently a solutions architect and full-stack developer with a focus
                            on front-end technologies. For those not in the industry, basically... I make websites. 
                            Web development is an iterative process, so I'm consistently working to make applications
                            that are more efficient, fully accessible, and provide an intuitive experience to the user.
                            While I've developed with many frameworks and languages, these days I'm using technologies 
                            like:{' '}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                                React
              </a>{' '}
                            and{' '}
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                                Vue.js
              </a>
                            .
            </p>
            <p>
                            At the moment, my primary role is bringing front-end experiences to
                            life; leveraging single-page application (SPA) frameworks and building
                            them on a{' '}
              <a href="https://www.sitecore.com/" target="_blank" rel="noreferrer">
                                Sitecore CMS
              </a>{' '}
                            and{' '}
              <a
                href="https://dotnet.microsoft.com/en-us/apps/aspnet/mvc"
                target="_blank"
                rel="noreferrer"
              >
                                .NET MVC
              </a>{' '}
                            back-end.{' '}
            </p>

            <p>
              {' '}
                            Since 2013, I've been developing applications for the web. When I first
                            began, I was deeply embedded in the jQuery ecosystem. These days, I'm
                            pursuing a more mindful approach to development; eschewing the
                            &ldquo;one size fits all&rdquo; mentality and using the right tool for
                            the job. Through understanding the intersectionality between people and
                            technology I can do my part in reducing bloat and creating an intuitive,
                            accessible web.
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
