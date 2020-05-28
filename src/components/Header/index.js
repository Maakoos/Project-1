import React, { useContext } from "react";
import styled from "styled-components";
import logo from "img/logo.png";
// import Container from "components/Container";
import MyContext from "context/Context";
import MobileBtn from "components/MobileBtn";
import DesktopNav from "components/DesktopNav";
import HeaderInfo from "components/HeaderInfo";

const Heading = styled.header`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px; */ /* tutaj jak by co to damy zmienna lub zrobimy odzielny komponent do wrapowania komponentów na moblice */
  /* padding: 20px 15px; */
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 15px; */
`;
const Header = () => {
  const myContext = useContext(MyContext);
  console.log(myContext);
  return (
    <Heading>
      <>
        <HeaderInfo />
        <ContentBox>
          <img src={logo} alt="logo" />
          <MobileBtn onClick={myContext.openMobileMenu}>
            <span className="fas fa-bars"></span>
          </MobileBtn>
          <DesktopNav />
        </ContentBox>
      </>
    </Heading>
  );
};

export default Header;
