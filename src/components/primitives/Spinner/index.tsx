import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { color, space, position } from 'styled-system';
import { useToken, usePropsConfig } from '../../../hooks';
import type { ISpinnerProps } from './props';
import { useSpinner } from './useSpinner';

const StyledSpinner = styled(ActivityIndicator)<ISpinnerProps>(
  color,
  space,
  position
);
const Spinner = (props: ISpinnerProps) => {
  const newProps = usePropsConfig('Spinner', props);
  const spinnerColor = useToken('colors', newProps.color);
  const { spinnerProps } = useSpinner(props);

  return <StyledSpinner {...spinnerProps} {...newProps} color={spinnerColor} />;
};

export default Spinner;
export type { ISpinnerProps };
