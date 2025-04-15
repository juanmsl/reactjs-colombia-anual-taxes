import styled from 'styled-components';

export const MainLayoutStyle = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative;
  height: 100dvh;
  background: radial-gradient(circle at 60% 100px, ${props => props.theme.colors.primary.main}33 25vw, transparent 25vw),
    radial-gradient(circle at 10% 100%, ${props => props.theme.colors.secondary.main}33 15vw, transparent 15vw);

  .main-layout-content {
    height: 100%;
    overflow: auto;
  }

  &.screen-message {
    padding: 4em;
    text-align: center;
    display: grid;
    place-content: center;
    grid-auto-flow: row;
    grid-template-columns: unset;
    color: ${props => props.theme.colors.primary.contrast};
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 800%;
    height: 100%;
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
      background: ${props => props.theme.colors.primary.main};

      img {
        width: 100%;
      }
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
