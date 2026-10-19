import { Tooltip, Typography } from 'polpo/components';

import './form-210-tabs.styles.css';

type Form210TabProps = {
  children?: React.ReactNode;
  tooltip?: string;
};

export const Form210Tab = ({ children, tooltip }: Form210TabProps) => {
  return (
    <Tooltip content={tooltip} offset={10}>
      <span className='form210-tab'>
        <Typography nowrap noPadding>
          {children}
        </Typography>
      </span>
    </Tooltip>
  );
};
