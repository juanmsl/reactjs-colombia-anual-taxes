import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import {
  defaultForm210Data,
  f116MarginTable,
  f117MarginTable,
  f119MarginTable,
  Form210Data,
  Form210DataItem,
  Form210DataLimits,
  LocalStorage,
  MarginTableEntity,
  YearForm210Data,
  YearsForm210Data,
} from '@core/constants';
import { roundNumber } from '@helpers';

export type FieldParams<T extends keyof FormFieldParams> = {
  readOnly?: boolean;
  formula?: string;
  disabled?: boolean;
  locked?: boolean;
  format?: 'currency' | 'number';
  min?: number;
  max?: number;
  table?: Array<Form210DataItem>;
  value: number;
  setValue?: T extends keyof Form210Data ? (value: Form210Data[T]) => void : never;
};

export type Table29 = {
  cuentasBancarias: Array<Form210DataItem>;
  inversiones: Array<Form210DataItem>;
  cuentasPorCobrar: Array<Form210DataItem>;
  activosFijos: Array<Form210DataItem>;
  bienesInmuebles: Array<Form210DataItem>;
  vehiculos: Array<Form210DataItem>;
  otros: Array<Form210DataItem>;
};

export type FormFieldParams = {
  year: FieldParams<'year'>;
  declarationNumber: FieldParams<'declarationNumber'>;
  prevDeclarationValue: FieldParams<'prevDeclarationValue'>;
  '28': FieldParams<'28'>;
  '29': FieldParams<'29'> & { data: Table29 };
  '30': FieldParams<'30'>;
  '31': FieldParams<'31'>;
  '32': FieldParams<'32'>;
  '33': FieldParams<'33'>;
  '34': FieldParams<'34'>;
  '35': FieldParams<'35'>;
  '36': FieldParams<'36'>;
  '37': FieldParams<'37'>;
  '38': FieldParams<'38'>;
  '39': FieldParams<'39'>;
  '40': FieldParams<'40'>;
  '41': FieldParams<'41'>;
  '42': FieldParams<'42'>;
  '43': FieldParams<'43'>;
  '44': FieldParams<'44'>;
  '45': FieldParams<'45'>;
  '46': FieldParams<'46'>;
  '47': FieldParams<'47'>;
  '48': FieldParams<'48'>;
  '49': FieldParams<'49'>;
  '50': FieldParams<'50'>;
  '51': FieldParams<'51'>;
  '52': FieldParams<'52'>;
  '53': FieldParams<'53'>;
  '54': FieldParams<'54'>;
  '55': FieldParams<'55'>;
  '56': FieldParams<'56'>;
  '57': FieldParams<'57'>;
  '58': FieldParams<'58'>;
  '59': FieldParams<'59'>;
  '60': FieldParams<'60'>;
  '61': FieldParams<'61'>;
  '62': FieldParams<'62'>;
  '63': FieldParams<'63'>;
  '64': FieldParams<'64'>;
  '65': FieldParams<'65'>;
  '66': FieldParams<'66'>;
  '67': FieldParams<'67'>;
  '68': FieldParams<'68'>;
  '69': FieldParams<'69'>;
  '70': FieldParams<'70'>;
  '71': FieldParams<'71'>;
  '72': FieldParams<'72'>;
  '73': FieldParams<'73'>;
  '74': FieldParams<'74'>;
  '75': FieldParams<'75'>;
  '76': FieldParams<'76'>;
  '77': FieldParams<'77'>;
  '78': FieldParams<'78'>;
  '79': FieldParams<'79'>;
  '80': FieldParams<'80'>;
  '81': FieldParams<'81'>;
  '82': FieldParams<'82'>;
  '83': FieldParams<'83'>;
  '84': FieldParams<'84'>;
  '85': FieldParams<'85'>;
  '86': FieldParams<'86'>;
  '87': FieldParams<'87'>;
  '88': FieldParams<'88'>;
  '89': FieldParams<'89'>;
  '90': FieldParams<'90'>;
  '91': FieldParams<'91'>;
  '92': FieldParams<'92'>;
  '93': FieldParams<'93'>;
  '94': FieldParams<'94'>;
  '95': FieldParams<'95'>;
  '96': FieldParams<'96'>;
  '97': FieldParams<'97'>;
  '98': FieldParams<'98'>;
  '99': FieldParams<'99'>;
  '100': FieldParams<'100'>;
  '101': FieldParams<'101'>;
  '102': FieldParams<'102'>;
  '103': FieldParams<'103'>;
  '104': FieldParams<'104'>;
  '105': FieldParams<'105'>;
  '106': FieldParams<'106'>;
  '107': FieldParams<'107'>;
  '108': FieldParams<'108'>;
  '109': FieldParams<'109'>;
  '110': FieldParams<'110'>;
  '111': FieldParams<'111'>;
  '112': FieldParams<'112'>;
  '113': FieldParams<'113'>;
  '114': FieldParams<'114'>;
  '115': FieldParams<'115'>;
  '116': FieldParams<'116'>;
  '117': FieldParams<'117'>;
  '118': FieldParams<'118'>;
  '119': FieldParams<'119'>;
  '120': FieldParams<'120'>;
  '121': FieldParams<'121'>;
  '122': FieldParams<'122'>;
  '123': FieldParams<'123'>;
  '124': FieldParams<'124'>;
  '125': FieldParams<'125'>;
  '126': FieldParams<'126'>;
  '127': FieldParams<'127'>;
  '128': FieldParams<'128'>;
  '129': FieldParams<'129'>;
  '130': FieldParams<'130'>;
  '131': FieldParams<'131'>;
  '132': FieldParams<'132'>;
  '133': FieldParams<'133'>;
  '134': FieldParams<'134'>;
  '135': FieldParams<'135'>;
  '136': FieldParams<'136'>;
  '137': FieldParams<'137'>;
  '138': FieldParams<'138'>;
  '139': FieldParams<'139'>;
};

export type FieldParamId = keyof FormFieldParams;

type Form210ContextEntity = {
  uvt: number;
  minimumSalary: number;
  setValue: <T extends keyof Form210Data>(id: T, value: Form210Data[T]) => void;
  setData: React.Dispatch<React.SetStateAction<Form210Data>>;
  valueToUVT: (value: number) => number;
  valueFromUVT: (value: number) => number;
  downloadData: () => void;
  loadData: () => void;
  resetData: () => void;
  fieldParams: FormFieldParams;
};

const Form210Context = createContext<Form210ContextEntity | null>(null);

type Form210ProviderProps = {
  children: React.ReactNode;
};

export const Form210Provider = ({ children }: Form210ProviderProps) => {
  const [d, setData] = useState<Form210Data>(() => {
    const data = localStorage.getItem(LocalStorage.FORM_210_DATA);

    if (data) {
      return { ...defaultForm210Data, ...JSON.parse(data) };
    }

    return defaultForm210Data;
  });

  const [{ uvt, minimumSalary }, setYearData] = useState<YearForm210Data>(() => {
    if (d.year in YearsForm210Data) {
      return YearsForm210Data[d.year];
    }

    const years = Object.keys(YearsForm210Data);
    const selectedYear = years[years.length - 2];

    return YearsForm210Data[selectedYear];
  });

  useEffect(() => {
    const years = Object.keys(YearsForm210Data);
    const selectedYear = years[years.length - 1];

    setYearData(YearsForm210Data[d.year] ?? YearsForm210Data[selectedYear]);
  }, [d.year]);

  const valueToUVT = useCallback<Form210ContextEntity['valueToUVT']>((value: number) => value / uvt, [uvt]);

  const valueFromUVT = useCallback<Form210ContextEntity['valueFromUVT']>((value: number) => value * uvt, [uvt]);

  const setValue = useCallback<Form210ContextEntity['setValue']>(
    (id, value) => {
      if (typeof value === 'number') {
        const { min = null, max = null } = Form210DataLimits[`f${id}`] ?? {};

        const minValue = min !== null ? valueFromUVT(min) : null;
        const maxValue = max !== null ? valueFromUVT(max) : null;

        const minV = minValue !== null ? Math.max(value, minValue) : value;
        const maxV = maxValue !== null ? Math.min(minV, maxValue) : minV;

        setData(prev => ({
          ...prev,
          [id]: maxV,
        }));
      } else {
        setData(prev => ({
          ...prev,
          [id]: value,
        }));
      }
    },
    [valueFromUVT],
  );

  useEffect(() => {
    localStorage.setItem(LocalStorage.FORM_210_DATA, JSON.stringify(d));
  }, [d]);

  const valueFromTableMargin = useCallback(
    (tableMargin: MarginTableEntity, value: number) => {
      const valueUVT = valueToUVT(value);
      const match = tableMargin.find(({ uvt }) => valueUVT > uvt);

      if (match) {
        const { uvt: mUVT, imp, tm } = match;

        return valueFromUVT((valueUVT - mUVT) * tm + imp);
      }

      return 0;
    },
    [valueFromUVT, valueToUVT],
  );

  const getTotalOf = useCallback(
    (array: Array<Form210DataItem>) => array.reduce((total, value) => total + value.value, 0),
    [],
  );

  const v = (value: number) => roundNumber(value, -3);

  const f29 = useMemo(
    () => Object.values(d['29']).reduce((total, data) => total + getTotalOf(data), 0),
    [d, getTotalOf],
  );
  const f30 = useMemo(() => getTotalOf(d['30']), [d, getTotalOf]);
  const f31 = useMemo(() => v(f29 - f30), [f29, f30]);
  const f32 = useMemo(() => getTotalOf(d['32']), [d, getTotalOf]);
  const f33 = useMemo(() => getTotalOf(d['33']), [d, getTotalOf]);
  const f34 = useMemo(() => v(f32 - f33), [f32, f33]);
  const f35 = useMemo(() => getTotalOf(d['35']), [d, getTotalOf]);
  const f36 = useMemo(() => getTotalOf(d['36']), [d, getTotalOf]);
  const f37 = useMemo(() => v(f35 + f36), [f35, f36]);
  const f38 = useMemo(() => getTotalOf(d['38']), [d, getTotalOf]);
  const f39 = useMemo(() => getTotalOf(d['39']), [d, getTotalOf]);
  const f40 = useMemo(() => v(f38 + f39), [f38, f39]);
  const f41 = useMemo(() => v(f37 + f40), [f37, f40]);
  const f42 = useMemo(() => v(Math.max(f34 - f41, 0)), [f34, f41]);
  const f43 = useMemo(() => getTotalOf(d['43']), [d, getTotalOf]);
  const f44 = useMemo(() => getTotalOf(d['44']), [d, getTotalOf]);
  const f45 = useMemo(() => getTotalOf(d['45']), [d, getTotalOf]);
  const f46 = useMemo(() => v(Math.max(f43 - f44 - f45, 0)), [f43, f44, f45]);
  const f47 = useMemo(() => getTotalOf(d['47']), [d, getTotalOf]);
  const f48 = useMemo(() => getTotalOf(d['48']), [d, getTotalOf]);
  const f49 = useMemo(() => v(f47 + f48), [f47, f48]);
  const f50 = useMemo(() => getTotalOf(d['50']), [d, getTotalOf]);
  const f51 = useMemo(() => getTotalOf(d['51']), [d, getTotalOf]);
  const f52 = useMemo(() => v(f50 + f51), [f50, f51]);
  const f53 = useMemo(() => v(f49 + f52), [f49, f52]);
  const f54 = useMemo(() => v(Math.max(f46 - f53, 0)), [f46, f53]);
  const f55 = useMemo(() => v(Math.max(f44 + f45 - f43, 0)), [f43, f44, f45]);
  const f57 = useMemo(() => v(Math.max(f54 - d['56'], 0)), [d, f54]);
  const f58 = useMemo(() => getTotalOf(d['58']), [d, getTotalOf]);
  const f59 = useMemo(() => getTotalOf(d['59']), [d, getTotalOf]);
  const f60 = useMemo(() => getTotalOf(d['60']), [d, getTotalOf]);
  const f61 = useMemo(() => v(Math.max(f58 - f59 - f60, 0)), [f58, f59, f60]);
  const f62 = useMemo(() => getTotalOf(d['62']), [d, getTotalOf]);
  const f63 = useMemo(() => getTotalOf(d['63']), [d, getTotalOf]);
  const f64 = useMemo(() => getTotalOf(d['64']), [d, getTotalOf]);
  const f65 = useMemo(() => v(f63 + f64), [f63, f64]);
  const f66 = useMemo(() => getTotalOf(d['66']), [d, getTotalOf]);
  const f67 = useMemo(() => getTotalOf(d['67']), [d, getTotalOf]);
  const f68 = useMemo(() => v(f66 + f67), [f66, f67]);
  const f69 = useMemo(() => v(f65 + f68), [f65, f68]);
  const f70 = useMemo(() => v(Math.max(f61 + f62 - f69, 0)), [f61, f62, f69]);
  const f71 = useMemo(() => v(Math.max(f59 + f60 - f58 - f62, 0)), [f58, f59, f60, f62]);
  const f73 = useMemo(() => v(Math.max(f70 - d['72'], 0)), [d, f70]);
  const f74 = useMemo(() => getTotalOf(d['74']), [d, getTotalOf]);
  const f75 = useMemo(() => getTotalOf(d['75']), [d, getTotalOf]);
  const f76 = useMemo(() => getTotalOf(d['76']), [d, getTotalOf]);
  const f77 = useMemo(() => getTotalOf(d['77']), [d, getTotalOf]);
  const f78 = useMemo(() => v(Math.max(f74 - f75 - f76 - f77, 0)), [f74, f75, f76, f77]);
  const f79 = useMemo(() => getTotalOf(d['79']), [d, getTotalOf]);
  const f80 = useMemo(() => getTotalOf(d['80']), [d, getTotalOf]);
  const f81 = useMemo(() => getTotalOf(d['81']), [d, getTotalOf]);
  const f82 = useMemo(() => v(f80 + f81), [f80, f81]);
  const f83 = useMemo(() => getTotalOf(d['83']), [d, getTotalOf]);
  const f84 = useMemo(() => getTotalOf(d['84']), [d, getTotalOf]);
  const f85 = useMemo(() => v(f83 + f84), [f83, f84]);
  const f86 = useMemo(() => v(f82 + f85), [f82, f85]);
  const f87 = useMemo(() => v(Math.max(f78 + f79 - f86, 0)), [f78, f79, f86]);
  const f88 = useMemo(() => v(Math.max(f75 + f76 + f77 - f74 - f79, 0)), [f74, f75, f76, f77, f79]);
  const f90 = useMemo(() => v(f87 - d['89']), [d, f87]);
  const f91 = useMemo(() => v(f41 + f42 + f53 + f57 + f69 + f73 + f86 + f90), [f41, f42, f53, f57, f69, f73, f86, f90]);
  const f139 = useMemo(() => v(d['138'] * valueFromUVT(72)), [d, valueFromUVT]);
  const f92 = useMemo(
    () => v(Math.min(d['28'] + f41 + f53 + f69 + f86 + f139, valueFromUVT(1340))),
    [d, f41, f53, f69, f86, f139, valueFromUVT],
  );
  const f93 = useMemo(() => v(Math.max(f91 - f92, 0)), [f91, f92]);
  const f97 = useMemo(() => v(Math.max(f93 + d['96'] - d['94'] - d['95'], 0)), [d, f93]);
  const f101 = useMemo(() => v(Math.max(d['99'] - d['100'], 0)), [d]);
  const f103 = useMemo(() => v(f101 - d['102']), [d, f101]);
  const f106 = useMemo(() => v(d['104'] - d['105']), [d]);
  const f118 = useMemo(() => v(d['108'] * 0.35), [d]);
  const f111 = useMemo(() => v(Math.max(f97, d['98']) + f103 + d['107'] + d['108'] - f118), [d, f103, f118, f97]);
  const f115 = useMemo(() => v(Math.max(d['112'] - d['113'] - d['114'], 0)), [d]);
  const f116 = useMemo(
    () => v(d['98'] < f97 ? valueFromTableMargin(f116MarginTable, f111) : 0),
    [d, f111, f97, valueFromTableMargin],
  );
  const f117 = useMemo(
    () => v(d['98'] > f97 ? valueFromTableMargin(f117MarginTable, f111) : 0),
    [d, f111, f97, valueFromTableMargin],
  );
  const f119 = useMemo(() => v(valueFromTableMargin(f119MarginTable, f106)), [f106, valueFromTableMargin]);
  const f120 = useMemo(() => v((d['109'] - d['110']) * 0.35), [d]);
  const f121 = useMemo(() => v(f116 + f117 + f118 + f119 + f120), [f116, f117, f118, f119, f120]);
  const f125 = useMemo(() => v(d['122'] + d['123'] + d['124']), [d]);
  const f126 = useMemo(() => v(f121 - f125), [f121, f125]);
  const f127 = useMemo(() => v(f115 * 0.2), [f115]);
  const f129 = useMemo(() => v(f126 + f127 - d['128']), [d, f126, f127]);
  const f132 = useMemo(() => getTotalOf(d['132']), [d, getTotalOf]);
  const f133 = useMemo(() => {
    const f133Value = 0.75 * f126;
    const f133Average = 0.75 * ((d.prevDeclarationValue + f126) / 2);

    if (d.declarationNumber === 1) {
      return Math.max(f126 * 0.25 - f132, 0);
    }

    if (d.declarationNumber === 2) {
      return Math.max(f126 * 0.5 - f132, 0);
    }

    return v(Math.max(Math.min(f133Value, f133Average) - f132, 0));
  }, [d.declarationNumber, f126, f132, d.prevDeclarationValue]);
  const f134 = useMemo(() => v(Math.max(f129 + f133 - d['130'] - d['131'] - f132, 0)), [d, f129, f132, f133]);
  const f136 = useMemo(
    () => v(Math.max(f129 + f133 + d['135'] - d['130'] - d['131'] - f132, 0)),
    [d, f129, f132, f133],
  );
  const f137 = useMemo(
    () => v(Math.max(d['130'] + d['131'] + f132 - f129 - f133 - d['135'], 0)),
    [d, f129, f132, f133],
  );

  const downloadData = useCallback(() => {
    const dataString = JSON.stringify(d);
    const blob = new Blob([dataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Formulario 210 - ${d.year}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [d]);

  const loadData = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const data = JSON.parse(reader.result as string);
        setData({ ...defaultForm210Data, ...data });
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);

  const resetData = useCallback(() => {
    setData(defaultForm210Data);
  }, []);

  useEffect(() => {
    if (d.declarationNumber === 1) {
      setData(prev => ({ ...prev, prevDeclarationValue: 0 }));
    }
  }, [d.declarationNumber, setData]);

  const getSetValue =
    <T extends keyof Form210Data>(id: T) =>
    (value: Form210Data[T]) =>
      setValue(id, value);

  const fieldParams: FormFieldParams = {
    year: { value: d.year, setValue: getSetValue('year') },
    declarationNumber: { value: d.declarationNumber, setValue: getSetValue('declarationNumber') },
    prevDeclarationValue: {
      value: d.prevDeclarationValue,
      disabled: d.declarationNumber === 1,
      setValue: getSetValue('prevDeclarationValue'),
    },
    28: { value: d['28'], setValue: getSetValue('28') },
    29: { value: f29, data: d['29'], locked: true, setValue: getSetValue('29') },
    30: { table: d['30'], value: f30, locked: true, setValue: getSetValue('30') },
    31: { value: f31, readOnly: true, formula: '29 - 30' },
    32: { table: d['32'], value: f32, locked: true, setValue: getSetValue('32') },
    33: { table: d['33'], value: f33, locked: true, setValue: getSetValue('33') },
    34: { value: f34, readOnly: true, formula: '32 - 33' },
    35: { table: d['35'], value: f35, disabled: f34 === 0, locked: true, setValue: getSetValue('35') },
    36: { table: d['36'], value: f36, disabled: f34 === 0, locked: true, setValue: getSetValue('36') },
    37: { value: f37, formula: '35 + 36', readOnly: true },
    38: { table: d['38'], value: f38, disabled: f34 === 0, locked: true, setValue: getSetValue('38') },
    39: { table: d['39'], value: f39, disabled: f34 === 0, locked: true, setValue: getSetValue('39') },
    40: { value: f40, readOnly: true, formula: '38 + 39' },
    41: { value: f41, readOnly: true, formula: '37 + 40' },
    42: { value: f42, readOnly: true, formula: '34 - 41' },
    43: { table: d['43'], value: f43, locked: true, setValue: getSetValue('43') },
    44: { table: d['44'], value: f44, locked: true, setValue: getSetValue('44') },
    45: { table: d['45'], value: f45, locked: true, setValue: getSetValue('45') },
    46: { value: f46, readOnly: true, formula: '43 - 44 - 45' },
    47: { table: d['47'], value: f47, disabled: f46 === 0, locked: true, setValue: getSetValue('47') },
    48: { table: d['48'], value: f48, disabled: f46 === 0, locked: true, setValue: getSetValue('48') },
    49: { value: f49, formula: '47 + 48', readOnly: true },
    50: { table: d['50'], value: f50, disabled: f46 === 0, locked: true, setValue: getSetValue('50') },
    51: { table: d['51'], value: f51, disabled: f46 === 0, locked: true, setValue: getSetValue('51') },
    52: { value: f52, readOnly: true, formula: '50 + 51' },
    53: { value: f53, readOnly: true, formula: '49 + 52' },
    54: { value: f54, readOnly: true, formula: '46 - 53' },
    55: { value: f55, readOnly: true, formula: '44 + 45 - 43' },
    56: { value: d['56'], setValue: getSetValue('56') },
    57: { value: f57, readOnly: true, formula: '54 - 56' },
    58: { table: d['58'], value: f58, locked: true, setValue: getSetValue('58') },
    59: { table: d['59'], value: f59, locked: true, setValue: getSetValue('59') },
    60: { table: d['60'], value: f60, locked: true, setValue: getSetValue('60') },
    61: { value: f61, readOnly: true, formula: '58 - 59 - 60' },
    62: { table: d['62'], value: f62, locked: true, setValue: getSetValue('62') },
    63: { table: d['63'], value: f63, locked: true, disabled: f61 + f62 === 0, setValue: getSetValue('63') },
    64: { table: d['64'], value: f64, locked: true, disabled: f61 + f62 === 0, setValue: getSetValue('64') },
    65: { value: f65, formula: '63 + 64', readOnly: true },
    66: { table: d['66'], value: f66, locked: true, disabled: f61 + f62 === 0, setValue: getSetValue('66') },
    67: { table: d['67'], value: f67, locked: true, disabled: f61 + f62 === 0, setValue: getSetValue('67') },
    68: { value: f68, readOnly: true, formula: '66 + 67' },
    69: { value: f69, readOnly: true, formula: '65 + 68' },
    70: { value: f70, readOnly: true, formula: '61 + 62 - 69' },
    71: { value: f71, readOnly: true, formula: '59 + 60 - 58 - 62' },
    72: { value: d['72'], disabled: f70 === 0, setValue: getSetValue('72') },
    73: { value: f73, readOnly: true, formula: '70 - 72' },
    74: { table: d['74'], value: f74, locked: true, setValue: getSetValue('74') },
    75: { table: d['75'], value: f75, locked: true, setValue: getSetValue('75') },
    76: { table: d['76'], value: f76, locked: true, setValue: getSetValue('76') },
    77: { table: d['77'], value: f77, locked: true, setValue: getSetValue('77') },
    78: { value: f78, readOnly: true, formula: '74 - 75 - 76 - 77' },
    79: { table: d['79'], value: f79, locked: true, setValue: getSetValue('79') },
    80: { table: d['80'], value: f80, locked: true, disabled: f78 + f79 === 0, setValue: getSetValue('80') },
    81: { table: d['81'], value: f81, locked: true, disabled: f78 + f79 === 0, setValue: getSetValue('81') },
    82: { value: f82, formula: '80 + 81', readOnly: true },
    83: { table: d['83'], value: f83, locked: true, disabled: f78 + f79 === 0, setValue: getSetValue('83') },
    84: { table: d['84'], value: f84, locked: true, disabled: f78 + f79 === 0, setValue: getSetValue('84') },
    85: { value: f85, readOnly: true, formula: '83 + 84' },
    86: { value: f86, readOnly: true, formula: '82 + 85' },
    87: { value: f87, readOnly: true, formula: '78 + 79 - 86' },
    88: { value: f88, readOnly: true, formula: '75 + 76 + 77 - 74 - 79' },
    89: { value: d['89'], disabled: f87 === 0, setValue: getSetValue('89') },
    90: { value: f90, readOnly: true, formula: '87 - 89' },
    91: {
      value: f91,
      readOnly: true,
      formula: '41 + 42 + 53 + 57 + 69 + 73 + 86 + 90',
    },
    92: {
      value: f92,
      readOnly: true,
      formula: '28 + 41 + 53 + 69 + 86 + 139',
    },
    93: { value: f93, readOnly: true, formula: '91 - 92' },
    94: { value: d['94'], setValue: getSetValue('94') },
    95: { value: d['95'], setValue: getSetValue('95') },
    96: { value: d['96'], setValue: getSetValue('96') },
    97: { value: f97, readOnly: true, formula: '93 + 96 - 94 - 95' },
    98: { value: d['98'], setValue: getSetValue('98') },
    99: { value: d['99'], setValue: getSetValue('99') },
    100: { value: d['100'], setValue: getSetValue('100') },
    101: { value: f101, readOnly: true, formula: '99 - 100' },
    102: { value: d['102'], setValue: getSetValue('102') },
    103: { value: f103, readOnly: true, formula: '101 - 102' },
    104: { value: d['104'], setValue: getSetValue('104') },
    105: { value: d['105'], setValue: getSetValue('105') },
    106: { value: f106, readOnly: true, formula: '104 - 105' },
    107: { value: d['107'], setValue: getSetValue('107') },
    108: { value: d['108'], setValue: getSetValue('108') },
    109: { value: d['109'], setValue: getSetValue('109') },
    110: { value: d['110'], setValue: getSetValue('110') },
    111: {
      value: f111,
      readOnly: true,
      formula: 'MAX(97, 98) + 103 + 107 + 108 - 118',
    },
    112: { value: d['112'], setValue: getSetValue('112') },
    113: { value: d['113'], setValue: getSetValue('113') },
    114: { value: d['114'], setValue: getSetValue('114') },
    115: { value: f115, readOnly: true, formula: '112 - 113 - 114' },
    116: { value: f116, readOnly: true },
    117: { value: f117, readOnly: true },
    118: { value: f118, readOnly: true, formula: '108 * 35%' },
    119: { value: f119, readOnly: true },
    120: { value: f120, readOnly: true, formula: '(109 - 110) * 35%' },
    121: {
      value: f121,
      readOnly: true,
      formula: '116 + 117 + 118 + 119 + 120',
    },
    122: { value: d['122'], setValue: getSetValue('122') },
    123: { value: d['123'], setValue: getSetValue('123') },
    124: { value: d['124'], setValue: getSetValue('124') },
    125: { value: f125, readOnly: true, formula: '122 + 123 + 124' },
    126: { value: f126, readOnly: true, formula: '121 - 125' },
    127: { value: f127, readOnly: true, formula: '115 * 20%' },
    128: { value: d['128'], setValue: getSetValue('128') },
    129: { value: f129, readOnly: true, formula: '126 + 127 - 128' },
    130: { value: d['130'], setValue: getSetValue('130') },
    131: { value: d['131'], setValue: getSetValue('131') },
    132: { table: d['132'], value: f132, locked: true, setValue: getSetValue('132') },
    133: { value: f133, readOnly: true },
    134: {
      value: f134,
      readOnly: true,
      formula: '129 + 133 - 130 - 131 - 132',
    },
    135: { value: d['135'], setValue: getSetValue('135') },
    136: {
      value: f136,
      readOnly: true,
      formula: '129 + 133 + 135 - 130 - 131 - 132',
    },
    137: {
      value: f137,
      readOnly: true,
      formula: '130 + 131 + 132 - 129 - 133 - 135',
    },
    138: { value: d['138'], format: 'number', min: 0, max: 4, setValue: getSetValue('138') },
    139: { value: f139, readOnly: true, formula: '138 * 72UVT' },
  };

  return (
    <Form210Context.Provider
      value={{
        uvt,
        minimumSalary,
        setValue,
        setData,
        valueToUVT,
        valueFromUVT,
        downloadData,
        loadData,
        resetData,
        fieldParams,
      }}
    >
      {children}
    </Form210Context.Provider>
  );
};

export const useForm210 = (): Form210ContextEntity => {
  const context = useContext(Form210Context);

  if (context === null) {
    throw new Error('useForm210 must be used within a Form210Provider');
  }

  return context;
};

export const useForm210FieldParams = <ParamID extends FieldParamId>(id: ParamID): FormFieldParams[ParamID] => {
  const { fieldParams } = useForm210();

  if (fieldParams[id] === undefined) {
    throw new Error(`Field params ${id} does not exist in this context`);
  }

  return fieldParams[id];
};
