import styled from 'styled-components';

const CounterButton = styled.button`
  height: 60px;
  width: 140px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #fff;
  background-color: #cb4e4e;
  box-shadow: 4px 2px rgba(0, 0, 0, 0.6);

  text-transform: capitalize;

  :focus {
    outline: none;
  }

  :hover {
    color: #cb4e4e;
    background-color: #fff;
    border: 2px solid #cb4e4e;
  }

  :hover:disabled {
    color: #fff;
    border: none;
  }

  :disabled {
    background-color: grey;
    font-style: italic;
  }
`;

export default CounterButton;
