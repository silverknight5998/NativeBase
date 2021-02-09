import React from 'react';
import { View } from '../../primitives';
import { CloseButton, ICloseButtonProps } from '../../composites';
import { ModalContext } from './Modal';
const ModalCloseButton = (props: ICloseButtonProps) => {
  const { toggleVisible, toggleOnClose, newProps } = React.useContext(
    ModalContext
  );
  return (
    <View style={newProps.modalCloseButtonStyle}>
      <CloseButton
        {...newProps.modalCloseButtonProps}
        {...props}
        // accessibilityLabel="Close dialog"
        onPress={() => {
          toggleVisible(false);
          toggleOnClose(false);
        }}
      />
    </View>
  );
};

export default React.memo(ModalCloseButton);
