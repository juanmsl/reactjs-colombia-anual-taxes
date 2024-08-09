import styled from 'styled-components';

export const HomeStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  grid-template-areas: 'home-content home-shared' 'home-footer home-shared';
  position: relative;
  padding: 2em;
  gap: 2em;
  height: 100dvh;
  overflow: auto;
  background-size: 40px 40px;
  background-position:
    0 0,
    20px 20px;
  animation: AnimateBG 3s linear infinite;
  background-image: radial-gradient(${props => props.theme.colors.text}55 1px, transparent 1px),
    radial-gradient(${props => props.theme.colors.text}55 1px, transparent 1px);

  @keyframes AnimateBG {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 80px 40px;
    }
  }

  .form-link {
    justify-self: center;
    padding: 0.5em 2em;
    border: 1px solid;
    border-radius: 100px;
    box-shadow: 0 0 4px;
    transition: all 300ms ease;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    text-align: center;
    display: grid;
    place-content: center;
    gap: 1em;
    grid-auto-flow: column;
    align-items: center;

    &:hover {
      box-shadow: 0 0 10px;
    }
  }

  .home-shared {
    background: ${props => props.theme.colors.background};
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 15px;
  }

  .home-content-panel {
    height: 100%;
    overflow: auto;
    display: grid;
    align-content: start;
    border: 0;
    grid-area: home-content;
  }

  .home-footer {
    grid-area: home-footer;
  }

  .home-shared {
    position: sticky;
    top: 0;
    padding: 1em;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 1em;
    grid-area: home-shared;

    .shared-data {
      display: grid;
      padding: 0.5em 1.5em;
      border-radius: 100px;
      border: 1px solid;

      &.selected {
        border-width: 2px;
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primaryContrast};
      }
    }

    .shared-content {
      display: grid;
      gap: 1em;
      align-content: start;
    }

    .shared-footer {
      margin-top: auto;
      display: grid;
      grid-auto-flow: column;
      align-items: center;
      gap: 1em;
    }
  }

  .theme-selector {
    cursor: pointer;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
  }
`;
