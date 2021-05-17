import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import Wrapper from '../components/Wrapper';
import { Example as TodoApp } from './TodoApp';

storiesOf('Examples', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: any) => <Wrapper>{getStory()}</Wrapper>)
  .add('Todo App', () => <TodoApp />);
