import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Container from "components/Container";
import Heading from "components/Heading";
import HostingCard from "components/HostingCard";

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.secondaryColor};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px;
  /* animation: ${fadeIn} 2s ease both; */
`;

const HostingSection = () => {
  const boxRef = useRef();

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
    <Wrapper>
      <Container>
        <Heading>Chose the right hosting solutuon</Heading>
        <GridBox ref={boxRef}>
          <HostingCard
            title="Shared Hosting"
            price="1.84"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HostingCard
            title="Wordpress Hosting"
            price="1.99"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HostingCard
            title="Dedicated Hosting"
            price="2.50"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HostingCard
            title="SSL certificate"
            price="2.99"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HostingCard
            title="Web Hosting"
            price="1.55"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <HostingCard
            title="Cloud server"
            price="4.99"
            description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </GridBox>
      </Container>
    </Wrapper>
  );
};

export default HostingSection;
