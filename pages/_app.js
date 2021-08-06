import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, globals } from '../styles/defaults';
import getConfig from 'next/config';

const GlobalStyle = createGlobalStyle`${globals}`;

const PracticeJapanese = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);
export default PracticeJapanese;
