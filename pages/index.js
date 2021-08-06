import Link from 'next/link';
import Image from 'next/image';
import AppHead from '../components/common/AppHead';
import {
  MurderedoutBlack,
  SubtleGrey,
  DarkGrey,
  Simple,
} from '../components/common/Backgrounds';
import styled from 'styled-components';

const Container = styled(SubtleGrey)`
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

  border-top: 1px solid rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
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
  box-shadow: 4px 2px rgba(0, 0, 0, 0.6);
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
  border: 10px solid #fff;
  box-shadow: 4px 2px rgba(0, 0, 0, 0.6);
`;

export default function Home() {
  return (
    <Container>
      <AppHead />
      <Title>Welcome to Practice Japanese!</Title>
      <Main>
        <ImgBox>
          <Image src="/tokyo1.jpeg" height={500} width={400} />
        </ImgBox>
        <ImgBox>
          <Image src="/tokyo2.jpeg" height={500} width={400} />
        </ImgBox>
        <ImgBox>
          <Image src="/tokyo3.jpeg" height={500} width={400} />
        </ImgBox>
      </Main>

      <Footer>
        <Link href="/tsu-counters" passHref>
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
      </Footer>
    </Container>
  );
}
