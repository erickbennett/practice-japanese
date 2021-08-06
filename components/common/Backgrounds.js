import styled from 'styled-components';

const MurderedoutBlack = styled.div`
  background: -webkit-linear-gradient(360deg, #030303 10%, #1f1f1f 360%);
  background: linear-gradient(360deg, #030303 10%, #1f1f1f 360%);
`;

const SubtleGrey = styled.div`
  background: -webkit-linear-gradient(
    360deg,
    #dee1e1 10%,
    #f4f4f4 360%
  ); /* Chrome 10+, Saf5.1+ */
  background: -moz-linear-gradient(
    360deg,
    #dee1e1 10%,
    #f4f4f4 360%
  ); /* FF3.6+ */
  background: linear-gradient(360deg, #dee1e1 10%, #f4f4f4 360%);
`;

const DarkGrey = styled.div`
  background: -webkit-linear-gradient(360deg, #383836 10%, #4a4a4a 360%);
  background: linear-gradient(360deg, #383836 10%, #4a4a4a 360%);
`;

const Simple = styled.div`
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

export { MurderedoutBlack, SubtleGrey, DarkGrey, Simple };
