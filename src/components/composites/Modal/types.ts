import type { ViewStyle, ModalProps } from 'react-native';
import type {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  PositionProps,
} from 'styled-system';
import type {
  customBorderProps,
  customBackgroundProps,
  customOutlineProps,
  customLayoutProps,
  customExtraProps,
  customShadowProps,
} from '../../../utils/customProps';
import type { IBoxProps } from '../../primitives';
import type { IIconButtonProps } from '../../composites/IconButton';
type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
export type IModalSemiProps = ModalProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    isCentered?: boolean;
    initialFocusRef?: any;
    finalFocusRef?: any;
    children: JSX.Element | JSX.Element[];
    avoidKeyboard?: boolean;
    size?: SpaceType | string | number;
    id?: any;
    motionPreset?: 'slide' | 'fade' | 'none';
    closeOnOverlayClick?: boolean;

    /*
    Specifies if a modal can be closed by pressing Escape
    */
    isKeyboardDismissable?: boolean;

    overlayVisible?: boolean;
    overlayColor?: string;
    ref?: React.Ref<any>;
  };
export type IModalContextType = {
  visible?: boolean;
  toggleVisible?: (_bool: boolean) => any;
  toggleOnClose?: (_bool: boolean) => any;
  contentSize?: any;
};
export type IModalComponentType = ((
  props: IModalProps,
  ref: any
) => JSX.Element) & {
  Body: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  CloseButton: React.MemoExoticComponent<
    (props: IIconButtonProps & { ref?: any }) => JSX.Element
  >;
  Content: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Footer: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
  Header: React.MemoExoticComponent<
    (props: IBoxProps & { ref?: any }) => JSX.Element
  >;
};

export type IModalProps = IModalSemiProps & { isOpen: boolean; onClose: any };
