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

export const sky = styled.div`
  background: linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%);
`;

export const sunset = styled.div`
  background: linear-gradient(
    to bottom,
    #163c52 0%,
    #4f4f47 30%,
    #c5752d 60%,
    #b7490f 80%,
    #2f1107 100%
  );
`;

export const midday = styled.div`
  background: linear-gradient(to bottom, #1e528e 0%, #265889 50%, #9da671 100%);
`;

export const bluesky = styled.div`
  background: linear-gradient(to bottom, #2473ab 0%, #1e528e 70%, #5b7983 100%);
`;

export const pinksunrise = styled.div`
  background: linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%);
`;

export const lightbluesky = styled.div`
  background: linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%);
`;

export const blueskies = styled.div`
  background: linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%);
`;
