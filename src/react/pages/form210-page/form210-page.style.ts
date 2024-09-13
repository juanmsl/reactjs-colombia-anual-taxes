import { SectionLayout } from '@juanmsl/ui';
import styled from 'styled-components';

export const Form210PageStyle = styled.main`
  display: grid;
  gap: 2em;
  overflow: clip;
  padding: 0 0 2em;
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
  background: ${props => props.theme.colors.background.paper};
  padding: 1em 2em;
  box-shadow: 0 0 0.8em ${props => props.theme.colors.black}33;

  .home-shared {
    border-radius: 25px;
    display: grid;
    justify-content: space-between;
    grid-auto-flow: column;
    align-items: center;
    gap: 1em;

    .shared-actions {
      display: grid;
      grid-auto-flow: column;
      gap: 1em;
      align-items: center;
    }

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
        background: ${props => props.theme.colors.secondary.main};
        color: ${props => props.theme.colors.secondary.contrast};
      }
    }
  }
`;

export const Form210PageTabsStyle = styled(SectionLayout)`
  .form-page-tabs-content {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 1px;
  }

  .form-page-tab {
    padding: 0.5em 2em;
    outline: 1px solid ${props => props.theme.colors.secondary.main};
    display: grid;
    grid-auto-flow: column;
    gap: 0.5em;
    place-items: center;
    place-content: center;
    cursor: pointer;
    transition: all 300ms ease;

    &:first-child {
      border-radius: 10em 0 0 10em;
    }

    &:last-child {
      border-radius: 0 10em 10em 0;
    }

    &:hover,
    &.active {
      background: ${props => props.theme.colors.primary.main};
      color: ${props => props.theme.colors.primary.contrast};
    }

    &:not(.active):hover {
      background: ${props => props.theme.colors.primary.light};
    }
  }
`;
