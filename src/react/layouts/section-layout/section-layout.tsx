import { useClassNames } from 'polpo/hooks';

import './section-layout.styles.css';

interface SectionLayoutProps {
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  style?: React.CSSProperties;
  padding?: string;
  fitHeightContent?: boolean;
  alignContent?: React.CSSProperties['alignContent'];
  ref?: React.Ref<HTMLElement>;
}

export const SectionLayout = ({
  children,
  className = '',
  contentClassName = '',
  style = {},
  padding = '0 2em',
  fitHeightContent = false,
  alignContent = 'center',
  ref,
}: SectionLayoutProps) => {
  const sectionLayoutContentClassName = useClassNames({
    [contentClassName]: Boolean(contentClassName),
    'section-layout-min-height': !fitHeightContent,
    'section-content': true,
  });

  return (
    <section
      className={`section-layout ${className}`}
      ref={ref}
      style={{ ...style, '--padding': padding } as React.CSSProperties}
    >
      <section
        className={sectionLayoutContentClassName}
        style={{ alignContent: (!fitHeightContent && alignContent) || undefined }}
      >
        {children}
      </section>
    </section>
  );
};
