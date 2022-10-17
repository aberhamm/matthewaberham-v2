import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import scroller from '@utils/scroller';
import { navigate } from 'gatsby-link';
import { encode } from '@utils';
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

const Contact = ({ headline, subline, content }) => {
    const [formData, setFormData] = useState({});
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        !prefersReducedMotion && scroller.reveal(revealContainer.current);
    }, []);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...formData,
            }),
        })
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                navigate(form.getAttribute('action'));
            })
            .catch(error => alert(error));
    };

    return (
        <StyledContactSection id="contact" ref={revealContainer}>
            <h2 className="section-heading overline">{headline}</h2>

            <h2 className="title">{subline}</h2>

            <p>{content}</p>
            <form
                name="contact"
                className="contact-form"
                method="post"
                action="/contact/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Your name:
                        <br />
                        <input type="text" name="name" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Your email:
                        <br />
                        <input type="email" name="email" onChange={handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Message:
                        <br />
                        <textarea name="message" onChange={handleChange} />
                    </label>
                </p>
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
