import { Button, ConfirmationModal, Icon, Line, Tooltip, Typography } from 'polpo/ui';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FormToolbarStyle } from './form-toolbar.style';

import { useForm210 } from '@contexts';
import { PATHS } from '@core/constants';

type FormToolbarProps = {
  style?: React.CSSProperties;
};

export const FormToolbar = ({ style }: FormToolbarProps) => {
  const { downloadData, loadData, resetData } = useForm210();
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
