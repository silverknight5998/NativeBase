import { mode } from '../tools';
// Actionsheet
export const Actionsheet = {
  defaultProps: {
    size: 'full',
  },
};

// ActionsheetContent
export const ActionsheetContent = {
  baseStyle: {
    alignItems: 'center',
    p: 2,
    borderRadius: 'none',
  },
};

// ActionsheetItem
export const ActionsheetItem = {
  baseStyle: (props: any) => ({
    width: '100%',
    justifyContent: 'flex-start',
    px: 5,
    _pressed: {
      bg: mode('gray.200', 'gray.600')(props),
    },
  }),
  defaultProps: {
    variant: 'unstyled',
  },
};
