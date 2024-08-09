import { useClassNames } from '@juanmsl/hooks';

import { Label, LabelProps } from '@components/label';

type FormLabelProps = LabelProps & {
  colSpan?: number;
  rowSpan?: number;
  className?: string;
  atBottom?: boolean;
};

export const FormLabel = ({ colSpan, rowSpan, className, atBottom, children, ...labelProps }: FormLabelProps) => {
  const labelClassName = useClassNames({
    'table-label': true,
    'at-bottom': atBottom,
    [className]: Boolean(className),
  });

  return (
    <td colSpan={colSpan} rowSpan={rowSpan} className={labelClassName}>
      <Label {...labelProps}>{children}</Label>
    </td>
  );
};
