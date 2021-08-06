import Link from 'next/link';
import AppHead from '../components/common/AppHead';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin-top: 3rem;

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    border: 1px solid tomato;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
`;

const Card = styled.a`
  background: #fafafa;
  border-radius: 5px;
  font-size: 2em;
  margin: 30px;
  padding: 30px;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  width: 300px;

  :hover {
    transition: color 0.15s ease, border-color 0.15s ease;
  }
`;

export default function Home() {
  return (
    <Container>
      <AppHead />
      <Main>
        <Title>Welcome to Practice Japanese!</Title>

        <Grid>
          <Link href="/tsu-counters" passHref>
            <Card>
              <h2>Tsu Counters</h2>
              <p>Practice your generic object counter skills.</p>
            </Card>
          </Link>
        </Grid>
      </Main>
    </Container>
  );
}

/*
<Footer>
  <Link href="/about">
    <Card>
      <p>About</p>
    </Card>
  </Link>
</Footer>
*/
