import { Typography } from '@juanmsl/ui';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  return (
    <footer>
      <FooterStyle contentClassName='footer-content'>
        <Typography variant='label'>
          Creado con ❤️ por{' '}
          <a href='https://juanmsl.com' target='_blank' rel='noopener noreferrer'>
            Juanmsl
          </a>
        </Typography>
      </FooterStyle>
    </footer>
  );
};
