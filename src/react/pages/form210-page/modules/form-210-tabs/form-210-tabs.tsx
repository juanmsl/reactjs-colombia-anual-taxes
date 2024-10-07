import { AsideModal, Grid, Tabs } from '@juanmsl/ui';
import { useState } from 'react';

import { FieldInputDetails } from '../form-210/components';

import { Form210TabsStyle } from './form-210-tabs.style';
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

import { Form210Sections } from '@core/constants';

export const Form210Tabs = () => {
  const [asideID, setAsideID] = useState<`${number | ''}`>('');

  return (
    <Tabs defaultOpenTab={Form210Sections.INICIO}>
      <Form210TabsStyle alignContent='start' contentClassName='form-210-content'>
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
      </Form210TabsStyle>

      <AsideModal isOpen={asideID !== ''} onClose={() => setAsideID('')}>
        <FieldInputDetails id={asideID} />
      </AsideModal>
    </Tabs>
  );
};
