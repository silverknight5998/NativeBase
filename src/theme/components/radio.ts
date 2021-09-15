import { mode, transparentize } from '../tools';

const baseStyle = (props: Record<string, any>) => {
  const { colorScheme, theme } = props;
  return {
    _text: {
      ml: 3,
    },
    _interactionBox: {
      position: 'absolute',
      zIndex: -1,
      borderRadius: 'full',
    },
    _iconWrapper: {
      borderWidth: 2,
      borderRadius: 'full',
      p: '2px',
      borderColor: mode('muted.300', 'muted.600')(props),
      bg: mode('muted.50', 'muted.700')(props), // matching background color
    },
    _icon: {
      color: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props), // matching background color
    },
    _hover: {
      _interactionBox: {
        bg: transparentize('muted.200', 0.3)(theme),
      },
    },
    _focus: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _focusVisible: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
    _checked: {
      _interactionBox: {
        borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      },
      _iconWrapper: {
        borderColor: mode(`${colorScheme}.600`, `${colorScheme}.200`)(props),
      },
    },
    _disabled: {
      _interactionBox: {
        bg: 'transaprarent',
      },
      _iconWrapper: {
        opacity: 0.4,
      },
      _icon: {
        bg: 'transaprarent',
      },
    },
    _invalid: {
      _iconWrapper: {
        borderColor: mode('error.600', 'error.400')(props),
      },
    },
    _pressed: {
      _interactionBox: {
        bg: transparentize(`${colorScheme}.200`, 0.5)(theme),
      },
    },
  };
};

const sizes = {
  lg: { _icon: { size: 4 }, _text: { fontSize: 'lg' } },
  md: { _icon: { size: 3 }, _text: { fontSize: 'md' } },
  sm: { _icon: { size: 2 }, _text: { fontSize: 'sm' } },
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
