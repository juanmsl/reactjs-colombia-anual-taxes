import styled from 'styled-components';

import { SectionLayout } from '@layouts/section-layout';

export const FooterStyle = styled(SectionLayout)`
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.primary.contrast};
  margin-top: 8em;

  .footer-content {
    text-align: center;
    padding: 2em 0;
  }

  a {
    padding: 0.5em 1em 0.5em 0.5em;
    display: inline-block;
    transition: all 300ms ease;
    border-radius: 5px;
    filter: drop-shadow(0 0 2px ${props => props.theme.colors.secondary.main});
    text-shadow:
      1px 1px 1px ${props => props.theme.colors.secondary.main},
      2px 2px 1px ${props => props.theme.colors.secondary.main},
      3px 3px 1px ${props => props.theme.colors.secondary.main};
  }
`;
