import React from "react";
// import styled from "styled-components";
// import img from "img/about-us.png";
// import Container from "components/Container";
/* import Heading from "components/Heading";
import Description from "components/Description";
import AchievementItem from "components/AchievementItem";
import Button from "components/Button"; */
import Welcome from "components/Welcome";
import HostingFeatures from "components/HostingFeatures";
import OurTeam from "components/OurTeam";
import OurClients from "components/OurClients";

/* const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImgWrapper = styled.div`
  margin-bottom: 20px;
  max-width: 550px;
  width: 550px;
  min-width: 330px;
  max-width: 550px;

  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
`;

const TextBox = styled.div`
  flex-basis: 50%;

  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
`;

const ItemsBox = styled.div`
  display: flex;
  justify-content: space-between;
`; */

const AboutPage = () => (
  <>
    <Welcome />
    <HostingFeatures />
    <OurTeam />
    <OurClients />
  </>
);

export default AboutPage;
