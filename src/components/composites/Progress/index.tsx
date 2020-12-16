import React from 'react';
import type { ViewStyle } from 'react-native';
import { Box, IBoxProps } from '../../primitives';
import { usePropsConfig } from '../../../hooks';

type SpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type IProgressProps = IBoxProps & {
  style?: ViewStyle;
  children?: JSX.Element | JSX.Element[] | string;
  value?: number;
  size?: SpaceType | string;
  colorScheme?: string;
  isIndeterminate?: any;
};

const Progress = ({ value, isIndeterminate, ...props }: IProgressProps) => {
  // const width = new Animated.Value(0);
  // useEffect(() => {
  //   Animated.loop(
  //     Animated.timing(width, {
  //       toValue: 270,
  //       duration: 1000,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // });

  let newProps = usePropsConfig('Progress', props);
  const { innerBg } = newProps;
  const innerProps = {
    bg: innerBg,
    shadow: 0,
    rounded: newProps.rounded,
    height: '100%',
    w: value + '%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  };
  return (
    <Box {...newProps} style={props.style}>
      {isIndeterminate ? (
        // <Animated.View
        //   style={[
        //     {
        //       transform: [
        //         {
        //           translateX: width,
        //         },
        //       ],
        //     },
        //   ]}
        // >
        // </Animated.View>
        <Box {...innerProps} children={newProps.children} />
      ) : (
        <Box {...innerProps} children={newProps.children} />
      )}
    </Box>
  );
};

export default Progress;
