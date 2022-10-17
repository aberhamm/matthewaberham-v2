import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    min-height: 70px;
    padding: 15px;
    text-align: center;
`;

const StyledSocialLinks = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 0 auto 10px;
        color: var(--light-slate);
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;

        a {
            padding: 10px;
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`;

const StyledAnnotation = styled.div`
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: var(--size-font-xxs);
    line-height: 1;

    a {
        padding: 10px;
    }

    .github-stats {
        margin-top: 10px;

        & > span {
            display: inline-flex;
            align-items: center;
            margin: 0 7px;
        }
        svg {
            display: inline-block;
            margin-right: 5px;
            width: 14px;
            height: 14px;
        }
    }
`;

const Footer = () => (
    <StyledFooter>
        <StyledSocialLinks>
            <ul>
                {socialMedia &&
                    socialMedia.map(({ name, url }, i) => (
                        <li key={i}>
                            <a href={url} aria-label={name}>
                                <Icon name={name} />
                            </a>
                        </li>
                    ))}
            </ul>
        </StyledSocialLinks>

        <StyledAnnotation tabindex="-1">
            <a href="https://github.com/aberhamm/matthewaberham-v2">
                <div>This site is hosted on Netlify; built using React and Gatsby.</div>
            </a>
        </StyledAnnotation>
    </StyledFooter>
);

Footer.propTypes = {
    githubInfo: PropTypes.object,
};

export default Footer;
