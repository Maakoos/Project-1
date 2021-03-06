import React from "react";
import styled from "styled-components";
import Container from "components/Container";
import Button from "components/Button";
import Copyright from "components/Copyright";
import background from "img/footer-bg.png";
import Description from "components/Description";
import Logo from "components/Logo";
import SocialIcon from "components/SocialIcon";

const Wrapper = styled.footer`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #0b052f;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: #0e0739;
    z-index: -1;
  }
`;

const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #fff;
`;

const Headline = styled.h5`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Numbers = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 36px;
  font-weight: 700;
`;

const BottomFooter = styled.div`
  margin-top: 100px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  color: #c4c4c4;
  border-bottom: 1px solid #2a2163;

  @media (min-width: 1200px) {
    grid-template-columns: 350px 150px 150px 350px;
  }
`;

const BottomFooterBg = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const SocialBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

const Column = styled.div``;

const Subtitle = styled.h5`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const List = styled.ul`
  margin-top: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
`;

const Link = styled.a`
  display: block;
  color: #c4c4c4;
  font-size: 14px;
  text-decoration: none;
  text-transform: capitalize;
  cursor: pointer;
`;

const ContactUsIcon = styled.span`
  display: inline-block;
  margin-right: 20px;
  color: ${({ theme }) => theme.primaryColor};
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <TopFooter>
        <div>
          <Headline>Need Help? Call us</Headline>
          <Numbers>175 946 2316 096</Numbers>
        </div>
        <div>
          <Headline>Join now and have free month of deluxe hosting</Headline>
          <Button>Log in</Button>
          <Button signUp>Sign Up</Button>
        </div>
      </TopFooter>
    </Container>

    <BottomFooterBg>
      <Container footer>
        <BottomFooter>
          <Column setMaxWidth>
            <Logo />
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida viverra maecen lacus vel
              facilisis.
            </Description>
            <SocialBox>
              <SocialIcon iconName="fab fa-facebook-f" size="18" />
              <SocialIcon iconName="fab fa-twitter" size="18" />
              <SocialIcon iconName="fab fa-youtube" size="18" />
              <SocialIcon iconName="fab fa-instagram" size="18" />
            </SocialBox>
          </Column>

          <Column>
            <Subtitle>Company</Subtitle>
            <List>
              <ListItem>
                <Link href="#">Company</Link>
              </ListItem>
              <ListItem>
                <Link href="#">About us</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Press & Media</Link>
              </ListItem>
              <ListItem>
                <Link href="#">News / Blogs</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Careers</Link>
              </ListItem>
            </List>
          </Column>

          <Column>
            <Subtitle href="#">Hosting</Subtitle>
            <List>
              <ListItem>
                <Link href="#">Web Hosting</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Reseller Hosting</Link>
              </ListItem>
              <ListItem>
                <Link href="#">VPS Hosting</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Dedicated Servers</Link>
              </ListItem>
              <ListItem>
                <Link href="#">Cloud Hosting</Link>
              </ListItem>
            </List>
          </Column>

          <Column>
            <Subtitle>Contact us</Subtitle>
            <List>
              <ListItem>
                <ContactUsIcon className="fas fa-map-marker-alt"></ContactUsIcon>
                500 South Main Street Los Angeles
              </ListItem>
              <ListItem>
                <ContactUsIcon className="fas fa-mobile-alt"></ContactUsIcon>
                125-711-811 | 125-668-886
              </ListItem>
              <ListItem>
                <ContactUsIcon className="fas fa-headphones-alt"></ContactUsIcon>
                support.hosting@mail.com
              </ListItem>
            </List>
          </Column>
        </BottomFooter>
        <Copyright />
      </Container>
    </BottomFooterBg>
  </Wrapper>
);

export default Footer;
