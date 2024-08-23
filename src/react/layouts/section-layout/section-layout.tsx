import { SectionLayoutContentStyle, SectionLayoutStyle } from './section-layout.style';

type SectionLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
  padding?: string;
};

export const SectionLayout = ({
  children,
  className = '',
  contentClassName = '',
  style = {},
  padding = '0 2em',
}: SectionLayoutProps) => {
  return (
    <SectionLayoutStyle className={className} style={style} $padding={padding}>
      <SectionLayoutContentStyle className={contentClassName}>{children}</SectionLayoutContentStyle>
    </SectionLayoutStyle>
  );
};
