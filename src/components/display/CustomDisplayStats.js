import { Box } from "@mui/material";
import styled from "styled-components";

const CustomDisplayStats = ({ textValue, textInfo }) => {
  return (
    <StyledComponent>
      <TextValue>{textValue}</TextValue>
      <TextValue>{textInfo}</TextValue>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 36px;
  border: 2px solid #000;
  background: rgba(255, 255, 255, 0.5);

  backdrop-filter: blur(2px);
  padding: 0px 18px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 6px black;
  }

  @media (max-width: 900px) {
    margin-top: 8px;
    padding: 0px 15px;
    height: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 6px;
    padding: 0px 10px;
    height: 28px;
  }
`;

const TextValue = styled(Box)`
  display: flex;
  color: #454545;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: K2D;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 18px;
    font-weight: 500;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 500px) {
    font-size: 16px;
    font-weight: 500;
    /* text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
  }
`;

export default CustomDisplayStats;
