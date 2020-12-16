import React from 'react';
import Flex from '../../primitives/Flex';
import { usePropsConfig } from '../../../hooks';
import isNil from 'lodash/isNil';
import type { IAvatarProps } from './props';
import { Avatar } from './Avatar';

const getAvatarGroupChildren = (
  children?: JSX.Element[] | JSX.Element,
  spacing?: number,
  max?: number,
  plusAvatarBg?: string,
  props?: any
) => {
  let childrenArray: any = React.Children.toArray(children);
  let plusAvatars: number = 0;
  if (!isNil(max) && max < childrenArray.length && max > 0) {
    plusAvatars = childrenArray.length - max;
    childrenArray = childrenArray.slice(0, max);
  }
  let trailingChildren = childrenArray.slice(1);
  const defaultProps = {
    ml: isNil(spacing) ? -4 : spacing,
  };
  return [
    plusAvatars > 0 ? (
      <Avatar
        bg={plusAvatarBg}
        name={'+ ' + plusAvatars}
        {...defaultProps}
        {...props}
      />
    ) : null,
    React.Children.map(trailingChildren.reverse(), (child: any) => {
      return React.cloneElement(
        child,
        {
          ...props,
          ...defaultProps,
          ...child.props,
        },
        child.props.children
      );
    }),
    React.cloneElement(
      childrenArray[0],
      {
        ...props,
        ...childrenArray[0].props,
      },
      childrenArray[0].props.children
    ),
  ];
};

export const AvatarGroup = (
  allProps: IAvatarProps & {
    children?: JSX.Element[] | JSX.Element;
    spacing?: number;
    max?: number;
  }
) => {
  const { children, spacing, max, ...props } = allProps;
  const { borderColor, borderWidth, bg } = usePropsConfig('AvatarBadge', props);
  return (
    <Flex direction="row-reverse">
      {getAvatarGroupChildren(children, spacing, max, bg, {
        borderColor,
        borderWidth,
        ...props,
      })}
    </Flex>
  );
};
