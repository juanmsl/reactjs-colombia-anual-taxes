import { Button, ConfirmationModal, Grid, Icon, Line, Tooltip, Typography } from 'polpo/ui';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FormToolbarStyle } from './form-toolbar.style';

import { useForm210, useForm210FieldParams } from '@contexts';
import { PATHS } from '@core/constants';

type FormToolbarProps = {
  style?: React.CSSProperties;
};

export const FormToolbar = ({ style }: FormToolbarProps) => {
  const { downloadData, loadData, resetData } = useForm210();
  const { value: year } = useForm210FieldParams('year');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FormToolbarStyle style={style} fitHeightContent contentClassName='form-toolbar-content'>
      <section className='form-toolbar-actions'>
        <Line orientation='vertical' style={{ height: '20px' }} />
        <NavLink end to={PATHS.FORM210_FORM} className='form-toolbar-navlink'>
          <Tooltip content='Formulario' position='right'>
            <Button radius='full' variant='ghost' size='small'>
              <Icon name='form' size='1.5em' />
            </Button>
          </Tooltip>
        </NavLink>
        <NavLink end to={PATHS.FORM210_STEPS} className='form-toolbar-navlink'>
          <Tooltip content='Paso a paso' position='right'>
            <Button radius='full' variant='ghost' size='small'>
              <Icon name='order-list' size='1.5em' />
            </Button>
          </Tooltip>
        </NavLink>
      </section>

      <section className='form-toolbar-actions'>
        <Line orientation='vertical' style={{ height: '20px' }} />
        <Tooltip content='Descargar' position='right'>
          <Button radius='full' variant='ghost' onClick={downloadData} size='small'>
            <Icon name='download' size='1.5em' />
          </Button>
        </Tooltip>
        <Tooltip content='Cargar' position='right'>
          <Button radius='full' variant='ghost' onClick={loadData} size='small'>
            <Icon name='upload' size='1.5em' />
          </Button>
        </Tooltip>
        <Tooltip content='Reiniciar formulario' position='right'>
          <Button radius='full' variant='ghost' onClick={() => setIsOpen(true)} size='small'>
            <Icon name='arrow-circle' size='1.5em' />
          </Button>
        </Tooltip>
      </section>

      <section className='form-toolbar-actions'>
        <Line orientation='vertical' style={{ height: '20px' }} />
        <Tooltip
          content={
            <Grid ji='center' gap='4px'>
              <span>Descargar Formulario 210</span>
              <span>Instrucciones por celda</span>
            </Grid>
          }
          position='right'
        >
          <a
            href={`https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Formularios/${+year + 1}/Formulario_210_${+year + 1}.pdf`}
            target='_blank'
            rel='noopener'
            className='form-link'
          >
            <Button radius='full' variant='ghost' size='small'>
              <Icon name='document' size='1.5em' />
            </Button>
          </a>
        </Tooltip>
      </section>

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
