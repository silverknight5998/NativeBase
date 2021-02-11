import Badge from './badge';

const { variants, defaultProps } = Badge;

const baseStyle = {
  _text: {
    fontFamily: 'mono',
    fontSize: 'sm',
  },
  borderRadius: 'sm',
  px: 2,
  py: 1,
};

export default {
  baseStyle,
  variants,
  defaultProps,
};
