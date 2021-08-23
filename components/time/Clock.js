import React, { useState } from 'react';
import { createRandomInteger } from '../../utils/random';
import ClockButtons from './ClockButtons';
import ClockFace from './ClockFace';
import styled from 'styled-components';

const ClockLayout = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  grid-gap: 0px;
`;

function Clock({ timeOfDayHandler }) {
  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('0');
  const [militaryTime, setMilitaryTime] = useState(false);

  const setTime = () => {
    const h = createRandomInteger(1, 24);
    const m = createRandomInteger(1, 60);
    setHour(h);
    timeOfDayHandler(h);
    setMinute(m);
  };

  return (
    <ClockLayout>
      <ClockButtons
        setTime={setTime}
        militaryTime={militaryTime}
        setMilitaryTime={setMilitaryTime}
      />
      <ClockFace
        hour={hour}
        minute={minute}
        setTime={setTime}
        militaryTime={militaryTime}
      />
    </ClockLayout>
  );
}

export default Clock;
