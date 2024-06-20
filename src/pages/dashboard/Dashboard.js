import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogo01 from "../../assets/images/icon/logo01.png";
import CustomDisplayStats from "../../components/display/CustomDisplayStats";

const Dashboard = () => {
  return (
    <StyledComponent>
      <SectionLogo>
        <ImgLogo>
          <img src={imgLogo01} width={"100%"} alt="imgLogo" />
        </ImgLogo>
        <TextLogo>[ RAMen ]</TextLogo>
        <TextPageLink>[ Dashboard ]</TextPageLink>
      </SectionLogo>
      <SectionContent>
        <SectionEachStats>
          <TextHeadStats>$RAM Statistics</TextHeadStats>
          <CustomDisplayStats textValue={"$1,254,00"} textInfo={"MC"} />
          <CustomDisplayStats textValue={"$286,000"} textInfo={"VLM"} />
          <CustomDisplayStats textValue={"$80,000"} textInfo={"LIQ"} />
          <CustomDisplayStats textValue={"356"} textInfo={"HLDR"} />
        </SectionEachStats>
        <SectionEachStats>
          <TextHeadStats>Current Ethereum Rewards</TextHeadStats>
          <CustomDisplayStats textValue={"0.174128471514"} textInfo={"$ETH"} />
          <SectionProperty>
            <EachProperty>Claim</EachProperty>
            <EachProperty>Claim & Compound</EachProperty>
          </SectionProperty>
          <TextHeadStats>$RAM Owned</TextHeadStats>
          <CustomDisplayStats
            textValue={"9,987,000.000..."}
            textInfo={"$RAM"}
          />
        </SectionEachStats>
        <SectionEachStats>
          <TextHeadStats>Total Ethereum Rewards</TextHeadStats>
          <CustomDisplayStats textValue={"0.853295258821"} textInfo={"$ETH"} />
          <SectionSpace01></SectionSpace01>
          <TextHeadStats>$RAM Worth</TextHeadStats>
          <CustomDisplayStats textValue={"1.153295258821"} textInfo={"$ETH"} />
        </SectionEachStats>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionLogo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgLogo = styled(Box)`
  display: flex;
  width: 500px;

  @media (max-width: 900px) {
    width: 300px;
  }
  @media (max-width: 500px) {
    width: 250px;
  }
`;

const TextLogo = styled(Box)`
  color: #000;

  text-align: center;
  font-family: Inconsolata;
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 60px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

const TextPageLink = styled(Box)`
  color: #000;

  text-align: center;
  font-family: Inconsolata;
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 26px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const SectionContent = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5fr 2fr 2fr;
  grid-column-gap: 60px;
  margin-top: 50px;

  @media (max-width: 1439px) {
    grid-template-columns: 1fr;
    grid-row-gap: 50px;
    margin-top: 70px;
  }

  @media (max-width: 900px) {
    grid-row-gap: 40px;
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    grid-row-gap: 30px;
  }
`;

const SectionEachStats = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextHeadStats = styled(Box)`
  color: #010101;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inconsolata;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 900px) {
    font-size: 26px;
    font-weight: 500;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 500px) {
    font-size: 22px;
    font-weight: 500;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

const SectionProperty = styled(Box)`
  display: flex;
  margin-top: 10px;
  margin-bottom: 25px;
`;

const EachProperty = styled(Box)`
  display: flex;
  padding: 0px 12px;
  box-sizing: border-box;
  height: 25px;
  background-color: #0f0f0f;
  justify-content: center;
  align-items: center;
  color: #fff;

  font-family: K2D;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 8px;

  @media (max-width: 500px) {
    font-size: 13px;
    padding: 0px 8px;
  }
`;

const SectionSpace01 = styled(Box)`
  display: flex;
  height: 60px;
`;

export default Dashboard;
