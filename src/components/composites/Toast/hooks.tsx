import React from 'react';
import { useOverlay } from '../../../core/Overlay';
import ToastItem from './ToastItem';
import type { IsetToastProps } from './types';

export const useToast = () => {
  const { closeOverlay, setOverlay } = useOverlay();

  const setToast = ({
    title,
    duration = 2000,
    position = 'bottom',
    offset,
    _title,
  }: IsetToastProps) => {
    setTimeout(() => {
      closeOverlay();
    }, duration);
    setOverlay(<ToastItem title={title} _title={_title} offset={offset} />, {
      position,
      disableOverlay: true,
    });
  };
  return setToast;
};
