import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import scroller from '@utils/scroller';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
    max-width: 600px;
    margin: 0 auto 100px;
    text-align: center;

    @media (max-width: 768px) {
        margin: 0 auto 50px;
    }

    .overline {
        display: block;
        margin-bottom: 20px;
        color: var(--color-primary);
        font-family: var(--font-mono);
        font-size: var(--size-font-md);
        font-weight: 400;

        &:before {
            bottom: 0;
            font-size: var(--size-font-sm);
        }

        &:after {
            display: none;
        }
    }

    .title {
        font-size: clamp(40px, 5vw, 60px);
    }

    .contact-form {
        margin-top: 25px;
        .submit-button {
            ${({ theme }) => theme.mixins.smallButton};
            margin-top: 25px;
        }
    }
`;

const Contact = () => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) {
            return;
        }

        scroller.reveal(revealContainer.current, srConfig());
    }, []);

    return (
        <StyledContactSection id="contact" ref={revealContainer}>
            <h2 className="section-heading overline">What’s Next?</h2>

            <h2 className="title">Reach Out and Let's Talk</h2>

            <p>
                I'm always looking to build my portfolio. Whether you’re looking to collaborate,
                speak with me about my work, or just have a conversation, feel free to get in touch
                by submitting the form below.
            </p>

            <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify-recaptcha="true"
                data-netlify="true">
                <p>
                    <label>Email:</label>
                    <input type="text" name="name" />
                </p>
                <p>
                    <label>Message:</label>
                    <textarea name="message"></textarea>
                </p>
                <div data-netlify-recaptcha="true"></div>
                <p>
                    <button className="submit-button" type="submit">
                        Send
                    </button>
                </p>
            </form>
        </StyledContactSection>
    );
};

export default Contact;
