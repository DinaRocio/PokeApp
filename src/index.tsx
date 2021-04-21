/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Global, css } from "@emotion/react";
import App from './App';
import { colors } from "./ui";

const fontFamily = "Inter, sans-serif";


const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${fontFamily};
    color: ${colors.black};
  }
  a {
    text-decoration: none;
    color: inherit; 
  }
  ul{
    list-style: none;
  }

`;

ReactDOM.render(
  
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

