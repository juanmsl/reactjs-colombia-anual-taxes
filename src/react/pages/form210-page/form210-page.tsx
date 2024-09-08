import { Button, Typography } from '@juanmsl/ui';

import { Form210PageStyle, Form210ToolBarStyle } from './form210-page.style';

import { Form210 } from '@components/form-210';
import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { formatNumber } from '@helpers';
import { SectionLayout } from '@layouts/section-layout';

export const Form210Page = () => {
  const { uvt, f136, f137, downloadData, loadData } = useForm210();

  return (
    <Form210PageStyle>
      <Form210ToolBarStyle fitHeightContent>
        <section className='home-shared'>
          <section className='shared-data'>
            <Label>UVT</Label>
            {formatNumber(uvt, { format: 'currency' })}
          </section>
          <section className='shared-actions'>
            <Typography noPadding variant='label' weight='bold'>
              Acciones
            </Typography>
            <section className='shared-actions-content'>
              <Button leftIcon='download' onClick={downloadData}>
                Descargar información
              </Button>
              <Button leftIcon='envelope' variant='ghost' onClick={loadData}>
                Cargar información
              </Button>
            </section>
          </section>
          {f136 > 0 && (
            <section className='shared-data selected'>
              <Label>Total saldo a pagar</Label>
              <Typography noPadding weight='bold'>
                {formatNumber(f136, { format: 'currency' })}
              </Typography>
            </section>
          )}
          {f137 > 0 && (
            <section className='shared-data selected'>
              <Label>Total saldo a favor</Label>
              <Typography noPadding weight='bold'>
                {formatNumber(f137, { format: 'currency' })}
              </Typography>
            </section>
          )}
        </section>
      </Form210ToolBarStyle>

      <SectionLayout contentClassName='home-content-panel'>
        <Form210 />
      </SectionLayout>
    </Form210PageStyle>
  );
};
