import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import Button from "components/Button";
import img from "img/choose-plan.png";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const ImgBox = styled.div`
  /* flex-basis: 50%; */
  /* min-width: 330px; */

  @media (min-width: 768px) {
    flex-basis: 48%;
  }
`;

const Img = styled.img`
  width: 100%;
  /* flex-basis: 50%; */
`;

const List = styled.ul`
  /* padding: 0 20px; */
  list-style: none;
  font-size: 16px;
  flex-basis: 48%;
  min-width: 290px;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  font-weight: 500;

  /* &::before {
    content: "✓";
    color: ${({ theme }) => theme.primaryColor};
  } */
`;

const Checkmark = styled.span`
  margin-right: 10px;
  color: ${({ theme }) => theme.primaryColor};
`;

const StartNowSection = () => (
  <Container>
    <Wrapper>
      <ImgBox>
        <Img src={img} alt="" />
      </ImgBox>

      <List>
        <Heading small>
          up to 70% discount with free domain name registration included!
        </Heading>
        <ListItem>
          <Checkmark className="fa fa-check"></Checkmark>FREE Domain Name
        </ListItem>
        <ListItem>
          <Checkmark className="fa fa-check"></Checkmark>FREE Email Address
        </ListItem>
        <ListItem>
          <Checkmark className="fa fa-check"></Checkmark>Plently of disk space
        </ListItem>
        <ListItem>
          <Checkmark className="fa fa-check"></Checkmark>FREE Webiste Builder
        </ListItem>
        <ListItem>
          <Checkmark className="fa fa-check"></Checkmark>FREE Marketing Tools
        </ListItem>
        <ListItem>
          <Checkmark className="fa fa-check"></Checkmark>1-Click WordPress
          Install
        </ListItem>
        <Button>Get start now</Button>
      </List>
    </Wrapper>
  </Container>
);

export default StartNowSection;
