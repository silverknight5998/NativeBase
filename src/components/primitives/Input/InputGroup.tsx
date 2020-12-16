import React from 'react';
import { default as Box, IBoxProps } from '../Box';
import type { IInputProps } from '../Input';
import { getAttachedChildren } from '../../../utils';
import Flex from '../Flex';

const addonsDefaultStyle = {
  p: 3,
  borderColor: 'gray.300',
  borderWidth: 1,
};

export const InputLeftAddon = (props: IBoxProps & IInputProps) => {
  return (
    <Box
      {...addonsDefaultStyle}
      borderRightWidth={0}
      roundedLeft={4}
      bg="gray.200"
      {...props}
    >
      <Box m="auto">{props.children}</Box>
    </Box>
  );
};
export const InputRightAddon = (props: IBoxProps & IInputProps) => {
  return (
    <Box
      {...addonsDefaultStyle}
      borderLeftWidth={0}
      roundedRight={4}
      bg="gray.200"
      {...props}
    >
      <Box m="auto">{props.children}</Box>
    </Box>
  );
};

type InputGroupProps = {
  children: JSX.Element | JSX.Element[];
  variant?: string;
  size?: string;
};

const supplyPropsToChildren = (children: any, props: any) => {
  return React.Children.map(children, (child: JSX.Element) => {
    return React.cloneElement(child, props, child.props.children);
  });
};

export const InputGroup = ({ children, ...props }: InputGroupProps) => {
  return (
    <Flex direction="row">
      {supplyPropsToChildren(getAttachedChildren(children), props)}
    </Flex>
  );
};
