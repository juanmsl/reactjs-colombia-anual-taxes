import { Tabs } from '@juanmsl/ui';
import styled from 'styled-components';

export const HomeTabStyle = styled(Tabs.Tab)`
  padding: 0.5em 2em;
  border: 1px dashed;
  transition: all 300ms ease;
  border-radius: 100px;
  cursor: pointer;

  &.is-open,
  &:hover {
    border-style: solid;
  }

  &.is-open {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.primary.contrast};
  }
`;
