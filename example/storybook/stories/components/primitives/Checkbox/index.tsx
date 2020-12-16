import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from './../../Wrapper';
import Playground from './playground';
import Disabled from './disabled';
import Usage from './usage';
import CustomColor from './customColor';
import Size from './size';
import CustomIcon from './customIcon';
import Invalid from './invalid';
import WithRef from './withRef';
import FormControlled from './FormControlled';
import CheckboxGroup from './checkboxGroup';
import ControlledCheckbox from './controlledCheckbox';
import UnControlledCheckbox from './uncontrolledCheckbox';

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Controlled checkbox', () => <ControlledCheckbox />)
  .add('Uncontrolled checkbox', () => <UnControlledCheckbox />)
  .add('Playgroud', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Disabled', () => <Disabled />)
  .add('Invalid', () => <Invalid />)
  .add('Size', () => <Size />)
  .add('Custom Color', () => <CustomColor />)
  .add('Custom Icon', () => <CustomIcon />)
  .add('Checkbox Group', () => <CheckboxGroup />)
  .add('Form Controlled', () => <FormControlled />)
  .add('With Ref', () => <WithRef />);
