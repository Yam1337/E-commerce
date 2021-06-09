import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, "sans-serif";
}


.app-container {
  position: relative;
  min-height: calc(100vh - 15rem);
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.body.background};
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.navbar.secondaryColor};
}

.activeLink {
    color: ${({ theme }) => theme.navbar.primaryColor};
    font-weight: ${({ theme }) =>
      theme.lightMode ? theme.fontWeights.bold : theme.fontWeights.normal};

    .activeLinkIcon {
      background-position-y: ${({ theme }) =>
        theme.lightMode ? 'top' : 'bottom'};
    }
  }

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

@media (min-width: 768px) {
  .app-container {
    min-height: calc(100vh - 10rem);
  }
}

`;

export default GlobalStyle;
