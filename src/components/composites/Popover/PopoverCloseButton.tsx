import React from 'react';
import { useThemeProps } from '../../../hooks';
import View from '../../primitives/View';
import { default as CloseButton, ICloseButtonProps } from '../CloseButton';
import { PopoverContext } from './PopoverContext';

const PopoverCloseButton = (props: ICloseButtonProps, ref?: any) => {
  const { onClose }: any = React.useContext(PopoverContext);
  const style = useThemeProps('Popover', props);

  return (
    <View position="absolute" right={0} top={0} zIndex={1} ref={ref}>
      <CloseButton
        {...style.popoverCloseButtonProps}
        {...props}
        onPress={onClose}
      />
    </View>
  );
};

export default React.memo(React.forwardRef(PopoverCloseButton));
