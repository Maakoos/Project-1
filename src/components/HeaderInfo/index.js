import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: none;
  margin-bottom: 30px;
  color: #fff;
  font-size: 16px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Item = styled.div`
  margin-left: 20px;

  &:nth-child(1) {
    margin-left: 0;
  }

  &:nth-child(3) {
    margin-left: auto;
  }
`;

const Link = styled.a`
  cursor: pointer;
`;

const IconName = styled.span`
  margin-left: 20px;
`;

const HeaderInfo = () => (
  <Wrapper>
    <Item>
      <span className="fas fa-phone"></span>
      <IconName>123-456-7890</IconName>
    </Item>
    <Item>
      <span className="fas fa-envelope"></span>
      <IconName>support@mail.com</IconName>
    </Item>
    <Item>
      <Link>
        <span className="fas fa-comments"></span>
        <IconName>Live chat</IconName>
      </Link>
    </Item>
    <Item>
      <Link iconClassName="fas fa-phone" iconTxt="Login/Register" />
      <Link>
        <span className="fas fa-phone"></span>
        <IconName>Login/Ragister</IconName>
      </Link>
    </Item>
  </Wrapper>
);

export default HeaderInfo;
