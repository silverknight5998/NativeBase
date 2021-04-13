import { mode, transparentize } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme, theme } = props;
  return {
    _text: {
      ml: 3,
      fontSize: 'lg',
    },
    _interactionBox: {
      position: 'absolute',
      zIndex: -1,
      borderRadius: 'full',
      _hover: {
        bg: transparentize('muted.200', 0.3)(theme),
      },
      _focus: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
      _disabled: {
        bg: 'transaprarent',
      },
      _pressed: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _radio: {
      borderWidth: 2,
      borderRadius: 'full',
      p: '2px',
      borderColor: mode('muted.600', 'muted.400')(props),
      bg: mode('muted.50', 'muted.700')(props), // matching background color
      _checked: {
        borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      },
      _disabled: {
        opacity: 0.4,
      },
      _invalid: {
        borderColor: mode('error.600', 'error.400')(props),
      },
    },
    _icon: {
      color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props), // matching background color

      _disabled: {
        bg: 'transaprarent',
      },
    },
  };
};

const sizes = {
  lg: { size: 4 },
  md: { size: 3 },
  sm: { size: 2 },
};

const defaultProps = {
  defaultIsChecked: false,
  size: 'md',
  colorScheme: 'primary',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
