import { mode } from './../tools';

function baseStyle(props: Record<string, any>) {
  return {
    bg: mode(`#fff`, `gray.700`)(props), // change this to match theme
    py: 2,
    zIndex: 1,
    borderRadius: 'md',
    borderWidth: '1px',
  };
}
const defaultProps = {
  shadow: 1,
};
export default {
  defaultProps,
  baseStyle,
};

export const MenuGroup = {
  baseStyle: {
    fontSize: 'sm',
    fontWeight: 'semibold',
    p: 2,
  },
};
export const MenuItem = {
  baseStyle: {
    fontSize: 'sm',
    fontWeight: 'normal',
    textAlign: 'left',
    maxWidth: 64,
    minWidth: 32,
    py: 2,
    px: 3,
  },
  defaultProps: {
    disabled: false,
    disabledTextColor: '#bdbdbd', // change this to match theme
    underlayColor: 'gray',
    _disabled: {
      bg: 'gray.100',
      color: 'gray.500',
    },
  },
};
