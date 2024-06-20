import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogo01 from "../../assets/images/icon/logo01.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <StyledComponent>
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
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 200px;
  min-width: 200px;
  height: 100vh;
  flex-direction: column;
  /* position: fixed; */
  background-color: #ffefaa;
  padding: 30px 15px;
  box-sizing: border-box;
  position: fixed;

  z-index: 100;
  @media (max-width: 900px) {
    display: none;
  }
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

export default Sidebar;
