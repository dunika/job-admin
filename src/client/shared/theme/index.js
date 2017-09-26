import { injectGlobal } from 'styled-components';

/* eslint-disable */
const global = injectGlobal`
  html, body, #root {
    height: 100%;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    & > div {
      flex-grow: 1;
    }
  }
`;
/* eslint-disable */
