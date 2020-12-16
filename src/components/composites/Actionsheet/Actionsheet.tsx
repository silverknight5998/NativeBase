import React from 'react';
import { default as Modal, ModalOverlay } from '../Modal';
import type { IActionsheetProps } from './props';
import { omitUndefined } from '../../../theme/tools/utils';

const Actionsheet = ({ children, ...props }: IActionsheetProps) => {
  const { isOpen, disableOverlay, onClose, ...newProps } = omitUndefined(props);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      justifyContent="flex-end"
      {...newProps}
    >
      {disableOverlay ? null : <ModalOverlay />}
      {children}
    </Modal>
  );
};

export default Actionsheet;
