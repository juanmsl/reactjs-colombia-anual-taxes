import { Typography } from '@juanmsl/ui';
import React from 'react';

import { Patrimonio } from '../../react/pages/form210-page/components';

import { SectionDataTableWithID } from '@components/section-data-table-with-id';

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

export type Table29 = {
  cuentasBancarias: Array<Form210DataItem>;
  inversiones: Array<Form210DataItem>;
  cuentasPorCobrar: Array<Form210DataItem>;
  activosFijos: Array<Form210DataItem>;
  bienesInmuebles: Array<Form210DataItem>;
  vehiculos: Array<Form210DataItem>;
  otros: Array<Form210DataItem>;
};

export type Form210Data = {
  year: number;
  declarationNumber: number;
  prevDeclarationValue: number;
  f28: number;
  _29: Table29;
  _30: Array<Form210DataItem>;
  _32: Array<Form210DataItem>;
  _33: Array<Form210DataItem>;
  _35: Array<Form210DataItem>;
  _36: Array<Form210DataItem>;
  _38: Array<Form210DataItem>;
  _39: Array<Form210DataItem>;
  _43: Array<Form210DataItem>;
  _44: Array<Form210DataItem>;
  _45: Array<Form210DataItem>;
  _47: Array<Form210DataItem>;
  _48: Array<Form210DataItem>;
  _50: Array<Form210DataItem>;
  _51: Array<Form210DataItem>;
  f56: number;
  _58: Array<Form210DataItem>;
  _59: Array<Form210DataItem>;
  _60: Array<Form210DataItem>;
  _62: Array<Form210DataItem>;
  _63: Array<Form210DataItem>;
  _64: Array<Form210DataItem>;
  _66: Array<Form210DataItem>;
  _67: Array<Form210DataItem>;
  f72: number;
  _74: Array<Form210DataItem>;
  _75: Array<Form210DataItem>;
  _76: Array<Form210DataItem>;
  _77: Array<Form210DataItem>;
  _79: Array<Form210DataItem>;
  _80: Array<Form210DataItem>;
  _81: Array<Form210DataItem>;
  _83: Array<Form210DataItem>;
  _84: Array<Form210DataItem>;
  f89: number;
  f94: number;
  f95: number;
  f96: number;
  f98: number;
  f99: number;
  f100: number;
  f102: number;
  f104: number;
  f105: number;
  f107: number;
  f108: number;
  f109: number;
  f110: number;
  f112: number;
  f113: number;
  f114: number;
  f122: number;
  f123: number;
  f124: number;
  f128: number;
  f130: number;
  f131: number;
  _132: Array<Form210DataItem>;
  f135: number;
  f138: number;
  f140: number;
};

export const defaultForm210Data: Form210Data = {
  year: 2023,
  declarationNumber: 1,
  prevDeclarationValue: 0,
  f28: 0,
  _29: {
    cuentasBancarias: [],
    inversiones: [],
    cuentasPorCobrar: [],
    activosFijos: [],
    bienesInmuebles: [],
    vehiculos: [],
    otros: [],
  },
  _30: [],
  _32: [],
  _33: [],
  _35: [],
  _36: [],
  _38: [],
  _39: [],
  _43: [],
  _44: [],
  _45: [],
  _47: [],
  _48: [],
  _50: [],
  _51: [],
  f56: 0,
  _58: [],
  _59: [],
  _60: [],
  _62: [],
  _63: [],
  _64: [],
  _66: [],
  _67: [],
  f72: 0,
  _74: [],
  _75: [],
  _76: [],
  _77: [],
  _79: [],
  _80: [],
  _81: [],
  _83: [],
  _84: [],
  f89: 0,
  f94: 0,
  f95: 0,
  f96: 0,
  f98: 0,
  f99: 0,
  f100: 0,
  f102: 0,
  f104: 0,
  f105: 0,
  f107: 0,
  f108: 0,
  f109: 0,
  f110: 0,
  f112: 0,
  f113: 0,
  f114: 0,
  f122: 0,
  f123: 0,
  f124: 0,
  f128: 0,
  f130: 0,
  f131: 0,
  _132: [],
  f135: 0,
  f138: 0,
  f140: 0,
};

export const Form210DataLimits: Record<
  `f${number}`,
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
        <Typography withoutPadding>
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
        <Typography withoutPadding>
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
