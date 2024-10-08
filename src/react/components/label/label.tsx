import { Typography } from '@juanmsl/ui';

export type LabelProps = {
  children: React.ReactNode;
  className?: string;
};

export const Label = ({ children, className }: LabelProps) => {
  return (
    <Typography noPadding variant='label' weight='bold' className={className}>
      {children}
    </Typography>
  );
};
