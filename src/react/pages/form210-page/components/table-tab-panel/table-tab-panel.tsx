import { TableTabPanelStyle } from './table-tab-panel.style';

type TableTabPanelProps = {
  children: React.ReactNode;
};

export const TableTabPanel = ({ children }: TableTabPanelProps) => {
  return <TableTabPanelStyle>{children}</TableTabPanelStyle>;
};
