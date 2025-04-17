import { SectionLayout } from 'polpo/ui';
import styled from 'styled-components';

export const FormToolbarStyle = styled(SectionLayout)`
  position: absolute;
  top: 2em;
  left: 0;
  padding: 1em;
  border-radius: 10em;
  background: ${props => props.theme.colors.background.paper}44;
  backdrop-filter: blur(1em);
  border: 1px solid ${props => props.theme.colors.gray6}44;
  align-self: start;
  box-shadow: 0 0 1em -0.3em ${props => props.theme.colors.gray2}88;

  .form-toolbar-content {
    border-radius: 25px;
    display: grid;
    align-content: start;
    grid-auto-flow: row;
    justify-items: center;
    gap: 2em;
  }

  .toolbar-label {
    transform: rotate(180deg);
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  .form-toolbar-actions {
    display: grid;
    grid-auto-flow: row;
    gap: 1em;
    justify-items: center;
  }

  .form-toolbar-navlink {
    &.active {
      button:not(:hover) {
        background: ${props => props.theme.colors.primary.main};
        color: ${props => props.theme.colors.primary.contrast};
      }

      button:hover {
        background: ${props => props.theme.colors.primary.main}AA;
        color: ${props => props.theme.colors.primary.contrast};
      }
    }

    &:not(.active) {
      button:hover {
        background: ${props => props.theme.colors.primary.main}CC;
        color: ${props => props.theme.colors.primary.contrast};
      }
    }
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
