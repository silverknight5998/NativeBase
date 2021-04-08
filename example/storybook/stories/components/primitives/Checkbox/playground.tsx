import React from 'react';
import { Checkbox, Text, Box } from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const checkboxValue = text('value', 'Cool');
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Checkbox
        colorScheme={text('colorScheme', 'primary')}
        size={select('size', ['sm', 'md', 'lg'], 'md')}
        defaultIsChecked={boolean('defaultIsChecked', true)}
        isChecked={boolean('isChecked', true)}
        isDisabled={boolean('isDisabled', false)}
        isInvalid={boolean('isInvalid', false)}
        value={checkboxValue}
        onChange={() => {
          setToggleCheckBox(!toggleCheckBox);
        }}
      >
        <Text mx={2}>Are you Awesome?</Text>
      </Checkbox>
    </Box>
  );
}
