import { Typography } from '@juanmsl/ui';

import { TableTabPanelTitleStyle } from './table-tab-panel-title.style';

import { FieldInput } from '@components/field-input';

type TableTabPanelTitleProps = {
  children: React.ReactNode;
  id?: `${number}`;
};

export const TableTabPanelTitle = ({ children, id }: TableTabPanelTitleProps) => {
  return (
    <TableTabPanelTitleStyle className='recommended-width'>
      <Typography variant='header3' weight='bold'>
        {children}
      </Typography>
      {id ? <FieldInput id={id} readOnly /> : null}
    </TableTabPanelTitleStyle>
  );
};
