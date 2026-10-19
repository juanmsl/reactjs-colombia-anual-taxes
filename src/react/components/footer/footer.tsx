import { Typography } from 'polpo/components';

import './footer.styles.css';

import { SectionLayout } from '@layouts/section-layout';

export const Footer = () => {
  return (
    <footer>
      <SectionLayout className='footer' fitHeightContent contentClassName='footer-content'>
        <Typography variant='label'>
          Creado con ❤️ por{' '}
          <a href='https://juanmsl.com' target='_blank' rel='noopener'>
            Juanmsl
          </a>
        </Typography>
      </SectionLayout>
    </footer>
  );
};
