import { Tooltip, Typography } from '@juanmsl/ui';

import { Form210TabStyle } from '@components/form-210-tabs/form-210-tabs.style';
import { Form210Sections } from '@core/constants';

type Form210TabProps = {
  children?: React.ReactNode;
  id: Form210Sections;
  tooltip?: string;
};

export const Form210Tab = ({ children, id, tooltip }: Form210TabProps) => {
  return (
    <Tooltip content={tooltip} offset={10}>
      <span>
        <Form210TabStyle id={id}>
          <Typography nowrap noPadding>
            {children}
          </Typography>
        </Form210TabStyle>
      </span>
    </Tooltip>
  );
};
