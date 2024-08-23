import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryContrast};
  margin-top: 8em;

  .footer-content {
    text-align: center;
    padding: 2em;
  }

  a {
    padding: 0.5em 1em 0.5em 0.5em;
    display: inline-block;
    transition: all 300ms ease;
    border-radius: 5px;
    filter: drop-shadow(0 0 2px ${props => props.theme.colors.secondary});
    text-shadow:
      1px 1px 1px ${props => props.theme.colors.secondary},
      2px 2px 1px ${props => props.theme.colors.secondary},
      3px 3px 1px ${props => props.theme.colors.secondary};
  }
`;
