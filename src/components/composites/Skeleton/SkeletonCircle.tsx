import React, { memo, forwardRef } from 'react';
import { Animated, Platform, View } from 'react-native';
import { useThemeProps } from '../../../hooks';
import { canUseDom } from '../../../utils';
import Box from '../../primitives/Box';
import type { ISkeletonProps } from './types';

const Skeleton = (allProps: ISkeletonProps, ref: any) => {
  const isDomUsable = canUseDom();
  const { children, ...props } = allProps;
  const newProps = useThemeProps('Skeleton', props);
  const { style, skeletonColor, baseColor } = newProps;
  const blinkAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isDomUsable) {
      const blink = Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: newProps.fadeDuration * 10000 * (1 / newProps.speed),
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: newProps.fadeDuration * 10000 * (1 / newProps.speed),
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]);
      Animated.loop(blink).start();
    }
  }, [blinkAnim, isDomUsable, newProps]);

  const skeletonStyle: any = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      height: '100%',
      width: '100%',
      borderRadius: 999,
      backgroundColor: skeletonColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
  };

  return newProps.isLoaded ? (
    children
  ) : (
    <Box style={[style]} borderRadius={999} bg={baseColor} {...props} ref={ref}>
      {children ? <View style={{ opacity: 0 }}>{children}</View> : null}
      <Animated.View style={skeletonStyle.skeleton} />
    </Box>
  );
};

export default memo(forwardRef(Skeleton));
