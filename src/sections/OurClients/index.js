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
  margin-top: 130px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;

const OurClients = () => {
  return (
    <Wrapper>
      <Container>
        <Heading>Our client say</Heading>
        <>
          <CardsBox>
            <ClientCard
              name="Margaret Dials"
              position="desinger"
              imgSrc={clientImgOne}
            />
            <ClientCard
              name="Ashley Strand"
              position="Programist"
              imgSrc={clientImgTwo}
            />
            <ClientCard
              name="Elizabeth Lynn"
              position="UI/UX Desinger"
              imgSrc={clientImgThree}
            />
          </CardsBox>
        </>
      </Container>
    </Wrapper>
  );
};

export default OurClients;
