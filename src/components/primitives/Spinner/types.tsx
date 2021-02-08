import type { ColorProps, SpaceProps, PositionProps } from 'styled-system';

export type ISpinnerProps = ColorProps &
  SpaceProps &
  PositionProps & {
    style?: any | undefined;
    size?: 'sm' | 'lg' | 'small' | 'large';
    accessibilityLabel?: string;
    variant?: string;
    duration?: number;
    renderProp?: JSX.Element | JSX.Element[];
  };
