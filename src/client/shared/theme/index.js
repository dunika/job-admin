import { injectGlobal } from 'styled-components';

/* eslint-disable */
const global = injectGlobal`
  html, body, #root {
    font-family: 'Open Sans';
    padding: 0;
    margin: 0;
    height: 100%;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    & > div {
      flex-grow: 1;
    }
  }

  pre {
    font-family: 'Open Sans';     
  }

  p {
    margin: 0px;
  }
`;
/* eslint-disable */
