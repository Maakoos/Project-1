import React, { useContext } from "react";
import styled from "styled-components";
import background from "img/banner-bg.jpg";
import MyContext from "context/Context";
import MobileBtn from "components/MobileBtn";
import DesktopNav from "components/DesktopNav";
import HeaderInfo from "components/HeaderInfo";
import Logo from "components/Logo";

const Wrapper = styled.header`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 15px;
`;

const BackgroundWrapper = styled.div`
  background-image: url(${background});
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Header = () => {
  const myContext = useContext(MyContext);
  console.log(myContext);
  return (
    <BackgroundWrapper>
      <Wrapper>
        <HeaderInfo />
        <ContentBox>
          <Logo />
          <MobileBtn onClick={() => myContext.setIsOpen(true)}>
            <span className="fas fa-bars"></span>
          </MobileBtn>
          <DesktopNav />
        </ContentBox>
      </Wrapper>
    </BackgroundWrapper>
  );
};

export default Header;
