export const theme = {
  black: '#393939',
  grey: '#3a3a3a',
  white: '#ffffff',

  fontRegular: 'Lato-Regular',
  fontClock: 'Orbitron-Regular',

  morning: `linear-gradient(to bottom, #82addb 0%, #ebb2b1 100%)`,
  midday: `linear-gradient(to bottom, #90dffe 0%, #38a3d1 100%)`,
  evening: `linear-gradient(to bottom, #2d91c2 0%, #1e528e 100%)`,
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

  h1::selection {
    color: none;
    background: none;
  }

  h1::-moz-selection {
    color: none;
    background: none;
  }
  span::selection {
    color: none;
    background: none;
  }

  span::-moz-selection {
    color: none;
    background: none;
  }

   img::selection {
    color: none;
    background: none;
  }

  img::-moz-selection {
    color: none;
    background: none;
  }

  a {
    text-decoration: none;
  }

  button {
    outline: none;
    background-color: transparent;
  }
`;
