import styled from 'styled-components';

export const MainLayoutStyle = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100dvh;
  overflow: auto;

  &.screen-message {
    padding: 4em;
    text-align: center;
    display: grid;
    place-content: center;
    grid-auto-flow: row;
    grid-template-columns: unset;
    color: ${props => props.theme.colors.primaryContrast};
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 800%;
    animation: gradient 10s linear infinite alternate;

    .screen-message-content {
      display: grid;
      max-width: 65ch;
      justify-items: center;
      gap: 1em;
      text-wrap: balance;
    }

    .main-layout-logo {
      width: 10em;
      height: 10em;
      border-radius: 50%;
      padding: 2em;
      background: ${props => props.theme.colors.primary};

      img {
        width: 100%;
      }
    }
  }

  .main-layout-content {
    height: 100%;
    overflow: auto;
    padding: 0 2em;

    &-page {
      max-width: ${props => props.theme.constants.breakpoints.laptopL};
      margin: 0 auto;
    }
  }

  .suspense-loader {
    height: 100dvh;
  }

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`;
