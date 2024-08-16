export enum HomeTabsId {
  FORM210 = 'form-210',
  PATRIMONIO = 'patrimonio',
}

export const HomeTabs = [
  { label: 'Patrimonio', id: HomeTabsId.PATRIMONIO },
  { label: 'Formulario 210', id: HomeTabsId.FORM210 },
];

export const DeclarationRequirements = [
  {
    title: 'Patrimonio',
    text: 'Haber tenido un patrimonio bruto que haya sido superior a',
    uvtValue: 4500,
  },
  {
    title: 'Ingresos brutos',
    text: 'Haber tenido ingresos brutos superiores o iguales a',
    uvtValue: 1400,
  },
  {
    title: 'Tarjetas de credito',
    text: 'Haber realizado consumos con tarjeta de crédito, que hayan superado',
    uvtValue: 1400,
  },
  {
    title: 'Compras y consumos',
    text: 'Que el valor de sus compras y consumos, hayan sido superiores a',
    uvtValue: 1400,
  },
  {
    title: 'Movimientos bancarios',
    text: 'Que el valor total acumulado de sus consignaciones bancarias, depósitos o inversiones financieras hayan sido superiores a',
    uvtValue: 1400,
  },
];
