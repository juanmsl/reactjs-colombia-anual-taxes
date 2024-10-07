import { SectionLayout } from '@juanmsl/ui';
import styled from 'styled-components';

export const FormToolbarStyle = styled(SectionLayout)`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};
  padding: 1em 2em;
  box-shadow: 0 0 0.8em ${props => props.theme.colors.black}33;

  .form-toolbar-content {
    border-radius: 25px;
    display: grid;
    justify-content: space-between;
    grid-auto-flow: column;
    align-items: center;
    gap: 1em;
  }

  .form-toolbar-actions {
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
    gap: 2px;
  }
`;

export const FormToolbarTabsStyle = styled(SectionLayout)`
  .form-toolbar-tabs-content {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 1px;
  }

  .form-toolbar-tab {
    padding: 0.5em 2em;
    outline: 1px solid ${props => props.theme.colors.text.main};
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
