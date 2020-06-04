import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import MobileBtn from "components/MobileBtn";
import Logo from "components/Logo";
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
  z-index: 99;
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
  text-decoration: none;
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
      <MobileBtn onClick={() => myContext.setIsOpen(false)} closeBtn>
        <span className="far fa-times-circle"></span>
      </MobileBtn>
      <Logo />
      <NavList>
        <NavItem>
          <Link
            as={NavLink}
            to="/"
            onClick={() => myContext.setIsOpen(false)}
            exact
          >
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link
            as={NavLink}
            to="/about"
            onClick={() => myContext.setIsOpen(false)}
          >
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link
            as={NavLink}
            to="/hosting"
            onClick={() => myContext.setIsOpen(false)}
          >
            Hosting
          </Link>
        </NavItem>
        <NavItem>
          <Link
            as={NavLink}
            to="/news"
            onClick={() => myContext.setIsOpen(false)}
          >
            News
          </Link>
        </NavItem>
        <NavItem>
          <Link
            as={NavLink}
            to="/contact"
            onClick={() => myContext.setIsOpen(false)}
          >
            Contact
          </Link>
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
