import { Typography } from '@juanmsl/ui';

import { FooterStyle } from './footer.style';

export const Footer = () => {
  return (
    <footer>
      <FooterStyle fitHeightContent contentClassName='footer-content'>
        <Typography variant='label'>
          Creado con ❤️ por{' '}
          <a href='https://juanmsl.com' target='_blank' rel='noopener'>
            Juanmsl
          </a>
        </Typography>
      </FooterStyle>
    </footer>
  );
};
