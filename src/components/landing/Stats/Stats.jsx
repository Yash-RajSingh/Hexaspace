import {
  Button1,
  Button2,
  ButtonContainer,
  Count,
  CountLabel,
  StatsContainer,
  StatsInfoSubWrapper,
  StatsInfoWrapper,
} from "./StatsElements";

const Stats = () => {
  return (
    <>
      <StatsContainer>
        <ButtonContainer>
          <Button1>Start Selling</Button1>
          <Button2>Learn More</Button2>
        </ButtonContainer>
        <StatsInfoWrapper>
          <StatsInfoSubWrapper>
            <Count>110+</Count>
            <CountLabel>Artworks</CountLabel>
          </StatsInfoSubWrapper>
          <StatsInfoSubWrapper>
            <Count>20+</Count>
            <CountLabel>Collections</CountLabel>
          </StatsInfoSubWrapper>
          <StatsInfoSubWrapper>
            <Count>43+</Count>
            <CountLabel>Artists</CountLabel>
          </StatsInfoSubWrapper>
        </StatsInfoWrapper>
      </StatsContainer>
    </>
  );
};

export default Stats;
