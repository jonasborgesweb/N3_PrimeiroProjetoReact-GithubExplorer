import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-color: #f0f0f5;
    background-image: url(${githubBackground});
    background-repeat: no-repeat;
    background-position: 70% top;
  }

  body,button,input{
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button{
    cursor: pointer;
  }

  #root{
    max-width:1080px;
    margin: 0 auto;
    width: 96%;
  }
`;
