import { Checkbox, Typography } from '@juanmsl/ui';

import { ToggleButtonContainerStyle, ToggleButtonStyle } from './toggle-button.style';

type ToggleButtonProps = {
  name: string;
  label?: string;
  value?: boolean;
  setValue: (value: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const ToggleButton = ({ value, name, setValue, label, className, style }: ToggleButtonProps) => {
  return (
    <ToggleButtonContainerStyle className={className} style={style}>
      <ToggleButtonStyle className={value ? 'is-checked' : ''}>
        <span className='toggle-button-dot' />
        <Checkbox name={name} value={value} setValue={setValue} className='toggle-button-checkbox' />
      </ToggleButtonStyle>
      {label ? <Typography variant='label'>{label}</Typography> : null}
    </ToggleButtonContainerStyle>
  );
};
