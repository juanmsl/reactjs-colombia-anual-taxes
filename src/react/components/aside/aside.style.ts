import styled from 'styled-components';

export const AsideStyle = styled.aside`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondaryContrast};
  border: 5px solid ${props => props.theme.colors.primary};
  border-radius: 25px;
  padding: 2em 1em;
  display: grid;
  gap: 1em;
  align-content: space-between;
  grid-template-rows: auto 1fr auto;
  width: 250px;

  .aside-header {
    border-bottom: 1px solid;
    padding-bottom: 1em;
  }

  .aside-header-tab {
    padding: 0.5em 1em;
    display: grid;
    align-items: center;
    border-radius: 10px;
    transition: all 300ms ease;

    &:hover {
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.background};
    }
  }

  .aside-content {
    display: grid;
    gap: 0.5em 1em;
    align-content: start;
    grid-template-columns: auto 1fr;
  }

  .aside-footer {
    border-top: 1px solid;
    padding-top: 1em;
    display: grid;
    gap: 1em;
  }

  .aside-tab {
    padding: 0.5em 1em;
    border-radius: 100px;
    border: 3px solid transparent;
    transition:
      border 300ms ease,
      background 100ms ease;
    display: grid;
    grid-template-columns: subgrid;
    grid-column: span 2;
    align-items: center;
    background: transparent;

    &.active,
    &:hover {
      border-color: ${props => props.theme.colors.primary};
    }

    &.active {
      color: ${props => props.theme.colors.text};
      background: ${props => props.theme.colors.background};
    }
  }

  .form-link {
    justify-self: center;
    padding: 0.5em 1em;
    border: 1px solid transparent;
    border-radius: 100px;
    text-align: center;
    display: grid;
    place-content: center;
    gap: 1em;
    grid-auto-flow: column;
    align-items: center;
    transition: border 300ms ease;
    width: 100%;

    &:hover {
      border-color: currentColor;
    }
  }
`;
