import type { IBoxProps } from '../Box';

export type ISliderProps = IBoxProps & {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  isReadOnly?: boolean;
  trackColor?: string;
  // TODO: need to be implemented
  // onFocus?: () => void;
  // onBlur?: () => void;
  // onMouse?: () => void;
  // orientation?: string;
  // getAriaValueText?: (value?: number) => string;
  size?: 'sm' | 'md' | 'lg';
  colorScheme?: string;
  name?: string;
  id?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isReversed?: boolean;
  // Steps when using volume up/down gestures or Swipe up/down gestures on iOS.
  accessibilityIncrementSteps?: number;

  // Steps when using volume up/down gestures or Swipe up/down gestures on iOS.
  accessibilityDecrementSteps?: number;
};
export type ISliderContextProps = {
  trackColor?: string;
  sliderOffset?: number;
  colorScheme?: string;
  activeColor?: string;
  barSize?: number;
  sliderSize?: number;
  thumbSize?: number;
  panResponder?: any;
  isReversed?: boolean;
};
