import React from 'react';
import { Box, IBoxProps, Text, ITextProps, Icon } from '../../primitives';
import { usePropsConfig } from '../../../hooks';

export const StatLabel = ({ style, ...props }: ITextProps) => {
  return (
    <Text style={style} {...props}>
      {props.children}
    </Text>
  );
};

export const StatNumber = ({ style, ...props }: ITextProps) => {
  let newProps = usePropsConfig('Stat', props);
  return (
    <Text {...newProps._statNumber} {...newProps} style={style}>
      {props.children}
    </Text>
  );
};

export const StatHelpText = ({ style, ...props }: IBoxProps) => {
  let newProps = usePropsConfig('Stat', props);
  return (
    <Box {...newProps._statHelpText} {...newProps} style={style}>
      {props.children}
    </Box>
  );
};

export const StatArrow = ({
  type,
  ...props
}: {
  type?: 'increase' | 'decrease';
}) => {
  return (
    <Icon
      ml={-1}
      type="Entypo"
      name={type === 'increase' ? 'triangle-up' : 'triangle-down'}
      {...props}
      color={type === 'increase' ? 'green.500' : 'red.500'}
    />
  );
};

export const StatGroup = ({ style, ...props }: IBoxProps) => {
  let newProps = usePropsConfig('Stat', props);
  return <Box {...newProps._statGroup} {...newProps} style={style} />;
};

const Stat = ({ style, ...props }: IBoxProps) => {
  return <Box {...props} style={style} />;
};
export default Stat;
