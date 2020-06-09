import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import Form from "components/Form";

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

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

const QuestionBox = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  opacity: 0;

  &.bounceIn {
    animation: ${bounceIn} 1.1s both;
    opacity: 1;
  }
`;

const Question = styled.button`
  position: relative;
  padding-left: 30px;
  text-align: left;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  outline: none;

  &.active&::before {
    content: "-";
  }

  &::before {
    content: "+";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.primaryColor};
    color: #fff;
    font-size: 20px;
    line-height: 20px;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 14px;
  line-height: 2;
  transition: all 0.2s linear;
  overflow: hidden;
  max-height: 0;
`;

const QuestionsSection = () => {
  const questionBoxRef = useRef();

  const handleChangeActive = (e) => {
    const accordionContent = e.target.nextElementSibling;
    e.target.classList.toggle("active");

    if (e.target.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  };

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

    observer.observe(questionBoxRef.current);
  });

  return (
    <section>
      <Container>
        <Heading>Have a questions?</Heading>
        <ContentBox>
          <QuestionBox ref={questionBoxRef}>
            <Question onClick={(e) => handleChangeActive(e)}>
              How do I cancel my and delete my account?
            </Question>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </Description>

            <Question onClick={(e) => handleChangeActive(e)}>
              Can I get my website listed on Google?
            </Question>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </Description>

            <Question onClick={(e) => handleChangeActive(e)}>
              Can I run a business?
            </Question>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </Description>

            <Question onClick={(e) => handleChangeActive(e)}>
              Does Host offer phone support?
            </Question>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </Description>
          </QuestionBox>
          <Form />
        </ContentBox>
      </Container>
    </section>
  );
};

export default QuestionsSection;
