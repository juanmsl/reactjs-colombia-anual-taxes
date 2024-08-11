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
} from '@core/constants';
import { roundNumber } from '@helpers';

const Form210Context = createContext(null);

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
    uvt,
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
    f140,
    f141,
  } = data;

  const valueToUVT = useCallback((value: number) => Math.round(value / uvt), [uvt]);

  const valueFromUVT = useCallback((value: number) => value * uvt, [uvt]);

  const setValue = useCallback(
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

  const updateTable = useCallback(
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
      const match = tableMargin.find(({ uvt }) => valueUVT >= uvt);

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
      return f126 * 0.25 - f132;
    }

    if (declarationNumber === 2) {
      return f126 * 0.5 - f132;
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

  return (
    <Form210Context.Provider
      value={{
        year,
        uvt,
        declarationNumber,
        prevDeclarationValue,
        f28,
        f29,
        _29,
        f30,
        _30,
        f31,
        f32,
        _32,
        f33,
        _33,
        f34,
        f35,
        _35,
        f36,
        _36,
        f37,
        f38,
        _38,
        f39,
        _39,
        f40,
        f41,
        f42,
        f43,
        _43,
        f44,
        _44,
        f45,
        _45,
        f46,
        f47,
        _47,
        f48,
        _48,
        f49,
        f50,
        _50,
        f51,
        _51,
        f52,
        f53,
        f54,
        f55,
        f56,
        f57,
        f58,
        _58,
        f59,
        _59,
        f60,
        _60,
        f61,
        f62,
        _62,
        f63,
        _63,
        f64,
        _64,
        f65,
        f66,
        _66,
        f67,
        _67,
        f68,
        f69,
        f70,
        f71,
        f72,
        f73,
        f74,
        _74,
        f75,
        _75,
        f76,
        _76,
        f77,
        _77,
        f78,
        f79,
        _79,
        f80,
        _80,
        f81,
        _81,
        f82,
        f83,
        _83,
        f84,
        _84,
        f85,
        f86,
        f87,
        f88,
        f89,
        f90,
        f91,
        f92,
        f93,
        f94,
        f95,
        f96,
        f97,
        f98,
        f99,
        f100,
        f101,
        f102,
        f103,
        f104,
        f105,
        f106,
        f107,
        f108,
        f109,
        f110,
        f111,
        f112,
        f113,
        f114,
        f115,
        f116,
        f117,
        f118,
        f119,
        f120,
        f121,
        f122,
        f123,
        f124,
        f125,
        f126,
        f127,
        f128,
        f129,
        f130,
        f131,
        f132,
        _132,
        f133,
        f134,
        f135,
        f136,
        f137,
        f138,
        f139,
        f140,
        f141,
        setValue,
        setData,
        updateTable,
        valueToUVT,
        valueFromUVT,
      }}
    >
      {children}
    </Form210Context.Provider>
  );
};

export const useForm210 = () => {
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

export const useForm210Table = (id: number | `${number}`): Array<Form210DataItem> => {
  const context = useForm210();

  const labelId = `_${id}`;

  if (context[labelId] === undefined) {
    throw new Error(`Table ${labelId} does not exist in this context`);
  }

  return context[labelId];
};
