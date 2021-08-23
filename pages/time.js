import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Clock from '../components/time/Clock';
import HomeLink from '../components/common/HomeLink';

const PageLayout = styled.div`
  background: ${props => props.theme[props.sky]};
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 20px 350px;
  grid-gap: 10px;
  grid-template-columns: auto;
  justify-items: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  margin: 20px 0 0 40px;
  display: grid;
  grid-template-columns: auto 90%;
  justify-items: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4em;
  text-indent: -100px;
`;

const Label = styled.span`
  font-size: 2em;
`;

function TimePage() {
  const router = useRouter();
  const { language } = router.query;

  const [sky, setSky] = useState('morning');

  const timeOfDayHandler = h => {
    if (h <= 11) {
      setSky('morning');
    } else if (h > 11 && h < 16) {
      setSky('midday');
    } else {
      setSky('evening');
    }
  };

  const TIME_PAGE_TITLE =
    language === 'japanese' ? 'いま　なんじ　ですか' : 'What time is it';

  return (
    <PageLayout sky={sky}>
      <Header>
        <HomeLink language={language} />
        <Title>{TIME_PAGE_TITLE}?</Title>
      </Header>

      <Label>page in progress... in the meantime click for random times</Label>

      <Clock timeOfDayHandler={timeOfDayHandler} />
    </PageLayout>
  );
}

export default TimePage;
