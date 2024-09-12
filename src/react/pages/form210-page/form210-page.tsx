import { Button, ConfirmationModal, Grid, Icon, SectionLayout, Tabs, Tooltip, Typography } from '@juanmsl/ui';
import { useState } from 'react';

import { Form210PageStyle, Form210PageTabsStyle, Form210ToolBarStyle } from './form210-page.style';

import { Form210 } from '@components/form-210';
import { Form210Tabs } from '@components/form-210-tabs';
import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { formatNumber } from '@helpers';

export const Form210Page = () => {
  const { f136, f137, downloadData, loadData, resetData } = useForm210();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Tabs defaultOpenTab='tabs'>
      <Form210PageStyle>
        <Form210ToolBarStyle fitHeightContent>
          <section className='home-shared'>
            <section className='shared-actions'>
              <Tooltip content='Descargar' position='bottom'>
                <Button rounded onClick={downloadData} size='small'>
                  <Icon name='download' size='1.5em' />
                </Button>
              </Tooltip>
              <Tooltip content='Cargar' position='bottom'>
                <Button rounded variant='ghost' onClick={loadData} size='small'>
                  <Icon name='upload' size='1.5em' />
                </Button>
              </Tooltip>
              <Tooltip content='Reiniciar formulario' position='bottom'>
                <Button rounded variant='ghost' onClick={() => setIsOpen(true)} size='small'>
                  <Icon name='arrow-circle' size='1.5em' />
                </Button>
              </Tooltip>
            </section>

            <Form210PageTabsStyle fitHeightContent contentClassName='home-page-tabs-content'>
              <Tabs.Tab id='form' className='home-page-tab'>
                <Icon name='form' />
                <Typography variant='label' weight='bold'>
                  Formulario
                </Typography>
              </Tabs.Tab>

              <Tabs.Tab id='tabs' className='home-page-tab'>
                <Icon name='order-list' />
                <Typography variant='label' weight='bold'>
                  Paso a paso
                </Typography>
              </Tabs.Tab>
            </Form210PageTabsStyle>

            <Grid flow='column' gap='1em'>
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
            </Grid>
          </section>
        </Form210ToolBarStyle>

        <SectionLayout contentClassName='home-content-panel' alignContent='start'>
          <Tabs.TabPanel id='form'>
            <Form210 />
          </Tabs.TabPanel>
          <Tabs.TabPanel id='tabs'>
            <Form210Tabs />
          </Tabs.TabPanel>
        </SectionLayout>
        <ConfirmationModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title='Reiniciar formulario'
          onAccept={resetData}
          acceptText='Reiniciar'
          rejectText='Cancelar'
          icon='trash-can'
        >
          <Typography>¿Seguro que quieres borrar toda la información y reiniciar el formulario?</Typography>
        </ConfirmationModal>
      </Form210PageStyle>
    </Tabs>
  );
};
