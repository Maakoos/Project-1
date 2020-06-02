import React from "react";
import styled from "styled-components";
import background from "img/achievement-bg.jpg";
import Container from "components/Container";
import AchievementItem from "components/AchievementItem";

const WrapperBackground = styled.section`
  padding-bottom: 300px;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  color: #fff;
`;

const ListItem = styled.ul`
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

/* const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;
`;

const Icon = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 40px;
`;

const Amount = styled.span`
  margin: 20px 0 10px;
  font-size: 36px;
  font-weight: 700;
`;

const Txt = styled.span`
  font-size: 16px;
  text-transform: uppercase;
`; */

const AchievementSection = () => (
  <WrapperBackground>
    <Container>
      <ListItem>
        <AchievementItem names="clients" numbers="147" icon="far fa-user" />
        <AchievementItem names="domains" numbers="1247" icon="far fa-edit" />
        <AchievementItem names="servers" numbers="537" icon="far fa-clone" />
        <AchievementItem names="installs" numbers="1784" icon="fa fa-cog" />
        {/*  <Item>
          <Icon className="far fa-user"></Icon>
          <Amount>147</Amount>
          <Txt>Clients</Txt>
        </Item>
        <Item>
          <Icon className="far fa-edit"></Icon>
          <Amount>1247</Amount>
          <Txt>Domains</Txt>
        </Item>
        <Item>
          <Icon className="far fa-clone"></Icon>
          <Amount>537</Amount>
          <Txt>Servers</Txt>
        </Item>
        <Item>
          <Icon className="fa fa-cog"></Icon>
          <Amount>1784</Amount>
          <Txt>Installs</Txt>
        </Item> */}
      </ListItem>
    </Container>
  </WrapperBackground>
);

export default AchievementSection;
