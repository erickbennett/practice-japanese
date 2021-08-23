import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  instructions,
  startLabel,
  clearLabel,
  answerLabel,
} from '../components/tsucounters/tsuCountersConstants';
import { createRandomInteger } from '../utils/random';
import {
  convertToKana,
  randomItem,
} from '../components/tsucounters/tsuCountersHelper';
import Temple from '../components/tsucounters/Temple';
import Items from '../components/tsucounters/Items';
import CounterButton from '../components/tsucounters/CounterButton';
import HomeLink from '../components/common/HomeLink';
import { sky } from '../components/common/Backgrounds';
import styled from 'styled-components';

const CounterPage = styled(sky)`
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 60px 550px 90px 90px;
  grid-gap: 0;
  justify-items: center;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  margin: 20px 0 0 40px;
`;

const HelpText = styled.h1`
  justify-self: center;
  display: flex;
  justify-content: center;
  font-size: 2.5em;
  color: #fff;
  margin-bottom: -100px;
`;

const ActionRow = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function TsuCountersPage() {
  const [answer, setAnswer] = useState(null);
  const [items, setItems] = useState([]);

  const router = useRouter();
  const { language } = router.query;

  const reset = () => {
    setAnswer(null);
    setItems([]);
  };

  const startHandler = () => {
    setAnswer(null);
    const itemCount = createRandomInteger(0, 10);
    const itemIcon = randomItem();

    let items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push(itemIcon);
    }
    setItems(items);
  };

  const answerHandler = () => {
    const answer = `${items[0].itemText}　が　${convertToKana(
      items.length
    )}　あります。`;
    setAnswer(answer);
  };

  return (
    <CounterPage>
      <Header>
        <HomeLink language={language} />
      </Header>

      <HelpText>{answer ? answer : instructions[language]}</HelpText>
      <Temple exit={items.length > 0}>
        <Items items={items} />
      </Temple>

      <ActionRow>
        <CounterButton onClick={startHandler}>
          {startLabel[language]}
        </CounterButton>
        <CounterButton onClick={reset} disabled={items?.length === 0}>
          {clearLabel[language]}
        </CounterButton>
        <CounterButton onClick={answerHandler} disabled={items?.length === 0}>
          {answerLabel[language]}
        </CounterButton>
      </ActionRow>
    </CounterPage>
  );
}

export default TsuCountersPage;
