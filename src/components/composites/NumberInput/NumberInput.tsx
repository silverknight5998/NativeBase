import React from 'react';
import { usePropsConfig } from '../../../hooks';
import { FormControlContext, IFormControlContext } from '../FormControl';
import type { INumberInputProps } from './props';
import { NumberInputContext } from './Context';

const NumberInput = ({ children, ...props }: INumberInputProps) => {
  const {
    defaultValue,
    keepWithinRange,
    value,
    min,
    max,
    ...newProps
  } = usePropsConfig('NumberInput', props);
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const [numberInputValue, setNumberInputValue] = React.useState(
    parseInt(value || defaultValue, 10)
  );
  const handleChange = (newValue: number) => {
    const temp = newValue;
    setNumberInputValue(temp);
    if (keepWithinRange) {
      if (newValue < min) setNumberInputValue(min);
      else if (newValue > max) setNumberInputValue(max);
    }
  };
  const handleChangeWithoutCheck = (newValue: number) => {
    const temp = newValue;
    setNumberInputValue(temp);
  };
  let numberInputStepper: JSX.Element | null = null;

  const separatingNumberInputStepper = (allChildren: any) => {
    return React.Children.map(allChildren, (child: JSX.Element) => {
      if (child.type.name === 'NumberInputStepper') {
        numberInputStepper = child;
        return null;
      } else {
        return child;
      }
    });
  };
  const updatedChildren = separatingNumberInputStepper(children);

  return (
    <NumberInputContext.Provider
      value={{
        ...formControlContext,
        ...newProps,
        min,
        max,
        handleChange,
        handleChangeWithoutCheck,
        numberInputValue,
        numberInputStepper,
      }}
    >
      {updatedChildren}
    </NumberInputContext.Provider>
  );
};

export default NumberInput;
