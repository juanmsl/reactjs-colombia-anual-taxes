import styled from 'styled-components';

export const Form210PageStyle = styled.main`
  position: relative;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-areas: 'form-shared' 'form-content';
  gap: 1em;

  .home-content-panel {
    height: 100%;
    overflow: auto;
    display: grid;
    align-content: start;
    border: 0;
    padding-bottom: 4em;
    grid-area: form-content;
  }

  .home-shared {
    background: ${props => props.theme.colors.background};
    border: 4px solid ${props => props.theme.colors.primary};
    border-radius: 25px;
    padding: 1em;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    grid-area: form-shared;

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
