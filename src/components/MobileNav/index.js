import React, { useContext } from "react";
import styled, { css } from "styled-components";
import logo from "img/logo.png";
import MobileBtn from "components/MobileBtn";
import MyContext from "context/Context";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 95vw;
  height: 100vh;
  padding: 30px;
  background-color: black;
  color: #fff;
  /* box-shadow: 20px 0px 5px 10px rgba(0, 0, 0, 0.75); */
  overflow-y: auto;
  transform: translateX(-120%);
  transition: transform 0.5s ease-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translateX(0);
    `}
`;

const NavList = styled.ul`
  margin: 30px 0;
  list-style: none;
`;

const NavItem = styled.li``;

const Link = styled.a`
  display: block;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  text-transform: capitalize;
  font-weight: 500;
  border-bottom: 1px solid #fff;
`;

const NavSocialBox = styled.div`
  margin-bottom: 20px;
`;

const IconName = styled.span`
  margin-left: 20px;
`;

const MobileNav = () => {
  const myContext = useContext(MyContext);
  console.log(myContext.isOpen);
  return (
    <Nav isOpen={myContext.isOpen}>
      <MobileBtn onClick={myContext.closeMobileMenu} closeBtn>
        <span className="far fa-times-circle"></span>
      </MobileBtn>
      <img src={logo} alt="logo" />
      <NavList>
        <NavItem>
          <Link>Home</Link>
        </NavItem>
        <NavItem>
          <Link>About</Link>
        </NavItem>
        <NavItem>
          <Link>Hosting</Link>
        </NavItem>
        <NavItem>
          <Link>News</Link>
        </NavItem>
        <NavItem>
          <Link>Contact</Link>
        </NavItem>
      </NavList>
      <NavSocialBox>
        <span className="fas fa-comments"></span>
        <IconName>Live chat</IconName>
      </NavSocialBox>
      <NavSocialBox>
        <span className="fas fa-user"></span>
        <IconName>Login/Register</IconName>
      </NavSocialBox>
      <NavSocialBox>
        <span className="fas fa-phone"></span>
        <IconName>123-456-7890</IconName>
      </NavSocialBox>
      <NavSocialBox>
        <span className="fas fa-envelope"></span>
        <IconName>support@mail.com</IconName>
      </NavSocialBox>
    </Nav>
  );
};

export default MobileNav;
