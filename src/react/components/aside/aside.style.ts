import styled from 'styled-components';

export const AsideStyle = styled.aside`
  background: ${props => props.theme.colors.background};
  border-right: 2px solid ${props => props.theme.colors.primary};
  padding: 1em;
  display: grid;
  gap: 1em;
  align-content: space-between;
  width: 250px;

  .aside-content {
    display: grid;
    gap: 1em;
    align-content: start;
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

    &:hover {
      border-color: currentColor;
    }

    &.active {
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;
