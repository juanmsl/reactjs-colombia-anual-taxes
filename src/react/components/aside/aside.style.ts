import styled from 'styled-components';

export const AsideStyle = styled.aside`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  border-right: 5px solid ${props => props.theme.colors.tertiary};
  padding: 1em;
  display: grid;
  gap: 1em;
  align-content: space-between;
  width: 250px;

  .aside-content {
    display: grid;
    gap: 1em;
    align-content: start;
    grid-template-columns: auto 1fr;
  }

  .aside-footer {
    border-top: 1px solid;
    padding-top: 1em;
  }

  .aside-tab {
    padding: 0.5em 1em;
    border-radius: 100px;
    border: 1px solid transparent;
    transition: border 300ms ease;
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 2;
    align-items: center;

    &.active,
    &:hover {
      border-color: currentColor;
    }
  }
`;
