import React from "react";
import styled from "styled-components";
import Heading from "components/Heading";
import Description from "components/Description";
import SocialIcon from "components/SocialIcon";
import Form from "components/Form";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-template-areas:
    "txt"
    "map"
    "heading"
    "form";

  @media (min-width: 1024px) {
    grid-template-areas:
      "txt map"
      "heading heading"
      "form form";
  }
`;

const ContentTxt = styled.div`
  grid-area: txt;

  @media (min-width: 1024px) {
    flex-basis: 30%;
  }
`;

const ContactBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const ContactTxtBox = styled.div`
  margin-left: 20px;
`;

const Icon = styled.span`
  width: 46px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
`;

const Headline = styled.h5`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const ContactTxt = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.8;
`;

const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const Map = styled.div`
  margin: 40px 0;
  grid-area: map;

  @media (min-width: 1024px) {
    flex-basis: 60%;
  }
`;

const ContactInfo = () => (
  <Wrapper>
    <ContentTxt>
      <Heading contact>Contact Info</Heading>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Description>
      <ContactBox>
        <Icon className="fas fa-map-marker-alt"></Icon>
        <ContactTxtBox>
          <Headline>Adress</Headline>
          <ContactTxt>160 Pensylvania Ave NW, Washington Castle</ContactTxt>
        </ContactTxtBox>
      </ContactBox>
      <ContactBox>
        <Icon className="fas fa-mobile-alt"></Icon>
        <ContactTxtBox>
          <Headline>Phone</Headline>
          <ContactTxt>125-677-118 || 125-745-199</ContactTxt>
        </ContactTxtBox>
      </ContactBox>
      <ContactBox>
        <Icon className="fas fa-headphones-alt"></Icon>
        <ContactTxtBox>
          <Headline>Email</Headline>
          <ContactTxt>support@mail.com</ContactTxt>
        </ContactTxtBox>
      </ContactBox>

      <SocialBox>
        <SocialIcon iconName="fab fa-facebook-f" color="#3263af" size="30" />
        <SocialIcon iconName="fab fa-twitter" color="#40c4ff" size="30" />
        <SocialIcon iconName="fab fa-youtube" color="#ff0000" size="30" />
        <SocialIcon iconName="fab fa-instagram" color="#b309d7" size="30" />
      </SocialBox>
    </ContentTxt>

    <Map>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20151.047591375514!2d-0.5735782106784704!3d50.85188881113048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875a4d10c96d8bf%3A0xe9a76e70e6b7cc5a!2sArundel%2C%20UK!5e0!3m2!1sen!2sbd!4v1584862449435!5m2!1sen!2sbd"
        width="640"
        height="480"
        allowFullScreen
        title="map"
      ></iframe>
    </Map>
    <Heading contact>Send Message</Heading>
    <Form flex />
  </Wrapper>
);

export default ContactInfo;
