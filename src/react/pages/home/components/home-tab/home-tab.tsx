import { Typography } from '@juanmsl/ui';

import { HomeTabStyle } from './home-tab.style';

import { HomeTabsId } from '@core/constants';

type HomeTabProps = {
  children: React.ReactNode;
  id: HomeTabsId;
};

export const HomeTab = ({ children, id }: HomeTabProps) => {
  return (
    <HomeTabStyle id={id}>
      <Typography variant='label' weight='bold' nowrap>
        {children}
      </Typography>
    </HomeTabStyle>
  );
};
