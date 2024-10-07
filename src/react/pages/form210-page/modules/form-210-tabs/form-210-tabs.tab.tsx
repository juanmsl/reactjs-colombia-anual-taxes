import { Tooltip, Typography } from '@juanmsl/ui';

import { Form210TabStyle } from './form-210-tabs.style';

type Form210TabProps = {
  children?: React.ReactNode;
  tooltip?: string;
};

export const Form210Tab = ({ children, tooltip }: Form210TabProps) => {
  return (
    <Tooltip content={tooltip} offset={10}>
      <Form210TabStyle>
        <Typography nowrap noPadding>
          {children}
        </Typography>
      </Form210TabStyle>
    </Tooltip>
  );
};
