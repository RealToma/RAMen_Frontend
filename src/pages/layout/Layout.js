import { Box, Slide } from "@mui/material";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { MdOutlineMenu } from "react-icons/md";
import { useRef, useState } from "react";
import imgLogo01 from "../../assets/images/icon/logo01.png";
import { useNavigate } from "react-router-dom";
import { useOutsideDetector } from "../../hooks/useOutsideDetector";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const [flagMobile, setFlagMobileClicked] = useState(false);

  const refMoibleMenu = useRef(false);
  useOutsideDetector([refMoibleMenu], () => setFlagMobileClicked(false));

  return (
    <StyledComponent>
      <Sidebar />
      <SectionContent>{children}</SectionContent>
      <ButtonMobileMenu
        onClick={() => {
          setFlagMobileClicked(true);
        }}
      >
        <MdOutlineMenu />
      </ButtonMobileMenu>

      {flagMobile ? (
        <SectionBlur>
          <Slide in={flagMobile} direction={"right"}>
            <MobileMenu ref={refMoibleMenu}>
              <SectionLogo
                onClick={() => {
                  navigate("/");
                }}
              >
                <ImgLogo>
                  <img src={imgLogo01} width={"100%"} alt="imgLogo" />
                </ImgLogo>
                <TextLogo>[ RAMen ]</TextLogo>
              </SectionLogo>
              <SectionLink></SectionLink>
            </MobileMenu>
          </Slide>
        </SectionBlur>
      ) : (
        <></>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 1439px) {
    height: 100%;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 60px;
  box-sizing: border-box;
  margin-left: 200px;

  @media (max-width: 900px) {
    margin-left: 0px;
    padding: 50px;
  }
  @media (max-width: 500px) {
    margin-left: 0px;
    padding: 30px;
  }
`;

const ButtonMobileMenu = styled(Box)`
  display: none;
  position: absolute;
  top: 20px;
  right: 20px;
  color: black;
  font-size: 30px;

  cursor: pointer;
  user-select: none;
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 500px) {
    top: 10px;
    right: 10px;
    font-size: 26px;
  }
`;

const MobileMenu = styled(Box)`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 200px;
  min-width: 200px;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: #ffefaa;
  padding: 30px 15px;
  box-sizing: border-box;

  @media (max-width: 430px) {
    padding: 20px 15px;
  }

  z-index: 100;
`;

const SectionLogo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

const SectionLink = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ImgLogo = styled(Box)`
  display: flex;
  width: 150px;
`;

const TextLogo = styled(Box)`
  color: #000;

  text-align: center;
  font-family: Inconsolata;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SectionBlur = styled(Box)`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  filter: blur(20);
  transition: 0.3s;
  z-index: 100;
`;

export default Layout;
