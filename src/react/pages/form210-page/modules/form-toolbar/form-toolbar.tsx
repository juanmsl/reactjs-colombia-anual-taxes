import { Button, ConfirmationModal, Grid, Icon, Tooltip, Typography } from '@juanmsl/ui';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FormToolbarStyle, FormToolbarTabsStyle } from './form-toolbar.style';

import { Label } from '@components/label';
import { useForm210 } from '@contexts';
import { PATHS } from '@core/constants';
import { formatNumber } from '@helpers';

export const FormToolbar = () => {
  const { f136, f137, downloadData, loadData, resetData } = useForm210();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormToolbarStyle fitHeightContent contentClassName='form-toolbar-content'>
      <section className='form-toolbar-actions'>
        <Tooltip content='Descargar' position='bottom'>
          <Button rounded variant='ghost' onClick={downloadData} size='small'>
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

      <FormToolbarTabsStyle fitHeightContent contentClassName='form-toolbar-tabs-content'>
        <NavLink end to={PATHS.FORM210_FORM} className='form-toolbar-tab'>
          <Icon name='form' />
          <Typography variant='label' weight='bold'>
            Formulario
          </Typography>
        </NavLink>

        <NavLink end to={PATHS.FORM210_STEPS} className='form-toolbar-tab'>
          <Icon name='order-list' />
          <Typography variant='label' weight='bold'>
            Paso a paso
          </Typography>
        </NavLink>
      </FormToolbarTabsStyle>

      <Grid flow='column' gap='1em'>
        {f136 > 0 && (
          <section className='shared-data'>
            <Label>Total saldo a pagar</Label>
            <Typography noPadding weight='bold'>
              {formatNumber(f136, { format: 'currency' })}
            </Typography>
          </section>
        )}
        {f137 > 0 && (
          <section className='shared-data'>
            <Label>Total saldo a favor</Label>
            <Typography noPadding weight='bold'>
              {formatNumber(f137, { format: 'currency' })}
            </Typography>
          </section>
        )}
      </Grid>

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
    </FormToolbarStyle>
  );
};
