import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 2em;
  color: #fff;
  text-decoration: none;
`;

const HomeLink = ({ language }) => (
  <Link href={`/?language=${language}`} passHref>
    <StyledLink>﹤ Home</StyledLink>
  </Link>
);

export default HomeLink;
