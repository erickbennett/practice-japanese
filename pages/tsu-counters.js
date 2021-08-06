import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Shoji from '../components/tsucounters/shoji';
import {
  instructions,
  answer,
  start,
  clear,
  languages,
} from '../components/tsucounters/tsuCountersConstants';
import {
  convertToKana,
  createRandomInteger,
  randomItem,
} from '../components/tsucounters/tsuCountersHelper';
import styled, { css } from 'styled-components';

const CounterPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 60px 500px 60px 90px 90px;
  justify-items: center;
  align-items: center;
`;

const Title = styled.h1`
  justify-self: center;
  display: flex;
  justify-content: center;
  font-size: 3em;
  color: #5b5b5b;
`;

const Temple = styled.div`
  height: 520px;
  width: 820px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/temple.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

const ItemGrid = styled.div`
  background: radial-gradient(black 15%, transparent 16%) 0 0,
    radial-gradient(black 15%, transparent 16%) 8px 8px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 0 1px,
    radial-gradient(rgba(255, 255, 255, 0.1) 15%, transparent 20%) 8px 9px;
  background-color: #282828;
  background-size: 16px 16px;

  height: 95%;
  width: 60%;
  z-index: -1;

  padding-top: 120px;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
`;

const ActionRow = styled.div`
  height: 100%;
  width: 820px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.button`
  height: 60px;
  width: 140px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #fff;
  background-color: #cb4e4e;
  box-shadow: 4px 2px rgba(0, 0, 0, 0.6);

  text-transform: capitalize;

  :focus {
    outline: none;
  }

  :hover {
    color: #cb4e4e;
    background-color: #fff;
    border: 2px solid #cb4e4e;
  }

  :hover:disabled {
    color: #fff;
    border: none;
  }

  :disabled {
    background-color: grey;
    font-style: italic;
  }
`;

const MiniLabel = styled.span`
  font-size: 0.6em;
`;

const Home = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-radius: 5px;
  font-size: 2em;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  height: 40px;
  width: 100px;
`;

const StyledShoji = styled(Shoji)`
  position: absolute;
  height: 360px;
  width: 490px;

  transition-duration: 0.5s;
  transform: translate(0%);

  ${props =>
    props.exit &&
    css`
      animation-name: fadeInOpacity;
      animation-iteration-count: 1;
      animation-timing-function: ease-in;
      animation-duration: 0.5s;

      transition-duration: 0.75s;
      transform: scale(1, 0.5);
      transform: translateX(-2000px);
    `};

  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function TsuCountersPage() {
  const [language, setLanguage] = useState(languages.english);
  const [helpText, setHelpText] = useState(instructions[language]);
  const [items, setItems] = useState([]);

  const resetHelpText = () => setHelpText(instructions[language]);

  const startHandler = () => {
    resetHelpText();
    const itemCount = createRandomInteger(0, 10);
    const itemIcon = randomItem();

    let items = [];
    for (let i = 0; i < itemCount; i++) {
      items.push(itemIcon);
    }
    setItems(items);

    console.log(items);
  };

  const clearHandler = () => {
    resetHelpText();
    setItems([]);
  };

  const answerHandler = () => {
    const answer = `${items[0].itemText}　が　${convertToKana(
      items.length
    )}　あります `;
    setHelpText(answer);
  };

  const languageHandler = () => {
    clearHandler();

    if (language === languages.english) {
      console.log('switch to japanese');
      setLanguage(languages.japanese);
      setHelpText(instructions['japanese']);
      return;
    }

    if (language === languages.japanese) {
      console.log('switch to english');
      setLanguage(languages.english);
      setHelpText(instructions['english']);
      return;
    }
    console.log('unknown');
  };

  // TODO: fix shoji transition
  return (
    <CounterPage>
      <Title>Counting Household Items</Title>

      <Temple>
        <ItemGrid>
          {items.length === 0 && <StyledShoji exit={items.length > 0} />}
          {items?.map(item => (
            <Image
              src={item.itemIcon}
              height={75}
              width={75}
              alt={item.itemText}
            />
          ))}
        </ItemGrid>
      </Temple>

      <Title>{helpText}</Title>
      <ActionRow>
        <Button onClick={startHandler}>{start[language]}</Button>
        <Button onClick={clearHandler} disabled={items?.length === 0}>
          {clear[language]}
        </Button>
        <Button onClick={answerHandler} disabled={items?.length === 0}>
          {answer[language]}
        </Button>
        <Button onClick={languageHandler}>
          <MiniLabel>
            {language === languages.english ? 'Language' : '言語'}
          </MiniLabel>
          <Image
            src={language === languages.english ? '/us.png' : '/jp.png'}
            height={50}
            width={50}
            alt="set language preference"
          />
        </Button>
      </ActionRow>

      <Link href="/">
        <Home>Home</Home>
      </Link>
    </CounterPage>
  );
}

export default TsuCountersPage;
