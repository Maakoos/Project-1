import React from "react";
import styled, { css } from "styled-components";
import Button from "components/Button";

const FormBox = styled.form`
  margin-top: 20px;
  max-width: 555px;
  grid-area: form;

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

const Form = ({ flex }) => (
  <FormBox type="submit" flex={flex}>
    <Input type="text" placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <TextArea placeholder="Question" />
    <Button>Send Question</Button>
  </FormBox>
);

export default Form;
