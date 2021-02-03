import React from 'react';
import { Animated, Platform } from 'react-native';
import { useThemeProps } from '../../../hooks';
import { canUseDom } from '../../../utils';
import Box from '../../primitives/Box';
import type { ISkeletonProps } from './types';

const Bones = (allProps: ISkeletonProps & { circle?: boolean }) => {
  const isDomUsable = canUseDom();
  const { circle, children, ...props } = allProps;
  const newProps = useThemeProps('Skeleton', props);
  const { style, skeletonColor, baseColor } = newProps;
  const blinkAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isDomUsable) {
      const blink = Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]);
      Animated.loop(blink).start();
    }
  }, [blinkAnim, isDomUsable]);

  const skeletonStyle: any = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: circle ? 999 : 3,
      backgroundColor: skeletonColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
    base: {
      borderRadius: circle ? 999 : 3,
      backgroundColor: baseColor,
    },
  };

  const AnimationViewSetter = () => {
    if (children) {
      if (children.length) {
        return [<Animated.View style={skeletonStyle.skeleton} />, ...children];
      }
      return [<Animated.View style={skeletonStyle.skeleton} />, children];
    }
    return <Animated.View style={skeletonStyle.skeleton} />;
  };

  return (
    <Box style={[style, skeletonStyle.base]} {...props}>
      {AnimationViewSetter()}
    </Box>
  );
};

export default React.memo(Bones);
