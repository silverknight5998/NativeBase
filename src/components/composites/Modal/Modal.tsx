import React from 'react';
import type { Modal as ModalType } from 'react-native';
import { KeyboardAvoidingView, Modal as RNModal, Platform } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space } from 'styled-system';
import { useOverlay } from '../../../core/Overlay';
import { useThemeProps } from '../../../hooks';
import {
  customBackground,
  customBorder,
  customExtra,
  customLayout,
  customOutline,
  customPosition,
  customShadow,
} from '../../../utils/customProps';
import { Box, View } from '../../primitives';
import type { IModalProps, IModalSemiProps } from './types';
import { default as ModalOverlay } from './ModalOverlay';

const StyledModal = styled(RNModal)<IModalSemiProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  customPosition,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout
);

export const ModalContext = React.createContext({
  visible: false,
  toggleVisible: (_bool: boolean) => {},
  toggleOnClose: (_bool: boolean) => {},
  newProps: {
    _width: '60%',
    size: 'md',
    modalOverlayStyle: {},
    closeOnOverlayClick: true,
    modalCloseButtonStyle: {},
    modalCloseButtonProps: {},
    modalFooterProps: {},
    modalBodyProps: {},
    modalContentProps: {},
    modalHeaderProps: {},
    modalOverlayProps: {},
  },
});

const Modal = (
  {
    children,
    isOpen,
    onClose,
    initialFocusRef,
    finalFocusRef,
    justifyContent,
    alignItems,
    id,
    motionPreset,
    avoidKeyboard,
    overlayColor,
    overlayVisible,
    ...props
  }: IModalProps,
  ref: any
) => {
  const { closeOverlay, setOverlay } = useOverlay();
  const [isVisible, setIsVisible] = React.useState(true);
  const closeOverlayInMobile = () => {
    setIsVisible(false);
    onClose(false);
  };
  const newProps = useThemeProps('Modal', props);
  const value: any = {
    visible: isVisible,
    toggleVisible: setIsVisible,
    toggleOnClose: onClose ? onClose : () => {},
    newProps: newProps,
  };
  const modalChildren = (
    <Box
      {...newProps.modalProps}
      justifyContent={justifyContent ?? 'center'}
      alignItems={alignItems ?? 'center'}
    >
      {props.closeOnOverlayClick === false ? <Box /> : <ModalOverlay />}
      {children}
    </Box>
  );
  React.useEffect(
    () => {
      isOpen && Platform.OS === 'web'
        ? setOverlay(
            <ModalContext.Provider value={value}>
              <Box ref={ref} nativeID={id} h="100%">
                {modalChildren}
              </Box>
            </ModalContext.Provider>,
            {
              onClose: onClose,
              closeOnPress: props.closeOnOverlayClick === false ? false : true,
              backgroundColor: overlayColor ? overlayColor : undefined,
              disableOverlay: overlayVisible === false ? true : false,
            }
          )
        : setOverlay(<Box />, {
            onClose: closeOverlayInMobile,
            closeOnPress: props.closeOnOverlayClick === false ? false : true,
            backgroundColor: overlayColor ? overlayColor : undefined,
            disableOverlay: overlayVisible === false ? true : false,
          });

      !isOpen && closeOverlay();
      setIsVisible(isOpen);
    },
    /*eslint-disable */
    [isOpen]
  );
  return Platform.OS !== 'web' ? (
    <ModalContext.Provider value={value}>
      <View nativeID={id}>
        <StyledModal
          visible={isVisible}
          onRequestClose={() => {
            value.toggleVisible(false);
            value.toggleOnClose(false);
          }}
          onShow={() => initialFocusRef?.current?.focus()}
          onDismiss={() => finalFocusRef?.current?.focus()}
          animationType={motionPreset || 'slide'}
          transparent
          {...props}
          ref={ref}
        >
          {avoidKeyboard ? (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
              {modalChildren}
            </KeyboardAvoidingView>
          ) : (
            modalChildren
          )}
        </StyledModal>
      </View>
    </ModalContext.Provider>
  ) : null;
};

export default React.memo(React.forwardRef<ModalType, IModalProps>(Modal));

export type { IModalProps };
