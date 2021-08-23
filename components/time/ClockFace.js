import styled from 'styled-components';

const Display = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 25px;
  width: 475px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 11px;
  box-shadow: 2px -2px rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Time = styled.span`
  color: #c06582;
  font-size: 60px;
  font-family: ${props => props.theme.fontClock};
  letter-spacing: 10px;
  text-shadow: 2px 2px rgba(0, 0, 0, 1);
`;

const AMPM = styled(Time)`
  font-size: 30px;
  margin: 0 0 10px 10px;
`;

function ClockFace({ hour, minute, setTime, militaryTime }) {
  const formatHour = () => {
    if (militaryTime) {
      return hour;
    }

    return hour > 12 ? hour - 12 : hour;
  };

  const formatMinute = () => (minute < 10 ? '0' + minute : minute);

  const formatAMPM = () => {
    if (militaryTime) return '';
    return hour >= 12 ? 'PM' : 'AM';
  };

  return (
    <Display>
      <Time onClick={setTime}>{`${formatHour()}:${formatMinute()}`}</Time>
      <AMPM>{formatAMPM(militaryTime)}</AMPM>
    </Display>
  );
}

export default ClockFace;
