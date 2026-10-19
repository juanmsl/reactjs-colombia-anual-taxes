import { AsideModal, Tabs } from 'polpo/components';
import { Grid } from 'polpo/layouts';
import { useState } from 'react';

import { FieldInputDetails } from '../form-210/components';

import './form-210-tabs.styles.css';
import {
  CedulaDividendos,
  CedulaGeneral,
  CedulaPensiones,
  Dependientes,
  GananciaOcasional,
  Inicio,
  LiquidacionPrivada,
  PagoTotal,
  Patrimonio,
  RentasDeCapital,
  RentasDeTrabajo,
  RentasNoLaborales,
  RentasPorHonorarios,
} from './sections';

import { FieldParamIdOnlyNumbers } from '@contexts';
import { Form210Sections } from '@core/constants';
import { SectionLayout } from '@layouts/section-layout';

export const Form210Tabs = () => {
  const [asideID, setAsideID] = useState<FieldParamIdOnlyNumbers | null>(null);

  return (
    <Tabs defaultOpenTab={Form210Sections.INICIO}>
      <SectionLayout className='form210-tabs' alignContent='start' contentClassName='form-210-content'>
        <Tabs.TabList
          className='tabs-list-container'
          variant='flat'
          color='primary'
          radius='medium'
          direction='vertical'
          tabs={[
            { id: Form210Sections.INICIO, label: '1. Inicio' },
            { id: Form210Sections.PATRIMONIO, label: '2. Patrimonio' },
            { id: Form210Sections.RENTAS_DE_TRABAJO, label: '3. Rentas de trabajo' },
            { id: Form210Sections.RENTAS_POR_HONORARIOS, label: '4. Rentas por honorarios' },
            { id: Form210Sections.RENTAS_DE_CAPITAL, label: '5. Rentas de capital' },
            { id: Form210Sections.RENTAS_NO_LABORALES, label: '6. Rentas no laborales' },
            { id: Form210Sections.CEDULA_GENERAL, label: '7. Cedula general' },
            { id: Form210Sections.CEDULA_PENSIONES, label: '8. Cedula de pensiones' },
            { id: Form210Sections.CEDULA_DIVIDENDOS, label: '9. Cedula de dividendos' },
            { id: Form210Sections.GANANCIA_OCASIONAL, label: '10. Ganancia ocasional' },
            { id: Form210Sections.LIQUIDACION_PRIVADA, label: '11. Liquidación privada' },
            { id: Form210Sections.DEPENDIENTES, label: '12. Dependientes' },
            { id: Form210Sections.PAGO_TOTAL, label: '13. Pago total' },
          ]}
        />

        <Grid gap='1em' ac='start'>
          <Inicio />
          <Patrimonio setAsideID={setAsideID} />
          <RentasDeTrabajo setAsideID={setAsideID} />
          <RentasPorHonorarios setAsideID={setAsideID} />
          <RentasDeCapital setAsideID={setAsideID} />
          <RentasNoLaborales setAsideID={setAsideID} />
          <CedulaGeneral />
          <CedulaPensiones />
          <CedulaDividendos />
          <GananciaOcasional />
          <LiquidacionPrivada setAsideID={setAsideID} />
          <Dependientes />
          <PagoTotal />
        </Grid>
      </SectionLayout>

      <AsideModal isOpen={asideID !== null} onClose={() => setAsideID(null)}>
        <FieldInputDetails id={asideID!} />
      </AsideModal>
    </Tabs>
  );
};
