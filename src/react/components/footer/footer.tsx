import { Typography } from '@juanmsl/ui';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  return (
    <FooterStyle>
      <Typography variant='label'>
        Creado con amor por{' '}
        <a href='https://juanmsl.com' target='_blank' rel='noopener noreferrer'>
          Juanmsl
        </a>
      </Typography>
    </FooterStyle>
  );
};
