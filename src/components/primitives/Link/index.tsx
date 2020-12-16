import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import { addTextAndPropsToStrings } from '../../../utils';
import type { ILinkProps } from './props';
import Box from '../Box';
import { usePropsConfig } from '../../../hooks';
import { useLink } from './useLink';

const StyledLink = styled(View)<ILinkProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

const addStyleAndPropsToChild = (
  props: any,
  children: JSX.Element[] | JSX.Element,
  IsUnderlined: boolean
) => {
  return React.Children.map(children, (child: any) => {
    let computedStyle: any = child.props.style;
    computedStyle = StyleSheet.flatten([
      child.props.style,
      { textDecorationLine: IsUnderlined ? 'underline' : 'none' },
    ]);
    return React.cloneElement(
      child,
      { ...props, ...child.props, style: computedStyle },
      child.props.children
    );
  });
};

const Link = ({
  style,
  href,
  isUnderlined = true,
  onClick,
  isExternal,
  children,
  m,
  mt,
  mr,
  ml,
  mb,
  p,
  pt,
  pl,
  pr,
  pb,
  w,
  width,
  h,
  height,
  ...props
}: ILinkProps) => {
  const layoutProps = {
    m,
    mt,
    mr,
    ml,
    mb,
    p,
    pt,
    pr,
    pl,
    pb,
    w,
    width,
    h,
    height,
  };
  let newProps = usePropsConfig('Link', props);

  const { linkProps } = useLink({ href, onClick, isExternal });

  return (
    <Box {...layoutProps}>
      <TouchableWithoutFeedback {...linkProps} {...newProps}>
        <StyledLink
          {...newProps}
          textDecorationLine={isUnderlined ? 'underline' : 'none'}
          style={style}
        >
          {addStyleAndPropsToChild(
            newProps,
            addTextAndPropsToStrings(children, newProps),
            isUnderlined
          )}
        </StyledLink>
      </TouchableWithoutFeedback>
    </Box>
  );
};

export default Link;
export type { ILinkProps };
