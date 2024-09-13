import { Tabs } from '@juanmsl/ui';
import styled from 'styled-components';

export const Form210TabsStyle = styled.section`
  display: grid;
  gap: 1em;
  width: 100%;
  align-self: start;
  align-content: start;
  height: 100%;

  .fields-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    align-items: start;
    justify-content: start;
    margin-right: auto;
    grid-template-rows: auto auto;
  }
`;

export const Form210TabStyle = styled(Tabs.Tab)`
  width: 2.5em;
  height: 2.5em;
  display: grid;
  place-content: center;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.text.main};
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  cursor: pointer;

  &.is-open,
  &:hover {
    border-color: ${props => props.theme.colors.primary.main};
    background: ${props => props.theme.colors.primary.light};
    color: ${props => props.theme.colors.primary.contrast};
  }

  &.is-open {
    background: ${props => props.theme.colors.primary.main};
    border-color: ${props => props.theme.colors.secondary.main};
  }
`;

export const Form210TabsDataStyle = styled.section`
  display: grid;
  gap: 2px;
  position: relative;
  max-width: 250px;
  align-content: start;
  grid-template-rows: subgrid;
  grid-row: span 2;

  .data-label {
    align-self: end;
    text-wrap: balance;
  }

  .data-with-overlay {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 100px;
    }
  }
`;
