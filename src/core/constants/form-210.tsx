import { Typography } from 'polpo/ui';
import React from 'react';

import { Patrimonio } from '../../react/pages/form210-page/modules/form-210/components';

import { SectionDataTableWithID } from '@components/section-data-table-with-id';
import { FormFieldParams } from '@contexts';

export type Form210DataItem = {
  name: string;
  value: number;
};

export const DefaultForm210DataItem: Form210DataItem = {
  name: '',
  value: 0,
};

export type YearForm210Data = {
  minimumSalary: number;
  uvt: number;
};

export const YearsForm210Data: Record<number, YearForm210Data> = {
  2023: {
    minimumSalary: 1160000,
    uvt: 42412,
  },
  2024: {
    minimumSalary: 1300000,
    uvt: 47065,
  },
};

export type DeclarationNumberOption = {
  value: number;
  label: string;
};

export const DeclarationNumberOptions: Array<DeclarationNumberOption> = [
  {
    value: 1,
    label: 'Primera vez',
  },
  {
    value: 2,
    label: 'Segunda vez',
  },
  {
    value: 3,
    label: 'Tercera vez',
  },
  {
    value: 4,
    label: 'Más de la 3ra vez',
  },
];

export type Form210Data = {
  year: FormFieldParams['year']['value'];
  declarationNumber: FormFieldParams['declarationNumber']['value'];
  prevDeclarationValue: FormFieldParams['prevDeclarationValue']['value'];
  '28': FormFieldParams['28']['value'];
  '29': FormFieldParams['29']['data'];
  '30': FormFieldParams['30']['table'];
  '32': FormFieldParams['32']['table'];
  '33': FormFieldParams['33']['table'];
  '35': FormFieldParams['35']['table'];
  '36': FormFieldParams['36']['table'];
  '38': FormFieldParams['38']['table'];
  '39': FormFieldParams['39']['table'];
  '43': FormFieldParams['43']['table'];
  '44': FormFieldParams['44']['table'];
  '45': FormFieldParams['45']['table'];
  '47': FormFieldParams['47']['table'];
  '48': FormFieldParams['48']['table'];
  '50': FormFieldParams['50']['table'];
  '51': FormFieldParams['51']['table'];
  '56': FormFieldParams['56']['value'];
  '58': FormFieldParams['58']['table'];
  '59': FormFieldParams['59']['table'];
  '60': FormFieldParams['60']['table'];
  '62': FormFieldParams['62']['table'];
  '63': FormFieldParams['63']['table'];
  '64': FormFieldParams['64']['table'];
  '66': FormFieldParams['66']['table'];
  '67': FormFieldParams['67']['table'];
  '72': FormFieldParams['72']['value'];
  '74': FormFieldParams['74']['table'];
  '75': FormFieldParams['75']['table'];
  '76': FormFieldParams['76']['table'];
  '77': FormFieldParams['77']['table'];
  '79': FormFieldParams['79']['table'];
  '80': FormFieldParams['80']['table'];
  '81': FormFieldParams['81']['table'];
  '83': FormFieldParams['83']['table'];
  '84': FormFieldParams['84']['table'];
  '89': FormFieldParams['89']['value'];
  '94': FormFieldParams['94']['value'];
  '95': FormFieldParams['95']['value'];
  '96': FormFieldParams['96']['value'];
  '98': FormFieldParams['98']['value'];
  '99': FormFieldParams['99']['value'];
  '100': FormFieldParams['100']['value'];
  '102': FormFieldParams['102']['value'];
  '104': FormFieldParams['104']['value'];
  '105': FormFieldParams['105']['value'];
  '107': FormFieldParams['107']['value'];
  '108': FormFieldParams['108']['value'];
  '109': FormFieldParams['109']['value'];
  '110': FormFieldParams['110']['value'];
  '112': FormFieldParams['112']['value'];
  '113': FormFieldParams['113']['value'];
  '114': FormFieldParams['114']['value'];
  '122': FormFieldParams['122']['value'];
  '123': FormFieldParams['123']['value'];
  '124': FormFieldParams['124']['value'];
  '128': FormFieldParams['128']['value'];
  '130': FormFieldParams['130']['value'];
  '131': FormFieldParams['131']['value'];
  '132': FormFieldParams['132']['table'];
  '135': FormFieldParams['135']['value'];
  '138': FormFieldParams['138']['value'];
};

export const defaultForm210Data: Form210Data = {
  year: 2024,
  declarationNumber: 1,
  prevDeclarationValue: 0,
  '28': 0,
  '29': {
    cuentasBancarias: [],
    inversiones: [],
    cuentasPorCobrar: [],
    activosFijos: [],
    bienesInmuebles: [],
    vehiculos: [],
    otros: [],
  },
  '30': [],
  '32': [],
  '33': [],
  '35': [],
  '36': [],
  '38': [],
  '39': [],
  '43': [],
  '44': [],
  '45': [],
  '47': [],
  '48': [],
  '50': [],
  '51': [],
  '56': 0,
  '58': [],
  '59': [],
  '60': [],
  '62': [],
  '63': [],
  '64': [],
  '66': [],
  '67': [],
  '72': 0,
  '74': [],
  '75': [],
  '76': [],
  '77': [],
  '79': [],
  '80': [],
  '81': [],
  '83': [],
  '84': [],
  '89': 0,
  '94': 0,
  '95': 0,
  '96': 0,
  '98': 0,
  '99': 0,
  '100': 0,
  '102': 0,
  '104': 0,
  '105': 0,
  '107': 0,
  '108': 0,
  '109': 0,
  '110': 0,
  '112': 0,
  '113': 0,
  '114': 0,
  '122': 0,
  '123': 0,
  '124': 0,
  '128': 0,
  '130': 0,
  '131': 0,
  '132': [],
  '135': 0,
  '138': 0,
};

export const Form210DataLimits: Record<
  `f${string}`,
  Partial<{
    min: number;
    max: number;
  }>
> = {
  f28: {
    min: 0,
    max: 240,
  },
  f35: {
    min: 0,
    max: 3800,
  },
  f38: {
    min: 0,
    max: 1200,
  },
  f47: {
    min: 0,
    max: 3800,
  },
  f50: {
    min: 0,
    max: 1200,
  },
  f63: {
    min: 0,
    max: 3800,
  },
  f66: {
    min: 0,
    max: 1200,
  },
  f80: {
    min: 0,
    max: 3800,
  },
  f83: {
    min: 0,
    max: 1200,
  },
};

export type MarginTableEntity = Array<{
  uvt: number;
  maxUvt: number;
  tm: number;
  imp: number;
}>;

export const f116MarginTable: MarginTableEntity = [
  { uvt: 31000, maxUvt: null, tm: 0.39, imp: 10352 },
  { uvt: 18970, maxUvt: 31000, tm: 0.37, imp: 5901 },
  { uvt: 8670, maxUvt: 18970, tm: 0.35, imp: 2296 },
  { uvt: 4100, maxUvt: 8670, tm: 0.33, imp: 788 },
  { uvt: 1700, maxUvt: 4100, tm: 0.28, imp: 116 },
  { uvt: 1090, maxUvt: 1700, tm: 0.19, imp: 0 },
  { uvt: 0, maxUvt: 1090, tm: 0, imp: 0 },
];

export const f117MarginTable: MarginTableEntity = f116MarginTable;

export const f119MarginTable: MarginTableEntity = [
  { uvt: 4100, maxUvt: 8670, tm: 0.33, imp: 788 },
  { uvt: 1700, maxUvt: 4100, tm: 0.28, imp: 116 },
  { uvt: 1090, maxUvt: 1700, tm: 0.19, imp: 0 },
  { uvt: 0, maxUvt: 1090, tm: 0, imp: 0 },
];

export type FieldInputDetails = {
  title: string;
  subtitle?: string;
  description?: React.ReactNode;
  content: React.ReactNode;
};

export const Form210Details: Record<`${number}`, FieldInputDetails> = {
  '29': {
    title: 'Total patrimonio bruto',
    subtitle: 'Patrimonio',
    description: (
      <>
        <Typography noPadding>
          Registre el total del valor patrimonial de todos los bienes y derechos apreciables en dinero poseídos en el
          país o en el exterior por el contribuyente al final del periodo fiscal, tales como:
        </Typography>
        <ul>
          <li>
            <Typography variant='label'>Bienes y/o efectivo en moneda extranjera</Typography>
          </li>
          <li>
            <Typography variant='label'>Efectivo en moneda nacional</Typography>
          </li>
          <li>
            <Typography variant='label'>Saldo en cuentas corrientes y cuentas de ahorros</Typography>
          </li>
          <li>
            <Typography variant='label'>Inversiones en moneda nacional</Typography>
          </li>
          <li>
            <Typography variant='label'>
              Inventarios que representen bienes corporales destinados a la venta en el curso normal de los negocios,
              así como aquellos que se hallen en proceso de producción o que se utilizarán o consumirán en la producción
              de otros que van a ser vendidos
            </Typography>
          </li>
          <li>
            <Typography variant='label'>Activos biológicos</Typography>
          </li>
          <li>
            <Typography variant='label'>
              Bienes inmuebles (casas, apartamentos, fincas, lotes, locales, oficinas, otros)
            </Typography>
          </li>
          <li>
            <Typography variant='label'>Construcciones en curso</Typography>
          </li>
          <li>
            <Typography variant='label'>Vehículos</Typography>
          </li>
          <li>
            <Typography variant='label'>Naves</Typography>
          </li>
          <li>
            <Typography variant='label'>Aeronaves</Typography>
          </li>
          <li>
            <Typography variant='label'>Muebles y enseres</Typography>
          </li>
          <li>
            <Typography variant='label'>Maquinaria y equipo</Typography>
          </li>
          <li>
            <Typography variant='label'>Pozos petroleros</Typography>
          </li>
          <li>
            <Typography variant='label'>Minas</Typography>
          </li>
          <li>
            <Typography variant='label'>Good will</Typography>
          </li>
          <li>
            <Typography variant='label'>Know how</Typography>
          </li>
          <li>
            <Typography variant='label'>Patentes</Typography>
          </li>
          <li>
            <Typography variant='label'>Primas</Typography>
          </li>
          <li>
            <Typography variant='label'>Derechos de autor</Typography>
          </li>
          <li>
            <Typography variant='label'>Cuentas por cobrar</Typography>
          </li>
          <li>
            <Typography variant='label'>Joyas</Typography>
          </li>
          <li>
            <Typography variant='label'>Cuadros y demás derechos reales y personales</Typography>
          </li>
          <li>
            <Typography variant='label'>Cupos de taxis</Typography>
          </li>
          <li>
            <Typography variant='label'>Criptoactivos</Typography>
          </li>
          <li>
            <Typography variant='label'>Entre otros</Typography>
          </li>
        </ul>
      </>
    ),
    content: <Patrimonio />,
  },
  '30': {
    title: 'Deudas',
    subtitle: 'Patrimonio',
    content: <SectionDataTableWithID id='30' />,
    description: (
      <>
        <Typography noPadding>
          Registre en esta casilla el valor total de los saldos pendientes de pago a 31 de diciembre del periodo fiscal,
          tales como:
        </Typography>
        <ul>
          <li>
            <Typography variant='label'>Obligaciones financieras</Typography>
          </li>
          <li>
            <Typography variant='label'>Cuentas por pagar</Typography>
          </li>
          <li>
            <Typography variant='label'>Arrendamientos por pagar</Typography>
          </li>
          <li>
            <Typography variant='label'>Otros pasivos financieros</Typography>
          </li>
          <li>
            <Typography variant='label'>Impuestos</Typography>
          </li>
          <li>
            <Typography variant='label'>Gravámenes y tasas por pagar</Typography>
          </li>
          <li>
            <Typography variant='label'>Pasivos por beneficios a los empleados</Typography>
          </li>
          <li>
            <Typography variant='label'>Pasivos por ingresos diferidos</Typography>
          </li>
          <li>
            <Typography variant='label'>Otros pasivos u obligaciones diferentes a las anteriores</Typography>
          </li>
        </ul>
      </>
    ),
  },
  '32': {
    title: 'Ingresos brutos',
    subtitle: 'Rentas de trabajo',
    content: <SectionDataTableWithID id='32' />,
  },
  '33': {
    title: 'Ingrésos no constitutivos de renta',
    subtitle: 'Rentas de trabajo',
    content: <SectionDataTableWithID id='33' />,
  },
  '35': {
    title: 'Aportes voluntarios AFC, FVP y/o AVC',
    subtitle: 'Rentas de trabajo',
    content: <SectionDataTableWithID id='35' />,
  },
  '36': {
    title: 'Otras rentas exentas',
    subtitle: 'Rentas de trabajo',
    content: <SectionDataTableWithID id='36' />,
  },
  '38': {
    title: 'Intereses de vivienda',
    subtitle: 'Rentas de trabajo',
    content: <SectionDataTableWithID id='38' />,
  },
  '39': {
    title: 'Otras deducciones imputables',
    subtitle: 'Rentas de trabajo',
    content: <SectionDataTableWithID id='39' />,
  },
  '43': {
    title: 'Ingresos brutos',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='43' />,
  },
  '44': {
    title: 'Ingrésos no constitutivos de renta',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='44' />,
  },
  '45': {
    title: 'Costos y deducciones procedentes',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='45' />,
  },
  '47': {
    title: 'Aportes voluntarios AFC, FVP y/o AVC',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='47' />,
  },
  '48': {
    title: 'Otras rentas exentas',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='48' />,
  },
  '50': {
    title: 'Intereses de vivienda',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='50' />,
  },
  '51': {
    title: 'Otras deducciones imputables',
    subtitle: 'Rentas por honorarios',
    content: <SectionDataTableWithID id='51' />,
  },
  '58': {
    title: 'Ingresos brutos',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='58' />,
  },
  '59': {
    title: 'Ingrésos no constitutivos de renta',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='59' />,
  },
  '60': {
    title: 'Costos y deducciones procedentes',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='60' />,
  },
  '62': {
    title: 'Rentas líquidas pasivas - ECE',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='62' />,
  },
  '63': {
    title: 'Aportes voluntarios AFC, FVP y/o AVC',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='63' />,
  },
  '64': {
    title: 'Otras rentas exentas',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='64' />,
  },
  '66': {
    title: 'Intereses de vivienda',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='66' />,
  },
  '67': {
    title: 'Otras deducciones imputables',
    subtitle: 'Rentas de capital',
    content: <SectionDataTableWithID id='67' />,
  },
  '74': {
    title: 'Ingresos brutos',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='74' />,
  },
  '75': {
    title: 'Devoluciones, rebajas y dctos.',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='75' />,
  },
  '76': {
    title: 'Ingrésos no constitutivos de renta',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='76' />,
  },
  '77': {
    title: 'Costos y deducciones procedentes',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='77' />,
  },
  '79': {
    title: 'Rentas líquidas pasivas - ECE',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='79' />,
  },
  '80': {
    title: 'Aportes voluntarios AFC, FVP y/o AVC',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='80' />,
  },
  '81': {
    title: 'Otras rentas exentas',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='81' />,
  },
  '83': {
    title: 'Intereses de vivienda',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='83' />,
  },
  '84': {
    title: 'Otras deducciones imputables',
    subtitle: 'Rentas no laborales',
    content: <SectionDataTableWithID id='84' />,
  },
  '132': {
    title: 'Retenciones año gravable a declarar',
    subtitle: 'Liquidación',
    content: <SectionDataTableWithID id='132' />,
  },
};

export enum Form210Sections {
  INICIO = 'inicio',
  PATRIMONIO = 'patrimonio',
  RENTAS_DE_TRABAJO = 'rentas-de-trabajo',
  RENTAS_POR_HONORARIOS = 'rentas-por-honorarios',
  RENTAS_DE_CAPITAL = 'rentas-de-capital',
  RENTAS_NO_LABORALES = 'rentas-no-laborales',
  CEDULA_GENERAL = 'cedula-general',
  CEDULA_PENSIONES = 'cedula-pensiones',
  CEDULA_DIVIDENDOS = 'cedula-dividendos',
  GANANCIA_OCASIONAL = 'ganancia-ocasional',
  LIQUIDACION_PRIVADA = 'liquidacion-privada',
  DEPENDIENTES = 'dependientes',
  PAGO_TOTAL = 'pago-total',
}
