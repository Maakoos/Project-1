import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import ClientCard from "components/ClientCard";
import clientImgOne from "img/client/client-1.jpg";
import clientImgTwo from "img/client/client-2.jpg";
import clientImgThree from "img/client/client-3.jpg";

const Wrapper = styled.section`
  background-color: #f5f5f5;
`;

const CardsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 130px;
  /* width: 2000px; */
`;

const OurClients = () => (
  <Wrapper>
    <Container>
      <Heading>Our client say</Heading>
      <CardsBox>
        <ClientCard
          name="Billie Eilish"
          position="desinger"
          imgSrc={clientImgOne}
        />
        <ClientCard
          name="Kristin Conant"
          position="Programist"
          imgSrc={clientImgTwo}
        />
        <ClientCard
          name="Jeanne Baker"
          position="UI/UX Desinger"
          imgSrc={clientImgThree}
        />
        {/* <ClientCard
          name="Jeanne Baker"
          position="UI/UX Desinger"
          imgSrc={clientImgThree}
        />
        <ClientCard
          name="Jeanne Baker"
          position="UI/UX Desinger"
          imgSrc={clientImgThree}
        /> */}
      </CardsBox>
    </Container>
  </Wrapper>
);

export default OurClients;
