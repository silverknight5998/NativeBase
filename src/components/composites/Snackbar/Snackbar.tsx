import React from 'react';
import { Slide } from '../Transitions';
import type { ISnackbarProps } from './types';
import { AccessibilityInfo, Platform } from 'react-native';

const Snackbar = (
  {
    children,
    autoHideDuration = 5000,
    accessibilityAnnouncement,
    ...props
  }: ISnackbarProps,
  ref: any
) => {
  const [isOpen, setIsOpen] = React.useState(true);
  React.useEffect(() => {
    isOpen &&
      setTimeout(() => {
        setIsOpen(false);
      }, autoHideDuration);
  }, [isOpen, autoHideDuration]);

  React.useEffect(() => {
    if (accessibilityAnnouncement && isOpen && Platform.OS !== 'web') {
      AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
    }
  }, [accessibilityAnnouncement, isOpen]);
  return (
    <Slide in={isOpen} {...props} ref={ref}>
      {children}
    </Slide>
  );
};

export default React.memo(React.forwardRef(Snackbar));
