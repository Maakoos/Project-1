import React, { useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import Button from "components/Button";

const bounceIn = keyframes`
  0% {
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(0.7);
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(0.84);
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
`;

const FormBox = styled.form`
  margin-top: 20px;
  max-width: 555px;
  grid-area: form;
  opacity: 0;

  &.bounceIn {
    animation: ${bounceIn} 1.1s both;
    opacity: 1;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: none;
    `}
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;

  @media (min-width: 768px) {
    flex-basis: 49%;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;
  height: 85px;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  resize: none;
`;

const Form = ({ flex }) => {
  const formBoxRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      threshold: 1,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bounceIn");
        }
      });
    }, options);

    observer.observe(formBoxRef.current);
  });

  return (
    <FormBox type="submit" flex={flex} ref={formBoxRef}>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email" />
      <TextArea placeholder="Question" />
      <Button>Send Question</Button>
    </FormBox>
  );
};

export default Form;
