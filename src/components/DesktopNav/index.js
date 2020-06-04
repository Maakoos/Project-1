import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: none;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;

  @media (min-width: 768px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 30px;

  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

const Link = styled.a`
  display: block;
  position: relative;
  padding: 5px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  z-index: 1;

  &:hover&::before {
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: #4c57d6;
    opacity: 0;
    transition: opacity 0.25s linear;
    z-index: -1;
  }

  &.active {
    &::before {
      opacity: 1;
    }
  }
`;

const DesktopNav = () => (
  <Nav>
    <NavList>
      <NavItem>
        <Link as={NavLink} to="/" exact>
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link as={NavLink} to="/about">
          About
        </Link>
      </NavItem>
      <NavItem>
        <Link as={NavLink} to="/hosting">
          Hosting
        </Link>
      </NavItem>
      <NavItem>
        <Link as={NavLink} to="/news">
          News
        </Link>
      </NavItem>
      <NavItem>
        <Link as={NavLink} to="/contact">
          Contact
        </Link>
      </NavItem>
    </NavList>
  </Nav>
);

export default DesktopNav;
