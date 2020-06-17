import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import HostingCard from "components/HostingCard";

const WrapperSeciton = styled.section`
  background-color: #f5f5f5;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  /* animation: ${fadeIn} 2s ease both; */
`;

const HostingFeatures = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const cards = boxRef.current.children;
    let delay = 0;

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `${fadeIn.name} 1.2s ${delay}s cubic-bezier(0.390, 0.575, 0.565, 1.000) both`;
          delay += 0.2;
        }
      });
    });
    for (const card of cards) {
      observer.observe(card);
    }
  });

  return (
    <WrapperSeciton>
      <Container>
        <Heading>Out hosting Features</Heading>
        <CardsBox ref={boxRef}>
          <HostingCard
            icon="fas fa-cloud-upload-alt"
            title="Auto update"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <HostingCard
            icon="fas fa-sliders-h"
            title="Optimized software"
            description="Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas."
          />

          <HostingCard
            icon="fas fa-database"
            title="Daily backups"
            description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />

          <HostingCard
            icon="fas fa-globe-europe"
            title="Wide networking"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />

          <HostingCard
            icon="fas fa-shield-virus"
            title="Protect"
            description="Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas."
          />

          <HostingCard
            icon="fas fa-headphones-alt"
            title="Free support"
            description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
          />
        </CardsBox>
      </Container>
    </WrapperSeciton>
  );
};

export default HostingFeatures;
