import { Typography } from '@juanmsl/ui';

import { FooterStyle } from './footer.style';

import { SectionLayout } from '@layouts/section-layout';

export const Footer = () => {
  return (
    <FooterStyle>
      <SectionLayout onlyContent className='footer-content'>
        <Typography variant='label'>
          Creado con ❤️ por{' '}
          <a href='https://juanmsl.com' target='_blank' rel='noopener noreferrer'>
            Juanmsl
          </a>
        </Typography>
      </SectionLayout>
    </FooterStyle>
  );
};
