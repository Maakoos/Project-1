import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import HostingCard from "components/HostingCard";

const WrapperSeciton = styled.section`
  background-color: #f5f5f5;
`;

const CardsBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
`;

const HostingFeatures = () => (
  <WrapperSeciton>
    <Container>
      <Heading>Out hosting Features</Heading>
      <CardsBox>
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

export default HostingFeatures;
