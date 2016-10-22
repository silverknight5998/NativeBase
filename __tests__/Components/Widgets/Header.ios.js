import 'react-native';
import React from 'react';
import Header from '../../../Components/Widgets/Header';
import Button from '../../../Components/Widgets/Button';
import Icon from '../../../Components/Widgets/Icon';
import Title from '../../../Components/Widgets/Title';
import InputGroup from '../../../Components/Widgets/InputGroup';
import Input from '../../../Components/Widgets/Input';
import Subtitle from '../../../Components/Widgets/Subtitle';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'ios';
    return Platform;
});

it('renders correctly', () => {
    const tree = renderer.create(
        <Header />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with buttons', () => {
   const tree = renderer.create(
       <Header>
           <Button transparent>
               <Icon name='ios-arrow-back' />
           </Button>

           <Title>Header</Title>

           <Button transparent>
               <Icon name='ios-menu' />
           </Button>
       </Header>
   ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with buttons and subtitle', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
            <Subtitle>Subtitle</Subtitle>

            <Button transparent>
                <Icon name='ios-menu' />
            </Button>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button and subtitle', () => {
    const tree = renderer.create(
        <Header>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
            <Subtitle>Subtitle</Subtitle>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button and iconRight', () => {
    const tree = renderer.create(
        <Header iconRight>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with just one button, iconRight and a subtitle', () => {
    const tree = renderer.create(
        <Header iconRight>
            <Button transparent>
                <Icon name='ios-arrow-back' />
            </Button>

            <Title>Header</Title>
            <Subtitle>SubTitle</Subtitle>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders header with searchbar', () => {
    const tree = renderer.create(
        <Header searchBar rounded>
            <InputGroup>
                <Icon name='ios-search' />
                <Input placeholder='Search' />
                <Icon name='ios-people' />
            </InputGroup>
            <Button transparent>
                Search
            </Button>
        </Header>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
