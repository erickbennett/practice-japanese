import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled.section`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const AnimatedImg = styled(animated.img)`
  height: 195px;
  width: 935px;
  margin-bottom: 120px;
`;

const AnimatedImage = ({ src }) => {
  const imgAnimation = useSpring({
    from: { transform: 'translate(-1005px, 0px)' },
    transform: 'translate(0px, 0px)',
    config: { mass: 1, tension: 140, friction: 15 },
  });

  return (
    <Container>
      <AnimatedImg style={imgAnimation} src={src} alt="your image animated" />
    </Container>
  );
};

export default AnimatedImage;
