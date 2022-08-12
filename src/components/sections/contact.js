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

    .email-link {
        ${({ theme }) => theme.mixins.bigButton};
        margin-top: 50px;
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
                talk more about my work, or just have a conversation, feel free to get in touch.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
                Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
