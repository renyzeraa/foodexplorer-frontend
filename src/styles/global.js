import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  /* 
  font-family: 'DM Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
  font-family: 'Roboto', sans-serif; 
  */
:root {
  --swiper-theme-color: ${({ theme }) => theme.COLORS.WHITE};
  --swiper-navigation-size: 30px;
}

  body {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
    color: ${({ theme }) => theme.COLORS.WHITE};  
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button, a {
    cursor: pointer !important;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE}; 
  }
`
