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

  label {
    font-size: 12px;
    margin-bottom: 5px;
  }

  button {
    font-weight: bold;
    font-size: 16px;
    border: none;
    padding: 5px 10px;   
    background: #003399;
    color: white;
    cursor: pointer;
  }

  input, select, textarea {
    padding: 2px 5px;
    margin-bottom: 10px;
  }
`;
/* eslint-disable */
