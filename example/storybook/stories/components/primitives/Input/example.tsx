import React from 'react';

import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Center,
  Heading,
  Button,
  Icon,
} from 'native-base';

export const DefaultInput = () => {
  return <Input mx={3} placeholder="Default Input" />;
};
export const SizeInput = () => {
  return (
    <Stack space={4} w="80%">
      <Center>
        <Heading>Input Sizes</Heading>
      </Center>
      <Input size="xs" placeholder="xs Input" />
      <Input size="sm" placeholder="sm Input" />
      <Input size="md" placeholder="md Input" />
      <Input size="lg" placeholder="lg Input" />
      <Input size="xl" placeholder="xl Input" />
      <Input size="2xl" placeholder="2xl Input" isDisabled={true} />
    </Stack>
  );
};
export const VariantInput = () => {
  return (
    <Stack space={4} w="80%">
      <Center>
        <Heading>Input Variants</Heading>
      </Center>
      <Input variant="outline" placeholder="Outline" />
      <Input
        variant="outline"
        placeholder="Outline with label"
        label="Outline"
      />
      <Input variant="filled" placeholder="Filled" />
      <Input variant="underlined" placeholder="Underlined" />
      <Input variant="unstyled" placeholder="Unstyled" />
      <Input variant="rounded" placeholder="round" />
    </Stack>
  );
};
export const InputAddons = () => {
  return (
    <Stack space={4}>
      <InputGroup>
        <InputLeftAddon children={'https://'} />
        <Input w="70%" placeholder="nativebase" />
        <InputRightAddon children={'.io'} />
      </InputGroup>
    </Stack>
  );
};
export const InputElements = () => {
  return (
    <Input
      w="90%"
      InputLeftElement={
        <Icon name="phone" fontSize="xl" type="MaterialIcons" m={2} />
      }
      InputRightElement={
        <Icon name="person" fontSize="xl" type="MaterialIcons" m={2} />
      }
      placeholder="Left and Right InputElement"
    />
  );
};
export const PasswordInput = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Input
      w="70%"
      type={show ? 'text' : 'password'}
      InputRightElement={
        <Button
          ml={1}
          roundedLeft={0}
          roundedRight="md"
          colorScheme="default"
          onPress={handleClick}
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      }
      placeholder="Password"
    />
  );
};
export const ControlledInput = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: any) => setValue(event.target.value);
  return (
    <Input
      mx={3}
      value={value}
      onChange={handleChange}
      placeholder="Value Controlled Input"
    />
  );
};
export const FocusErrorBorderColor = () => {
  return (
    <Stack space={4} w="80%">
      <Input
        placeholder="focusBorderColor Example"
        focusBorderColor="green.400"
      />
      <Input
        placeholder="focusBorderColor Example"
        focusBorderColor="pink.400"
      />
      <Input placeholder="Invalid Input Example" isInvalid />
      <Input
        placeholder="errorBorderColor Example"
        isInvalid
        errorBorderColor="yellow.400"
        errorMessage="This is an Error Message"
      />
    </Stack>
  );
};
