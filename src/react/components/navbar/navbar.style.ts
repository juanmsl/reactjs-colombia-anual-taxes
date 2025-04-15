import { SectionLayout } from 'polpo/ui';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarStyle = styled(SectionLayout)`
  background: ${props => props.theme.colors.background.paper}44;
  backdrop-filter: blur(1em);
  box-shadow: 0 -8px 1em 4px ${props => props.theme.colors.gray2}88;

  .navbar-content {
    padding: 1em 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 4em;
  }

  .navbar-logo {
    display: flex;
    gap: 0.5em;
    align-items: center;

    img {
      width: 48px;
    }
  }

  .navbar-links {
    display: grid;
    grid-auto-flow: column;
    gap: 2em;
    align-items: center;
    justify-content: start;
  }

  .navbar-actions {
    display: flex;
    gap: 1em;
    align-items: center;
  }

  .navbar-icon {
    cursor: pointer;
    padding: 0.5em;
    border-radius: 50%;
    box-sizing: content-box;
    transition: all 300ms ease;

    &:hover,
    &.is-active {
      background: ${props => props.theme.colors.primary.main};
      color: ${props => props.theme.colors.primary.contrast};
    }
  }
`;

export const NavLinkStyle = styled(NavLink)`
  display: block;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -0.5em;
    left: 50%;
    width: 0;
    height: 1px;
    background: ${props => props.theme.colors.text.main};
    transition: all 200ms ease;
  }

  &:hover,
  &.active {
    &::before {
      width: 100%;
      left: 0;
    }
  }
`;
