import React from 'react';
import { Animated } from 'react-native';
import { useThemeProps } from '../../../hooks/useThemeProps';
import type { IFadeProps } from './types';
import { useFadeTransition } from './useFadeTransition';
import Box from '../../primitives/Box';

const Fade = ({ children, ...props }: IFadeProps) => {
  const { in: animationState, duration } = useThemeProps('Fade', props);
  const { fadeValue, fadeIn, fadeOut } = useFadeTransition(duration);
  animationState ? fadeIn() : fadeOut();
  return (
    <Animated.View style={{ opacity: fadeValue }}>
      <Box {...props} />
      {children}
    </Animated.View>
  );
};

export default React.memo(Fade);
