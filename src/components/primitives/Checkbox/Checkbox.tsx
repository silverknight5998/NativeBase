import React, { useContext } from 'react';
import { default as Pressable, IPressableProps } from '../Pressable';
import { useThemeProps } from '../../../hooks';
import { Center } from '../../composites/Center';
import { useFormControlContext } from '../../composites/FormControl';
import Box from '../Box';
import Icon from '../Icon';
import type { ICheckboxProps } from './types';
import { useToggleState } from '@react-stately/toggle';
import { CheckboxGroupContext } from './CheckboxGroup';
import { useCheckbox, useCheckboxGroupItem } from '@react-native-aria/checkbox';

const Checkbox = ({ icon, children, ...props }: ICheckboxProps, ref: any) => {
  const formControlContext = useFormControlContext();

  const checkboxGroupContext = React.useContext(CheckboxGroupContext);
  const {
    _interactionBox: { _pressed: _iterationBoxPressed, ..._interactionBox },
    _checkbox: {
      _checked: _checboxChecked,
      _disabled: _checkboxDisabled,
      _invalid: _checkboxInvalid,
      ..._checkbox
    },
    _icon,
    isInvalid,
    size,
    ...themedProps
  } = useThemeProps('Checkbox', {
    ...checkboxGroupContext,
    ...formControlContext,
    ...props,
  });
  const state = useToggleState({
    ...props,
    defaultSelected: props.defaultIsChecked,
    isSelected: props.isChecked,
  });
  const groupState = useContext(CheckboxGroupContext);

  // Swap hooks depending on whether this checkbox is inside a CheckboxGroup.
  // This is a bit unorthodox. Typically, hooks cannot be called in a conditional,
  // but since the checkbox won't move in and out of a group, it should be safe.
  const { inputProps } = groupState
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckboxGroupItem(
        {
          ...themedProps,
          value: themedProps.value,
        },
        groupState.state,
        ref
      )
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useCheckbox(themedProps, state, ref);

  const { checked, disabled } = inputProps;

  const sizedIcon = icon
    ? () =>
        React.cloneElement(
          icon,
          {
            size,
            ..._icon,
          },
          icon.props.children
        )
    : null;
  return (
    <Pressable
      {...(inputProps as IPressableProps)}
      ref={ref}
      accessibilityRole="checkbox"
    >
      {({ isPressed }: any) => {
        return (
          <Center
            flexDirection="row"
            justifyContent="center "
            alignItems="center"
            borderRadius="full"
            {...themedProps}
          >
            <Center>
              {/* Interaction Wrapper */}
              <Box
                {..._interactionBox}
                {...(isPressed && _iterationBoxPressed)}
                p={5}
                w="100%"
                height="100%"
                zIndex={-1}
              />
              {/* Checkbox */}
              <Center
                {..._checkbox}
                {...(checked && _checboxChecked)}
                {...(disabled && _checkboxDisabled)}
                {...(isInvalid && _checkboxInvalid)}
              >
                {icon && sizedIcon && checked ? (
                  sizedIcon()
                ) : (
                  <Icon
                    name="check"
                    size={size}
                    {..._icon}
                    opacity={checked ? 1 : 0}
                  />
                )}
              </Center>
            </Center>
            {/* Label */}
            {children}
          </Center>
        );
      }}
    </Pressable>
  );
};

export default React.memo(React.forwardRef(Checkbox));
