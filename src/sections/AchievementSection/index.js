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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const AchievementSection = () => (
  <WrapperBackground>
    <Container>
      <ListItem>
        <AchievementItem names="clients" numbers="147" icon="far fa-user" />
        <AchievementItem names="domains" numbers="1247" icon="far fa-edit" />
        <AchievementItem names="servers" numbers="537" icon="far fa-clone" />
        <AchievementItem names="installs" numbers="1784" icon="fa fa-cog" />
      </ListItem>
    </Container>
  </WrapperBackground>
);

export default AchievementSection;
