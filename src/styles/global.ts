import { createGlobalStyle } from 'styled-components';
import { typography } from './typography';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  html,
  body,
  #root {
    min-width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.backgroundPrimary};
    color: ${(props) => props.theme.colors.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling: touch;
  }

  body,
  input,
  button {
    font: 1.6rem ${typography.type.text};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${typography.weight.bold};
    font-family: ${typography.type.title};
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${typography.size.l3}px;
  }

  h2 {
    font-size: ${typography.size.l2}px;
  }

  h3 {
    font-size: ${typography.size.l1}px;
  }

  h3 {
    font-size: ${typography.size.m2}px;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
