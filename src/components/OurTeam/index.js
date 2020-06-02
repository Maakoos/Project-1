import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import TeamCard from "components/TeamCard";
import imgTeamOne from "img/team/team-1.jpg";
import imgTeamTwo from "img/team/team-2.jpg";
import imgTeamThree from "img/team/team-3.jpg";
import imgTeamFour from "img/team/team-4.jpg";

const CardsBox = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  } */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OurTeam = () => (
  <section>
    <Container>
      <Heading>Meet our team</Heading>
      <CardsBox>
        <TeamCard
          imgSrc={imgTeamOne}
          name="Alan Henderson"
          position="Chief executive officer"
        />
        <TeamCard
          imgSrc={imgTeamThree}
          name="Sabrina Carpenter"
          position="Software engineer"
        />
        <TeamCard
          imgSrc={imgTeamTwo}
          name="Carter Parker"
          position="Product director"
        />
        <TeamCard
          imgSrc={imgTeamFour}
          name="Karen Moffitt"
          position="Support representative"
        />
      </CardsBox>
    </Container>
  </section>
);

export default OurTeam;
