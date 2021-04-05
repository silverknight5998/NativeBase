import React from 'react';
import { Popover as PopoverAlias } from 'react-native-popper';
import type { IPopoverProps } from 'native-base';
import { mergeRefs } from '../../../utils';
import { useControllableState } from '../../../hooks';
import { PopoverContext } from './PopoverContext';
import Box from '../../primitives/Box';

const Popover = React.forwardRef(function Popover(
  {
    onOpen,
    trigger,
    onClose,
    isOpen: isOpenProp,
    children,
    defaultIsOpen,
    ...restProps
  }: IPopoverProps,
  ref: any
) {
  const triggerRef = React.useRef(null);
  const mergedRef = mergeRefs([triggerRef]);
  const [isOpen, setIsOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultIsOpen,
    onChange: (value) => {
      value ? onOpen && onOpen() : onClose && onClose();
    },
  });

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  let updatedTrigger = () => {
    return trigger(
      {
        ref: mergedRef,
        onPress: handleOpen,
      },
      { open: isOpen }
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    if (restProps.initialFocusRef && restProps.initialFocusRef.current) {
      restProps.initialFocusRef.current.focus();
    }

    return () => {
      if (restProps.finalFocusRef && restProps.finalFocusRef.current) {
        restProps.finalFocusRef.current.focus();
      }
    };
  }, [restProps.finalFocusRef, restProps.initialFocusRef, isOpen]);

  return (
    <Box ref={ref}>
      {updatedTrigger()}
      <PopoverAlias
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        trigger={triggerRef}
        {...restProps}
      >
        <PopoverAlias.Backdrop />
        <PopoverContext.Provider value={{ onClose: handleClose }}>
          {children}
        </PopoverContext.Provider>
      </PopoverAlias>
    </Box>
  );
});

export { Popover };
