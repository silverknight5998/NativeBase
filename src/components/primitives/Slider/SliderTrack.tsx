import React from 'react';
import Box from '../Box';
import { SliderContext } from './Context';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderTrack = ({ children, ...props }: ISliderProps) => {
  const { sliderSize, trackColor }: ISliderContextProps = React.useContext(
    SliderContext
  );

  return (
    <Box
      position="absolute"
      backgroundColor={trackColor}
      height={sliderSize}
      borderRadius={999}
      width="100%"
      {...props}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default SliderTrack;
