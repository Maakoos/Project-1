import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const FormBox = styled.form`
  /* width: 50%; */
  max-width: 555px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 15px 20px;
  width: 100%;
  font-size: 14px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
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

const Form = () => (
  <FormBox type="submit">
    <Input type="text" placeholder="Name" />
    <Input type="email" placeholder="Email" />
    <TextArea placeholder="Question" />
    <Button>Send Question</Button>
  </FormBox>
);

export default Form;
