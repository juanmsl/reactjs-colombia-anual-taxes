import styled from 'styled-components';

export const FooterStyle = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryContrast};
  text-align: center;
  padding: 2em;
  border-radius: 100px 100px 0 0;
  margin-top: 8em;

  a {
    padding: 4px 8px;
    border: 1px solid;
    border-radius: 4px;
  }
`;
