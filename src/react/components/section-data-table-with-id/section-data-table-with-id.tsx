import { SectionDataTable } from '@components/section-data-table';
import { useForm210, useForm210Table } from '@contexts';

type SectionDataTableProps = {
  id?: `${number}`;
  title?: string;
};

export const SectionDataTableWithID = ({ id, title }: SectionDataTableProps) => {
  const { updateTable } = useForm210();
  const value = useForm210Table(id);

  return <SectionDataTable id={id} onChange={updateTable(id)} defaultData={value} title={title} />;
};
