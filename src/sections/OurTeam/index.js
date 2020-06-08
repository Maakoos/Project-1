import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import TeamCard from "components/TeamCard";
import imgTeamOne from "img/team/team-1.jpg";
import imgTeamTwo from "img/team/team-2.jpg";
import imgTeamThree from "img/team/team-3.jpg";
import imgTeamFour from "img/team/team-4.jpg";

const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const OurTeam = () => {
  const boxRef = useRef();

  useEffect(() => {
    const cards = boxRef.current.children;

    const options = {
      root: null,
      threshold: 0.65,
      // rootMargin: "-210px",
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showIn");
        }
      });
    }, options);
    for (const card of cards) {
      observer.observe(card);
    }
  });
  return (
    <section>
      <Container>
        <Heading>Meet our team</Heading>
        <CardsBox ref={boxRef}>
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
};

export default OurTeam;
