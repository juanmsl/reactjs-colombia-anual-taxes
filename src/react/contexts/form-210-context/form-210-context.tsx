import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { FieldParams } from '@components/field-input';
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

type Form210ContextEntity = Form210Data & {
  uvt: number;
  minimumSalary: number;
  f29: number;
  f30: number;
  f31: number;
  f32: number;
  f33: number;
  f34: number;
  f35: number;
  f36: number;
  f37: number;
  f38: number;
  f39: number;
  f40: number;
  f41: number;
  f42: number;
  f43: number;
  f44: number;
  f45: number;
  f46: number;
  f47: number;
  f48: number;
  f49: number;
  f50: number;
  f51: number;
  f52: number;
  f53: number;
  f54: number;
  f55: number;
  f57: number;
  f58: number;
  f59: number;
  f60: number;
  f61: number;
  f62: number;
  f63: number;
  f64: number;
  f65: number;
  f66: number;
  f67: number;
  f68: number;
  f69: number;
  f70: number;
  f71: number;
  f73: number;
  f74: number;
  f75: number;
  f76: number;
  f77: number;
  f78: number;
  f79: number;
  f80: number;
  f81: number;
  f82: number;
  f83: number;
  f84: number;
  f85: number;
  f86: number;
  f87: number;
  f88: number;
  f90: number;
  f91: number;
  f92: number;
  f93: number;
  f97: number;
  f101: number;
  f103: number;
  f106: number;
  f111: number;
  f115: number;
  f116: number;
  f117: number;
  f118: number;
  f119: number;
  f120: number;
  f121: number;
  f125: number;
  f126: number;
  f127: number;
  f129: number;
  f132: number;
  f133: number;
  f134: number;
  f136: number;
  f137: number;
  f139: number;
  setValue: (id: string, value: number) => void;
  setData: React.Dispatch<React.SetStateAction<Form210Data>>;
  updateTable: (id: `${number}`) => (value: Array<Form210DataItem>) => void;
  valueToUVT: (value: number) => number;
  valueFromUVT: (value: number) => number;
  downloadData: () => void;
  loadData: () => void;
  resetData: () => void;
  fieldParams: { [key: `_${number}`]: FieldParams };
};

const Form210Context = createContext<Form210ContextEntity | null>(null);

type Form210ProviderProps = {
  children: React.ReactNode;
};

export const Form210Provider = ({ children }: Form210ProviderProps) => {
  const [data, setData] = useState<Form210Data>(() => {
    const data = localStorage.getItem(LocalStorage.FORM_210_DATA);

    if (data) {
      return { ...defaultForm210Data, ...JSON.parse(data) };
    }

    return defaultForm210Data;
  });

  const {
    year,
    declarationNumber,
    prevDeclarationValue,
    f28,
    _29,
    _30,
    _32,
    _33,
    _35,
    _36,
    _38,
    _39,
    _43,
    _44,
    _45,
    _47,
    _48,
    _50,
    _51,
    f56,
    _58,
    _59,
    _60,
    _62,
    _63,
    _64,
    _66,
    _67,
    f72,
    _74,
    _75,
    _76,
    _77,
    _79,
    _80,
    _81,
    _83,
    _84,
    f89,
    f94,
    f95,
    f96,
    f98,
    f99,
    f100,
    f102,
    f104,
    f105,
    f107,
    f108,
    f109,
    f110,
    f112,
    f113,
    f114,
    f122,
    f123,
    f124,
    f128,
    f130,
    f131,
    _132,
    f135,
    f138,
  } = data;

  const [{ uvt, minimumSalary }, setYearData] = useState<YearForm210Data>(() => {
    if (year in YearsForm210Data) {
      return YearsForm210Data[year];
    }

    const years = Object.keys(YearsForm210Data);
    const selectedYear = years[years.length - 2];

    return YearsForm210Data[selectedYear];
  });

  useEffect(() => {
    const years = Object.keys(YearsForm210Data);
    const selectedYear = years[years.length - 2];

    setYearData(YearsForm210Data[year] ?? YearsForm210Data[selectedYear]);
  }, [year]);

  const valueToUVT = useCallback<Form210ContextEntity['valueToUVT']>((value: number) => Math.round(value / uvt), [uvt]);

  const valueFromUVT = useCallback<Form210ContextEntity['valueFromUVT']>((value: number) => value * uvt, [uvt]);

  const setValue = useCallback<Form210ContextEntity['setValue']>(
    (id: string, value: number) => {
      const { min = null, max = null } = Form210DataLimits[`f${id}`] ?? {};

      const minValue = min !== null ? valueFromUVT(min) : null;
      const maxValue = max !== null ? valueFromUVT(max) : null;

      const minV = minValue !== null ? Math.max(value, minValue) : value;
      const maxV = maxValue !== null ? Math.min(minV, maxValue) : minV;

      setData(prev => ({
        ...prev,
        [`f${id}`]: maxV,
      }));
    },
    [valueFromUVT],
  );

  const updateTable = useCallback<Form210ContextEntity['updateTable']>(
    (id: `${number}`) => (value: Array<Form210DataItem>) => {
      setData(prev => ({
        ...prev,
        [`_${id}`]: value,
      }));
    },
    [setData],
  );

  useEffect(() => {
    localStorage.setItem(LocalStorage.FORM_210_DATA, JSON.stringify(data));
  }, [data]);

  const valueFromTableMargin = useCallback(
    (tableMargin: MarginTableEntity, value) => {
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

  const f29 = useMemo(() => Object.values(_29).reduce((total, data) => total + getTotalOf(data), 0), [_29, getTotalOf]);
  const f30 = useMemo(() => getTotalOf(_30), [_30, getTotalOf]);
  const f31 = useMemo(() => v(f29 - f30), [f29, f30]);
  const f32 = useMemo(() => getTotalOf(_32), [_32, getTotalOf]);
  const f33 = useMemo(() => getTotalOf(_33), [_33, getTotalOf]);
  const f34 = useMemo(() => v(f32 - f33), [f32, f33]);
  const f35 = useMemo(() => getTotalOf(_35), [_35, getTotalOf]);
  const f36 = useMemo(() => getTotalOf(_36), [_36, getTotalOf]);
  const f37 = useMemo(() => v(f35 + f36), [f35, f36]);
  const f38 = useMemo(() => getTotalOf(_38), [_38, getTotalOf]);
  const f39 = useMemo(() => getTotalOf(_39), [_39, getTotalOf]);
  const f40 = useMemo(() => v(f38 + f39), [f38, f39]);
  const f41 = useMemo(() => v(f37 + f40), [f37, f40]);
  const f42 = useMemo(() => v(Math.max(f34 - f41, 0)), [f34, f41]);
  const f43 = useMemo(() => getTotalOf(_43), [_43, getTotalOf]);
  const f44 = useMemo(() => getTotalOf(_44), [_44, getTotalOf]);
  const f45 = useMemo(() => getTotalOf(_45), [_45, getTotalOf]);
  const f46 = useMemo(() => v(Math.max(f43 - f44 - f45, 0)), [f43, f44, f45]);
  const f47 = useMemo(() => getTotalOf(_47), [_47, getTotalOf]);
  const f48 = useMemo(() => getTotalOf(_48), [_48, getTotalOf]);
  const f49 = useMemo(() => v(f47 + f48), [f47, f48]);
  const f50 = useMemo(() => getTotalOf(_50), [_50, getTotalOf]);
  const f51 = useMemo(() => getTotalOf(_51), [_51, getTotalOf]);
  const f52 = useMemo(() => v(f50 + f51), [f50, f51]);
  const f53 = useMemo(() => v(f49 + f52), [f49, f52]);
  const f54 = useMemo(() => v(Math.max(f46 - f53, 0)), [f46, f53]);
  const f55 = useMemo(() => v(Math.max(f44 + f45 - f43, 0)), [f43, f44, f45]);
  const f57 = useMemo(() => v(Math.max(f54 - f56, 0)), [f54, f56]);
  const f58 = useMemo(() => getTotalOf(_58), [_58, getTotalOf]);
  const f59 = useMemo(() => getTotalOf(_59), [_59, getTotalOf]);
  const f60 = useMemo(() => getTotalOf(_60), [_60, getTotalOf]);
  const f61 = useMemo(() => v(Math.max(f58 - f59 - f60, 0)), [f58, f59, f60]);
  const f62 = useMemo(() => getTotalOf(_62), [_62, getTotalOf]);
  const f63 = useMemo(() => getTotalOf(_63), [_63, getTotalOf]);
  const f64 = useMemo(() => getTotalOf(_64), [_64, getTotalOf]);
  const f65 = useMemo(() => v(f63 + f64), [f63, f64]);
  const f66 = useMemo(() => getTotalOf(_66), [_66, getTotalOf]);
  const f67 = useMemo(() => getTotalOf(_67), [_67, getTotalOf]);
  const f68 = useMemo(() => v(f66 + f67), [f66, f67]);
  const f69 = useMemo(() => v(f65 + f68), [f65, f68]);
  const f70 = useMemo(() => v(Math.max(f61 + f62 - f69, 0)), [f61, f62, f69]);
  const f71 = useMemo(() => v(Math.max(f59 + f60 - f58 - f62, 0)), [f58, f59, f60, f62]);
  const f73 = useMemo(() => v(Math.max(f70 - f72, 0)), [f70, f72]);
  const f74 = useMemo(() => getTotalOf(_74), [_74, getTotalOf]);
  const f75 = useMemo(() => getTotalOf(_75), [_75, getTotalOf]);
  const f76 = useMemo(() => getTotalOf(_76), [_76, getTotalOf]);
  const f77 = useMemo(() => getTotalOf(_77), [_77, getTotalOf]);
  const f78 = useMemo(() => v(Math.max(f74 - f75 - f76 - f77, 0)), [f74, f75, f76, f77]);
  const f79 = useMemo(() => getTotalOf(_79), [_79, getTotalOf]);
  const f80 = useMemo(() => getTotalOf(_80), [_80, getTotalOf]);
  const f81 = useMemo(() => getTotalOf(_81), [_81, getTotalOf]);
  const f82 = useMemo(() => v(f80 + f81), [f80, f81]);
  const f83 = useMemo(() => getTotalOf(_83), [_83, getTotalOf]);
  const f84 = useMemo(() => getTotalOf(_84), [_84, getTotalOf]);
  const f85 = useMemo(() => v(f83 + f84), [f83, f84]);
  const f86 = useMemo(() => v(f82 + f85), [f82, f85]);
  const f87 = useMemo(() => v(Math.max(f78 + f79 - f86, 0)), [f78, f79, f86]);
  const f88 = useMemo(() => v(Math.max(f75 + f76 + f77 - f74 - f79, 0)), [f74, f75, f76, f77, f79]);
  const f90 = useMemo(() => v(f87 - f89), [f87, f89]);
  const f91 = useMemo(() => v(f41 + f42 + f53 + f57 + f69 + f73 + f86 + f90), [f41, f42, f53, f57, f69, f73, f86, f90]);
  const f139 = useMemo(() => v(f138 * valueFromUVT(72)), [f138, valueFromUVT]);
  const f92 = useMemo(
    () => v(Math.min(f28 + f41 + f53 + f69 + f86 + f139, valueFromUVT(1340))),
    [f28, f41, f53, f69, f86, f139, valueFromUVT],
  );
  const f93 = useMemo(() => v(Math.max(f91 - f92, 0)), [f91, f92]);
  const f97 = useMemo(() => v(Math.max(f93 + f96 - f94 - f95, 0)), [f93, f94, f95, f96]);
  const f101 = useMemo(() => v(Math.max(f99 - f100, 0)), [f99, f100]);
  const f103 = useMemo(() => v(f101 - f102), [f101, f102]);
  const f106 = useMemo(() => v(f104 - f105), [f104, f105]);
  const f118 = useMemo(() => v(f108 * 0.35), [f108]);
  const f111 = useMemo(() => v(Math.max(f97, f98) + f103 + f107 + f108 - f118), [f103, f107, f108, f118, f97, f98]);
  const f115 = useMemo(() => v(Math.max(f112 - f113 - f114, 0)), [f112, f113, f114]);
  const f116 = useMemo(
    () => v(f98 < f97 ? valueFromTableMargin(f116MarginTable, f111) : 0),
    [f111, f97, f98, valueFromTableMargin],
  );
  const f117 = useMemo(
    () => v(f98 > f97 ? valueFromTableMargin(f117MarginTable, f111) : 0),
    [f111, f97, f98, valueFromTableMargin],
  );
  const f119 = useMemo(() => v(valueFromTableMargin(f119MarginTable, f106)), [f106, valueFromTableMargin]);
  const f120 = useMemo(() => v((f109 - f110) * 0.35), [f109, f110]);
  const f121 = useMemo(() => v(f116 + f117 + f118 + f119 + f120), [f116, f117, f118, f119, f120]);
  const f125 = useMemo(() => v(f122 + f123 + f124), [f122, f123, f124]);
  const f126 = useMemo(() => v(f121 - f125), [f121, f125]);
  const f127 = useMemo(() => v(f115 * 0.2), [f115]);
  const f129 = useMemo(() => v(f126 + f127 - f128), [f126, f127, f128]);
  const f132 = useMemo(() => getTotalOf(_132), [_132, getTotalOf]);
  const f133 = useMemo(() => {
    const f133Value = 0.75 * f126;
    const f133Average = 0.75 * ((prevDeclarationValue + f126) / 2);

    if (declarationNumber === 1) {
      return Math.max(f126 * 0.25 - f132, 0);
    }

    if (declarationNumber === 2) {
      return Math.max(f126 * 0.5 - f132, 0);
    }

    return v(Math.max(Math.min(f133Value, f133Average) - f132, 0));
  }, [declarationNumber, f126, f132, prevDeclarationValue]);
  const f134 = useMemo(() => v(Math.max(f129 + f133 - f130 - f131 - f132, 0)), [f129, f130, f131, f132, f133]);
  const f136 = useMemo(
    () => v(Math.max(f129 + f133 + f135 - f130 - f131 - f132, 0)),
    [f129, f130, f131, f132, f133, f135],
  );
  const f137 = useMemo(
    () => v(Math.max(f130 + f131 + f132 - f129 - f133 - f135, 0)),
    [f129, f130, f131, f132, f133, f135],
  );

  const downloadData = useCallback(() => {
    const dataString = JSON.stringify(data);
    const blob = new Blob([dataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Formulario 210 - ${year}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [year, data]);

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
    if (declarationNumber === 1) {
      setData(prev => ({ ...prev, prevDeclarationValue: 0 }));
    }
  }, [declarationNumber, setData]);

  const fieldParams: Form210ContextEntity['fieldParams'] = {
    _28: {},
    _29: { locked: true },
    _30: { locked: true },
    _31: { readOnly: true, formula: '29 - 30' },
    _32: { locked: true },
    _33: { locked: true },
    _34: { readOnly: true, formula: '32 - 33' },
    _35: { disabled: f34 === 0, locked: true },
    _36: { disabled: f34 === 0, locked: true },
    _37: { formula: '35 + 36', readOnly: true },
    _38: { disabled: f34 === 0, locked: true },
    _39: { disabled: f34 === 0, locked: true },
    _40: { readOnly: true, formula: '38 + 39' },
    _41: { readOnly: true, formula: '37 + 40' },
    _42: { readOnly: true, formula: '34 - 41' },
    _43: { locked: true },
    _44: { locked: true },
    _45: { locked: true },
    _46: { readOnly: true, formula: '43 - 44 - 45' },
    _47: { disabled: f46 === 0, locked: true },
    _48: { disabled: f46 === 0, locked: true },
    _49: { formula: '47 + 48', readOnly: true },
    _50: { disabled: f46 === 0, locked: true },
    _51: { disabled: f46 === 0, locked: true },
    _52: { readOnly: true, formula: '50 + 51' },
    _53: { readOnly: true, formula: '49 + 52' },
    _54: { readOnly: true, formula: '46 - 53' },
    _55: { readOnly: true, formula: '44 + 45 - 43' },
    _56: {},
    _57: { readOnly: true, formula: '54 - 56' },
    _58: { locked: true },
    _59: { locked: true },
    _60: { locked: true },
    _61: { readOnly: true, formula: '58 - 59 - 60' },
    _62: { locked: true },
    _63: { locked: true, disabled: f61 + f62 === 0 },
    _64: { locked: true, disabled: f61 + f62 === 0 },
    _65: { formula: '63 + 64', readOnly: true },
    _66: { locked: true, disabled: f61 + f62 === 0 },
    _67: { locked: true, disabled: f61 + f62 === 0 },
    _68: { readOnly: true, formula: '66 + 67' },
    _69: { readOnly: true, formula: '65 + 68' },
    _70: { readOnly: true, formula: '61 + 62 - 69' },
    _71: { readOnly: true, formula: '59 + 60 - 58 - 62' },
    _72: { disabled: f70 === 0 },
    _73: { readOnly: true, formula: '70 - 72' },
    _74: { locked: true },
    _75: { locked: true },
    _76: { locked: true },
    _77: { locked: true },
    _78: { readOnly: true, formula: '74 - 75 - 76 - 77' },
    _79: { locked: true },
    _80: { locked: true, disabled: f78 + f79 === 0 },
    _81: { locked: true, disabled: f78 + f79 === 0 },
    _82: { formula: '80 + 81', readOnly: true },
    _83: { locked: true, disabled: f78 + f79 === 0 },
    _84: { locked: true, disabled: f78 + f79 === 0 },
    _85: { readOnly: true, formula: '83 + 84' },
    _86: { readOnly: true, formula: '82 + 85' },
    _87: { readOnly: true, formula: '78 + 79 - 86' },
    _88: { readOnly: true, formula: '75 + 76 + 77 - 74 - 79' },
    _89: { disabled: f87 === 0 },
    _90: { readOnly: true, formula: '87 - 89' },
    _91: { readOnly: true, formula: '41 + 42 + 53 + 57 + 69 + 73 + 86 + 90' },
    _92: { readOnly: true, formula: '28 + 41 + 53 + 69 + 86 + 139' },
    _93: { readOnly: true, formula: '91 - 92' },
    _94: {},
    _95: {},
    _96: {},
    _97: { readOnly: true, formula: '93 + 96 - 94 - 95' },
    _98: {},
    _99: {},
    _100: {},
    _101: { readOnly: true, formula: '99 - 100' },
    _102: {},
    _103: { readOnly: true, formula: '101 - 102' },
    _104: {},
    _105: {},
    _106: { readOnly: true, formula: '104 - 105' },
    _107: {},
    _108: {},
    _109: {},
    _110: {},
    _111: { readOnly: true, formula: 'MAX(97, 98) + 103 + 107 + 108 - 118' },
    _112: {},
    _113: {},
    _114: {},
    _115: { readOnly: true, formula: '112 - 113 - 114' },
    _116: { readOnly: true },
    _117: { readOnly: true },
    _118: { readOnly: true, formula: '108 * 35%' },
    _119: { readOnly: true },
    _120: { readOnly: true, formula: '(109 - 110) * 35%' },
    _121: { readOnly: true, formula: '116 + 117 + 118 + 119 + 120' },
    _122: {},
    _123: {},
    _124: {},
    _125: { readOnly: true, formula: '122 + 123 + 124' },
    _126: { readOnly: true, formula: '121 - 125' },
    _127: { readOnly: true, formula: '115 * 20%' },
    _128: {},
    _129: { readOnly: true, formula: '126 + 127 - 128' },
    _130: {},
    _131: {},
    _132: { locked: true },
    _133: { readOnly: true },
    _134: { readOnly: true, formula: '129 + 133 - 130 - 131 - 132' },
    _135: {},
    _136: { readOnly: true, formula: '129 + 133 + 135 - 130 - 131 - 132' },
    _137: { readOnly: true, formula: '130 + 131 + 132 - 129 - 133 - 135' },
    _138: { format: 'number', min: 0, max: 4 },
    _139: { readOnly: true, formula: '138 * 72UVT' },
  };

  return (
    <Form210Context.Provider
      value={{
        ...data,
        uvt,
        minimumSalary,
        f29,
        f30,
        f31,
        f32,
        f33,
        f34,
        f35,
        f36,
        f37,
        f38,
        f39,
        f40,
        f41,
        f42,
        f43,
        f44,
        f45,
        f46,
        f47,
        f48,
        f49,
        f50,
        f51,
        f52,
        f53,
        f54,
        f55,
        f57,
        f58,
        f59,
        f60,
        f61,
        f62,
        f63,
        f64,
        f65,
        f66,
        f67,
        f68,
        f69,
        f70,
        f71,
        f73,
        f74,
        f75,
        f76,
        f77,
        f78,
        f79,
        f80,
        f81,
        f82,
        f83,
        f84,
        f85,
        f86,
        f87,
        f88,
        f90,
        f91,
        f92,
        f93,
        f97,
        f101,
        f103,
        f106,
        f111,
        f115,
        f116,
        f117,
        f118,
        f119,
        f120,
        f121,
        f125,
        f126,
        f127,
        f129,
        f132,
        f133,
        f134,
        f136,
        f137,
        f139,
        setValue,
        setData,
        updateTable,
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

export const useForm210Field = (id: number | `${number}`): number => {
  const context = useForm210();

  const labelId = `f${id}`;

  if (context[labelId] === undefined) {
    throw new Error(`Field ${labelId} does not exist in this context`);
  }

  return context[labelId];
};

export const useForm210FieldParams = (id: number | `${number}`): FieldParams => {
  const { fieldParams } = useForm210();

  const labelId = `_${id}`;

  if (fieldParams[labelId] === undefined) {
    throw new Error(`Field params ${labelId} does not exist in this context`);
  }

  return fieldParams[labelId];
};

export const useForm210Table = (id: number | `${number}`): Array<Form210DataItem> => {
  const context = useForm210();

  const labelId = `_${id}`;

  if (context[labelId] === undefined) {
    throw new Error(`Table ${labelId} does not exist in this context`);
  }

  return context[labelId];
};
