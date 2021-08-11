import styled from 'styled-components';

export const BrilliantDark = styled.div`
  background: repeating-linear-gradient(
    45deg,
    black,
    black 10px,
    #444 10px,
    #444 11px
  );
`;

export const DarklyTransparent = styled.div`
  background: repeating-linear-gradient(
    #444,
    transparent,
    #444,
    transparent,
    #444
  );
`;

export const Simple = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(35%, rgba(255, 255, 255, 1)),
    color-stop(35%, rgba(0, 0, 0, 1)),
    color-stop(100%, rgba(0, 0, 0, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 35%,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
`;
