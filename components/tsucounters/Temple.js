import Image from 'next/image';
import styled, { css } from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto;
  border-bottom: 15px solid #421010;
`;

const House = styled.div`
  height: 500px;
  width: 650px;

  background-image: url('/temple.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  z-index: 1;
`;

const Shoji = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 5px;
`;

const LeftShoji = styled.div`
  background-image: url('/shoji.png');
  background-size: contain;

  z-index: 1;

  height: 300px;
  width: 30%;

  transition-duration: 0.5s;
  transform: translate(0%);

  ${props =>
    props.exit &&
    css`
      transition-duration: 0.5s;
      transform: translateX(-150px) scaleX(0);
    `};
`;

const RightShoji = styled(LeftShoji)`
  ${props =>
    props.exit &&
    css`
      transition-duration: 0.5s;
      transform: translateX(150px) scaleX(0);
    `};
`;

const Tree = styled.img`
  width: 175px;
  height: 400px;
  z-index: 0;
  align-self: flex-end;
`;

const ItemView = styled.div`
  position: absolute;
  height: 295px;
  width: 388px;
  z-index: 0;
`;

function Temple({ exit, children }) {
  return (
    <Layout>
      <Tree src="/tree.png" />
      <House>
        <Shoji>
          <LeftShoji exit={exit} />
          <ItemView>{children}</ItemView>
          <RightShoji exit={exit} />
        </Shoji>
      </House>
      <Tree src="/tree.png" />
    </Layout>
  );
}

export default Temple;
