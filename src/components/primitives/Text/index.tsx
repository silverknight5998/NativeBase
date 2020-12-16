import React from 'react';
import { Text as NativeText } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  position,
  space,
  typography,
  layout,
  flexbox,
  border,
} from 'styled-system';
import { usePropsConfig } from '../../../hooks';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { ITextProps } from './props';

const StyledText = styled(NativeText)<ITextProps>(
  color,
  space,
  position,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

const Text = ({
  children,
  style,
  isTruncated,
  noOfLines,
  bold,
  italic,
  sub,
  highlight,
  underline,
  strikeThrough,
  ...props
}: ITextProps) => {
  const newProps = usePropsConfig('Text', props);
  return (
    <StyledText
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      fontWeight={bold ? 'bold' : undefined}
      fontStyle={italic ? 'italic' : undefined}
      bg={highlight ? 'yellow.200' : undefined}
      textDecorationLine={
        underline ? 'underline' : strikeThrough ? 'line-through' : undefined
      }
      {...newProps}
      fontSize={sub ? 10 : newProps.fontSize}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export default Text;
export type { ITextProps };
