import { SectionLayout } from '@juanmsl/ui';
import styled from 'styled-components';

export const FooterStyle = styled(SectionLayout)`
  background: ${props => props.theme.colors.background.paper};
  color: ${props => props.theme.colors.text.main};

  .footer-content {
    text-align: center;
    padding: 1em;
  }

  a {
    padding: 0.5em 0.5em 0 0.5em;
    display: inline-block;
    transition: all 300ms ease;
    border-bottom: 1px solid;
  }
`;
