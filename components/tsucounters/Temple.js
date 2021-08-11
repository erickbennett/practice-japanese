import styled, { css } from 'styled-components';

const Layout = styled.div`
  height: 506px;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url('/temple.svg');
  background-repeat: no-repeat;
  background-size: contain;
`;

const Shoji = styled.div`
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

const RightShoji = styled(LeftShoji)`
  ${props =>
    props.exit &&
    css`
      transition-duration: 0.75s;
      transform: translateX(200px) scaleX(0);
    `};
`;

function Temple({ exit, children }) {
  return (
    <Layout>
      <Shoji>
        <LeftShoji exit={exit} />
        <RightShoji exit={exit} />
      </Shoji>
      {children}
    </Layout>
  );
}

export default Temple;
