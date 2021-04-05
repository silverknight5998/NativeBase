import { mode } from '../tools';

const sizes = {
  sm: {
    contentSize: {
      width: '60%',
    },
  },
  md: {
    contentSize: {
      width: '75%',
    },
  },
  lg: {
    contentSize: {
      width: '90%',
    },
  },
  full: {
    contentSize: {
      width: '100%',
    },
  },
};

export const Modal = {
  baseStyle: {
    width: '100%',
    height: '100%',
    // border: 1,
  },
  sizes,
  defaultProps: {
    size: 'lg',
    closeOnOverlayClick: true,
  },
};

export const ModalContent = {
  baseStyle: (props: Record<string, any>) => {
    return {
      bg: mode('gray.50', 'gray.700')(props),
      pl: 6,
      pt: 6,
      shadow: 8,
      rounded: 'md',
    };
  },
};
export const ModalCloseButton = {
  baseStyle: (props: Record<string, any>) => {
    return {
      position: 'absolute',
      right: 3,
      top: 5,
      zIndex: 1,
      _icon: {
        size: 'sm',
        color: mode('black', 'white')(props),
      },
    };
  },
  defaultProps: {
    size: 8,
  },
};
export const ModalHeader = {
  baseStyle: {
    pb: 3,
    pr: 6,
    _text: { fontSize: 'lg', fontWeight: 'bold' },
  },
};
export const ModalBody = {
  baseStyle: (props: Record<string, any>) => {
    return {
      pb: 7,
      pr: 6,
      _text: { fontSize: 'md', color: mode('gray.600', 'gray.300')(props) },
    };
  },
};
export const ModalFooter = {
  baseStyle: {
    py: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    pr: 2,
  },
};
export const ModalOverlay = {
  baseStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    right: 0,
    bottom: 0,
  },
};
