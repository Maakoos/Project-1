import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import Container from "components/Container";
import Button from "components/Button";
import background from "img/banner-bg.jpg";
import bannerImage from "img/bannerImage.png";

const Wrapper = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-position: bottom;
  color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const fadeIn = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Heading = styled.h1`
  margin: 20px 0;
  font-size: 36px;
  text-transform: uppercase;
  /* animation: ${fadeIn} 2s ease both; */
`;

const SmallHeading = styled.span`
  display: block;
  margin-top: 100px;
  font-size: 18px;
  font-weight: 500;
`;

const BannerImg = styled.img`
  display: block;
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
`;

const Banner = () => {
  const [posX, setPosX] = useState();
  const [posY, setPosY] = useState();

  const headingRef = useRef(null);

  const bannerRef = useRef(null);

  const imgRef = useRef(null);

  const setNewPosition = (e) => {
    const { clientX, clientY } = e;

    const ratioX = 0.15;
    const ratioY = 0.15;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const posX = clientX - centerX;
    const posY = clientY - centerY;

    setPosX(posX * -ratioX);
    setPosY(posY * -ratioY);
  };

  useEffect(() => {
    const options = {
      root: null,
      treshold: 0,
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = `${fadeIn.name} 2s ease both`;
          if (entry.target.tagName === "BUTTON") {
            entry.target.style.animation = `${fadeIn.name} 2s 0.5s ease both`;
          }
        }
      });
    }, options);

    observer.observe(headingRef.current);
    observer.observe(bannerRef.current.children[2]);

    document.addEventListener("mousemove", (e) => setNewPosition(e));

    imgRef.current.style.transform = `translate(${posX}px, ${posY}px)`;

    document.removeEventListener("mousemove", (e) => setNewPosition(e));
  });

  return (
    <Wrapper>
      <Container>
        <Content>
          <div ref={bannerRef}>
            <SmallHeading>Starting At Only $2.8/month </SmallHeading>
            <Heading ref={headingRef}>
              Welcome to the best hosting company
            </Heading>
            <Button anim={fadeIn}>Get started now</Button>
          </div>
          <BannerImg src={bannerImage} alt="corporation" ref={imgRef} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Banner;
