import { useClassNames } from '@juanmsl/hooks';

import { SectionLayoutContentStyle, SectionLayoutStyle } from './section-layout.style';

type SectionLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
  padding?: string;
  fitHeightContent?: boolean;
};

export const SectionLayout = ({
  children,
  className = '',
  contentClassName = '',
  style = {},
  padding = '0 2em',
  fitHeightContent = false,
}: SectionLayoutProps) => {
  const sectionLayoutContentClassName = useClassNames({
    [contentClassName]: Boolean(contentClassName),
    'section-layout-min-height': !fitHeightContent,
  });

  return (
    <SectionLayoutStyle className={className} style={style} $padding={padding}>
      <SectionLayoutContentStyle className={sectionLayoutContentClassName}>{children}</SectionLayoutContentStyle>
    </SectionLayoutStyle>
  );
};
