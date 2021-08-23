import styled from 'styled-components';

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const TimeButton = styled.div`
  z-index: 2;
  height: 25px;
  width: 75px;
  background-color: #323033;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 11px 11px 0 0;
  box-shadow: 1px -2px rgba(50, 48, 51, 1);
`;

const Label = styled.span`
  color: rgba(248, 248, 255, 0.7);
  font-size: 14px;
  text-transform: uppercase;
  text-shadow: 2px 2px rgba(0, 0, 0, 1);
`;

const SmallLabel = styled(Label)`
  font-size: 10px;
`;

const AMPMButton = styled(TimeButton)``;

function ClockButtons({ setTime, militaryTime, setMilitaryTime }) {
  return (
    <ButtonRow>
      <TimeButton onClick={setTime}>
        <Label>Reset</Label>
      </TimeButton>
      <AMPMButton onClick={() => setMilitaryTime(!militaryTime)}>
        <Label>{militaryTime ? '24' : '12'}</Label>
        <SmallLabel>/{militaryTime ? '12' : '24'}</SmallLabel>
      </AMPMButton>
    </ButtonRow>
  );
}

export default ClockButtons;
