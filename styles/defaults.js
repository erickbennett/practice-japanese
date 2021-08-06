export const theme = {
  black: '#393939',
  grey: '#3a3a3a',
  white: '#ffffff',

  fontRegular: 'Lato-Regular',
  fontClock: 'Orbitron-Regular',
};

export const globals = `
  @font-face {
	  font-family:"Lato-Regular";
	  src:url("/fonts/Lato-Regular.ttf")  format("truetype");
    font-display: fallback;
    font-weight: normal;
    font-style: normal;
  }

    @font-face {
	  font-family:"Orbitron-Regular";
	  src:url("/fonts/Orbitron-Regular.ttf")  format("truetype");
    font-display: fallback;
  }

  html{
    box-sizing: border-box;
    font-size: 10px;
    background-color: ${theme.white};
    -webkit-tap-highlight-color: transparent;


  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1em;
    font-family: ${theme.fontRegular};
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    background-color: transparent;
  }
`;
