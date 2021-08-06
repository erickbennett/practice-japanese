import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import AnimatedImage from '../components/tsucounters/AnimatedImage';

const CounterPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 60px auto 60px 90px 90px;
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
const HelpText = styled.h1`
  justify-self: center;
  display: flex;
  justify-content: center;
  font-size: 2.5em;
  color: #5b5b5b;
`;

const Temple = styled.div`
  height: 506px;
  width: 800px;
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

  align-self: flex-end;
  padding: 20px;
  height: 75%;
  width: 60%;
  z-index: -2;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto auto;
`;

const ActionRow = styled.div`
  width: 800px;
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
const Shoji = styled.div`
  height: 373px;
  width: calc(196px * 2.75);

  position: absolute;
  align-self: flex-end;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftShoji = styled.div`
  flex: 1;
  background-image: url('/shoji.png');
  background-repeat: repeat-x;
  height: 373px;
  width: 196px;

  z-index: -1;

  transition-duration: 0.5s;
  transform: translate(0%);

  ${props =>
    props.exit &&
    css`
      transition-duration: 0.75s;
      transform: translateX(-200px) scaleX(0);
    `};
`;

//transform: rotateY(180deg);
const RightShoji = styled(LeftShoji)`
  ${props =>
    props.exit &&
    css`
      transition-duration: 0.75s;
      transform: translateX(200px) scaleX(0);
    `};
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
      setLanguage(languages.japanese);
      setHelpText(instructions['japanese']);
      return;
    }

    if (language === languages.japanese) {
      setLanguage(languages.english);
      setHelpText(instructions['english']);
      return;
    }
  };
  //{items.length === 0 && <StyledShoji exit={items.length > 0} />}
  return (
    <CounterPage>
      <Title>Counting Household Items</Title>

      <Temple>
        <Shoji>
          <LeftShoji exit={items.length > 0} />
          <RightShoji exit={items.length > 0} />
        </Shoji>
        <ItemGrid>
          {items?.map((item, i) => (
            <Image
              key={i}
              src={item.itemIcon}
              height={75}
              width={75}
              alt={item.itemText}
            />
          ))}
        </ItemGrid>
      </Temple>

      <HelpText>{helpText}</HelpText>
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

      <Link href="/" passHref>
        <Home>Home</Home>
      </Link>
    </CounterPage>
  );
}

export default TsuCountersPage;
