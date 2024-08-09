import styled from 'styled-components';

export const AsideModalStyle = styled.section`
  position: absolute;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 2em;
  overflow: auto;

  &,
  &.left {
    height: 100%;
    top: 0;
    left: 0;
    width: 700px;
    animation: slide-left 300ms ease;
  }

  &.right {
    height: 100%;
    top: 0;
    right: 0;
    width: 700px;
  }

  &.top {
    height: 300px;
    top: 0;
    right: 0;
    width: 100%;
  }

  &.bottom {
    height: 300px;
    bottom: 0;
    right: 0;
    width: 100%;
  }

  @keyframes slide-left {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
