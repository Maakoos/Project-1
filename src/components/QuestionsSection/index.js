import React from "react";
import styled from "styled-components";
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

const QuestionBox = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
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

class QuestionsSection extends React.Component {
  state = {
    questions: {
      first: true,
      second: true,
      third: true,
    },
  };

  handleChangeActive = (e) => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
    console.log(this.state.isActive);
    const accordionContent = e.target.nextElementSibling;
    console.log(e.target.classList);
    e.target.classList.toggle("active");
    console.log(e.target.classList);
    if (e.target.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  };

  render() {
    console.log(this.state.isActive);
    const { isActive } = this.state;
    return (
      <section>
        <Container>
          <Heading>Have a questions?</Heading>
          <ContentBox>
            <QuestionBox>
              <Question onClick={(e) => this.handleChangeActive(e)}>
                How do I cancel my and delete my account?
              </Question>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Description>

              <Question onClick={(e) => this.handleChangeActive(e, isActive)}>
                Can I get my website listed on Google?
              </Question>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Description>

              <Question onClick={(e) => this.handleChangeActive(e, isActive)}>
                Can I run a business?
              </Question>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Description>

              <Question onClick={(e) => this.handleChangeActive(e, isActive)}>
                Does Host offer phone support?
              </Question>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </Description>
            </QuestionBox>
            <Form />
          </ContentBox>
        </Container>
      </section>
    );
  }
}

/* const QuestionsSection = () => (
  <section>
    <Container>
      <Heading>Have a questions?</Heading>
      <QuestionBox active={false}>
        
        <Question>How do I cancel my and delete my account?</Question>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </Description>
      </QuestionBox>
      <Test />
    </Container>
  </section>
); */

export default QuestionsSection;
