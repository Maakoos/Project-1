import React from "react";
import styled from "styled-components";

const IconName = styled.span`
  margin-left: 20px;
`;

const InfoBox = ({ iconClassName, iconTxt }) => (
  <>
    <span className={iconClassName}></span>
    <IconName>{iconTxt}</IconName>
  </>
);

export default InfoBox;
