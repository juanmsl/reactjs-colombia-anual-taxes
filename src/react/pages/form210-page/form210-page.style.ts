import styled from 'styled-components';

export const Form210PageStyle = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr;
  grid-template-areas: 'home-content home-shared';
  position: relative;
  height: 100%;
  overflow: auto;

  .form-link {
    justify-self: center;
    padding: 0.5em 2em;
    border: 1px solid;
    border-radius: 100px;
    box-shadow: 0 0 4px;
    transition: box-shadow 300ms ease;
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

  .home-content-panel {
    height: 100%;
    overflow: auto;
    display: grid;
    align-content: start;
    border: 0;
    grid-area: home-content;
    padding-bottom: 4em;
  }

  .home-footer {
    grid-area: home-footer;
    padding: 2em 0;
  }

  .home-shared {
    background: ${props => props.theme.colors.background};
    border: 4px solid ${props => props.theme.colors.tertiary};
    border-radius: 25px;
    position: sticky;
    top: 0;
    padding: 1em;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 1em;
    grid-area: home-shared;
    margin: 1em;

    .shared-data {
      display: grid;
      padding: 0.5em 1.5em;
      border-radius: 20px;
      border: 1px solid;
      gap: 4px;

      &.selected {
        border-width: 0;
        background: ${props => props.theme.colors.tertiary};
        color: ${props => props.theme.colors.tertiaryContrast};
      }
    }

    .shared-content {
      display: grid;
      gap: 1em;
      align-content: start;
    }
  }
`;
