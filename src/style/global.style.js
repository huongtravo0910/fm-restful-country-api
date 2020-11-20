import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html{
    font-size: 62.5%;
    box-sizing: border-box;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1.6rem;  //font-md
    font-weight: 300;
    line-height: 1.5;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;

    @include breakpoint-up(medium){
        font-size: 1.6rem;
        }
}
//Spacing
.container {
  max-width: 1440px;
  margin: 0 auto;
}

.noFilter {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s linear 300ms, opacity 200ms;
  }
  
  .filter {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 200ms;
  }  

`;
