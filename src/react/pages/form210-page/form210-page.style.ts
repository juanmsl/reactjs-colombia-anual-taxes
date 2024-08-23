import styled from 'styled-components';

import { SectionLayout } from '@layouts/section-layout';

export const Form210PageStyle = styled.main`
  display: grid;
  gap: 2em;
  overflow: clip;
  padding: 2em 0;
  position: relative;

  .home-content-panel {
    display: grid;
    justify-items: center;
    height: 100%;
    overflow: auto;
  }
`;

export const Form210ToolBarStyle = styled(SectionLayout)`
  position: sticky;
  top: 0;
  z-index: 1;
  background: ${props => props.theme.colors.background};

  .home-shared {
    border: 4px solid ${props => props.theme.colors.primary};
    border-radius: 25px;
    padding: 1em;
    display: grid;
    justify-content: space-between;
    grid-auto-flow: column;
    gap: 1em;

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
