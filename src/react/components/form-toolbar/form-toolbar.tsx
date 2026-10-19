import { Button, ConfirmationModal, Line, Tooltip, Typography } from 'polpo/components';
import { Grid } from 'polpo/layouts';
import { useState } from 'react';
import { FaTrashCan } from 'react-icons/fa6';
import { GrPowerReset } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import { LuDownload, LuTextCursorInput, LuUpload } from 'react-icons/lu';
import { RiListOrdered2 } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

import './form-toolbar.styles.css';

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
    <section className='form-toolbar' style={style}>
      <section className='form-toolbar-actions'>
        <Line orientation='vertical' style={{ height: '20px' }} />
        <NavLink end to={PATHS.FORM210_FORM} className='form-toolbar-navlink'>
          <Tooltip content='Formulario' position='right'>
            <Button radius='full' variant='outlined' forIcon size='small'>
              <LuTextCursorInput size='1.5em' />
            </Button>
          </Tooltip>
        </NavLink>
        <NavLink end to={PATHS.FORM210_STEPS} className='form-toolbar-navlink'>
          <Tooltip content='Paso a paso' position='right'>
            <Button radius='full' variant='outlined' forIcon size='small'>
              <RiListOrdered2 size='1.5em' />
            </Button>
          </Tooltip>
        </NavLink>
      </section>

      <section className='form-toolbar-actions'>
        <Line orientation='vertical' style={{ height: '20px' }} />
        <Tooltip content='Descargar' position='right'>
          <Button radius='full' variant='outlined' forIcon onClick={downloadData} size='small'>
            <LuDownload size='1.5em' />
          </Button>
        </Tooltip>
        <Tooltip content='Cargar' position='right'>
          <Button radius='full' variant='outlined' forIcon onClick={loadData} size='small'>
            <LuUpload size='1.5em' />
          </Button>
        </Tooltip>
        <Tooltip content='Reiniciar formulario' position='right'>
          <Button radius='full' variant='outlined' forIcon onClick={() => setIsOpen(true)} size='small'>
            <GrPowerReset size='1.5em' />
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
            <Button radius='full' variant='outlined' forIcon size='small'>
              <HiOutlineDocumentText size='1.5em' />
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
        icon={FaTrashCan}
      >
        <Typography>¿Seguro que quieres borrar toda la información y reiniciar el formulario?</Typography>
      </ConfirmationModal>
    </section>
  );
};
