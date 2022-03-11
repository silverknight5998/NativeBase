import { getColorScheme, mode } from '../tools';
export const SliderTrack = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      bg: `${simplifiedColorScheme}.100`,
      borderRadius: 'lg',
      overflow: 'hidden',
      _pressable: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
  },
};

export const SliderThumb = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      borderRadius: 99999,
      zIndex: 999,
      alignItems: 'center',
      justifyContent: 'center',
      bg: mode(
        `${simplifiedColorScheme}.600`,
        `${simplifiedColorScheme}.300`
      )(props),
      scaleOnPressed: 1.2,
    };
  },
};

export const SliderFilledTrack = {
  baseStyle: (props: any) => {
    const simplifiedColorScheme = getColorScheme(props);
    return {
      bg: mode(
        `${simplifiedColorScheme}.600`,
        `${simplifiedColorScheme}.300`
      )(props),
    };
  },
};

const sizes = {
  lg: { thumbSize: 6, sliderSize: 6 },
  md: { thumbSize: 5, sliderSize: 5 },
  sm: { thumbSize: 4, sliderSize: 4 },
};

export const Slider = {
  baseStyle: (props: any) => {
    return {
      alignItems: 'center',
      justifyContent: 'center',
      height: props.orientation === 'vertical' ? '100%' : undefined,
      width: props.orientation !== 'vertical' ? '100%' : undefined,
    };
  },
  defaultProps: {
    size: 'sm',
  },
  sizes,
};
