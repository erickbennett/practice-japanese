import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import AppHead from '../components/common/AppHead';
import { DarklyTransparent } from '../components/common/Backgrounds';
import { languages } from '../components/tsucounters/tsuCountersConstants';
import styled from 'styled-components';

const Container = styled(DarklyTransparent)`
  padding: 0 0.5rem;
  height: 100vh;

  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: auto;
  grid-template-rows: 80px auto 150px;
`;

const Main = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin: 0;

  border-top: 1px solid rgba(255, 255, 255, 1);
  border-bottom: 1px solid rgba(255, 255, 255, 1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 4em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.8);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.a`
  opacity: ${props => (props.inactive ? '0.3' : '1')};
  background: #fafafa;
  box-shadow: 3px 2px 1px 1px rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 9px;
  font-size: 2em;
  margin: 30px;
  padding: 30px;

  width: 200px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;
`;

const JP = styled.div`
  position: absolute;
  background-color: red;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  z-index: 0;

  & p {
    color: white;
  }
`;

const ItemText = styled.p`
  text-align: center;
  color: inherit;
  text-decoration: none;
  z-index: 2;
  font-size: 1em;
`;

const ImgBox = styled.div`
  border: 5px solid #fff;
  box-shadow: 4px 2px rgba(0, 0, 0, 0.6);
`;
//transition-duration: 0.75s;
//transform: rotate(-2deg);

const LanguageTextSml = styled.span`
  margin-top: 0.2em;
  font-size: 0.75em;
`;

function Home() {
  const router = useRouter();
  const { language: prevLanguage } = router.query;
  const [language, setLanguage] = useState(prevLanguage || languages.japanese);
  const { english, japanese } = languages;

  const languageHandler = () => {
    if (language === english) {
      setLanguage(japanese);
      return;
    }

    if (language === japanese) {
      setLanguage(english);
      return;
    }
  };

  const imgSrcA = `https://source.unsplash.com/1024x768?japan,city,wallpaper`;
  const imgSrcB = `https://source.unsplash.com/collection/4655931`;
  const imgSrcC = `https://source.unsplash.com/collection/8593901`;
  const specific = `https://source.unsplash.com/layMbSJ3YOE`;

  return (
    <Container>
      <AppHead />
      <Title>Welcome to Practice Japanese!</Title>
      <Main>
        <ImgBox>
          <Image src={specific} height={450} width={725} />
        </ImgBox>
      </Main>

      <Footer>
        <Link href={`/tsu-counters?language=${language}`} passHref>
          <Card>
            <JP />
            <ItemText>Tsu Counters</ItemText>
          </Card>
        </Link>
        <Link href="/" passHref>
          <Card inactive>
            <JP />
            <ItemText>Jikan</ItemText>
          </Card>
        </Link>

        <Card onClick={languageHandler}>
          {language === languages.english ? 'English' : '言語'}
          <LanguageTextSml>
            {language === languages.english ? '言語' : 'English'}
          </LanguageTextSml>
        </Card>
      </Footer>
    </Container>
  );
}

export default Home;
