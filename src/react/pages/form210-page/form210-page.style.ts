import styled from 'styled-components';

export const Form210PageStyle = styled.main`
  display: grid;
  gap: 2em;
  overflow: clip;
  padding: 2em 0;

  .home-content-panel {
    display: grid;
    justify-items: center;
    height: 100%;
    overflow: auto;
  }

  .home-shared {
    background: ${props => props.theme.colors.background};
    border: 4px solid ${props => props.theme.colors.primary};
    border-radius: 25px;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    position: sticky;
    top: 0;
    z-index: 1;

    .shared-data {
      display: grid;
      padding: 0.5em 1.5em;
      border-radius: 20px;
      border: 1px solid;
      align-items: center;
      align-content: center;
      gap: 4px;

      &.selected {
        border-width: 0;
        background: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.secondaryContrast};
      }
    }
  }
`;
