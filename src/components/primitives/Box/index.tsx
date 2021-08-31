import React, { memo, forwardRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import Text from './../Text';
import { makeStyledComponent } from '../../../utils/styled';
import type { IBoxProps } from './types';
import { useSafeArea } from '../../../hooks/useSafeArea';
import { useNativeBaseConfig } from '../../../core/NativeBaseContext';
import { isResponsiveAnyProp } from '../../../theme/tools';
import isNil from 'lodash.isnil';

const StyledBox = makeStyledComponent(View);

let MemoizedGradient: any;

const Box = ({ children, ...props }: IBoxProps, ref: any) => {
  // const { _text, ...resolvedProps } = useThemeProps('Box', props);
  const { _text, ...resolvedProps } = usePropsResolution('Box', props);
  let Gradient = useNativeBaseConfig('NativeBaseConfigProvider').config
    .dependencies?.['linear-gradient'];

  const safeAreaProps = useSafeArea(resolvedProps);

  //TODO: refactor for responsive prop
  const windowDimensions = useWindowDimensions();
  if (isNil(windowDimensions.width) || isNil(windowDimensions.height)) {
    const responsivePropsExists = isResponsiveAnyProp(props);
    if (responsivePropsExists) {
      return null;
    }
  }

  if (
    resolvedProps.bg?.linearGradient ||
    resolvedProps.background?.linearGradient ||
    resolvedProps.bgColor?.linearGradient ||
    resolvedProps.backgroundColor?.linearGradient
  ) {
    const lgrad =
      resolvedProps.bg?.linearGradient ||
      resolvedProps.background?.linearGradient ||
      resolvedProps.bgColor?.linearGradient ||
      resolvedProps.backgroundColor?.linearGradient;

    if (Gradient) {
      if (!MemoizedGradient) {
        MemoizedGradient = makeStyledComponent(Gradient);
      }

      Gradient = MemoizedGradient;

      let startObj = { x: 0, y: 0 };
      let endObj = { x: 0, y: 1 };
      if (lgrad.start && lgrad.start.length === 2) {
        startObj = {
          x: lgrad.start[0],
          y: lgrad.start[1],
        };
      }
      if (lgrad.end && lgrad.end.length === 2) {
        endObj = {
          x: lgrad.end[0],
          y: lgrad.end[1],
        };
      }
      const backgroundColorProps = [
        'bg',
        'bgColor',
        'background',
        'backgroundColor',
      ];
      backgroundColorProps.forEach((backgroundColorProp) => {
        if (backgroundColorProp in safeAreaProps)
          delete safeAreaProps[backgroundColorProp];
      });

      return (
        <Gradient
          ref={ref}
          {...safeAreaProps}
          colors={lgrad.colors}
          start={startObj}
          end={endObj}
          locations={lgrad.locations}
        >
          {React.Children.map(children, (child) =>
            typeof child === 'string' ? <Text {..._text}>{child}</Text> : child
          )}
        </Gradient>
      );
    } else if (__DEV__) {
      console.error(
        'To enable gradient props support please provide linear gradient dependency in NativeBaseConfig'
      );
    }
  }
  return (
    <StyledBox ref={ref} {...safeAreaProps}>
      {React.Children.map(children, (child) => {
        return typeof child === 'string' ||
          (child?.type === React.Fragment &&
            typeof child.props?.children === 'string') ? (
          <Text {..._text}>{child}</Text>
        ) : (
          child
        );
      })}
    </StyledBox>
  );
};

export type { IBoxProps };

export default memo(forwardRef(Box));
