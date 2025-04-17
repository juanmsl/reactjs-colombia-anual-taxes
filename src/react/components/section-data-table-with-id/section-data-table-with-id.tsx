import { KeyValuesOf } from 'polpo/ui';

import { SectionDataTable } from '@components/section-data-table';
import { useForm210FieldParams } from '@contexts';
import { Form210Data, Form210DataItem } from '@core/constants';

type SectionDataTableProps = {
  id: KeyValuesOf<Form210Data, Array<Form210DataItem>>;
  title?: string;
};

export const SectionDataTableWithID = ({ id, title }: SectionDataTableProps) => {
  const { table = [], setValue } = useForm210FieldParams(id);

  return <SectionDataTable onChange={setValue} defaultData={table} title={title} />;
};
