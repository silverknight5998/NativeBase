import React from 'react';
import { Divider, Flex, Text } from 'native-base';

export const Example = () => {
  return (
    <Flex direction="row" p="4">
      <Text>Simple</Text>
      <Divider
        w="100%"
        bg="emerald.500"
        size="2"
        mx="2"
        orientation="vertical"
      />
      <Text>Easy</Text>
      <Divider
        w="100%"
        bg="indigo.500"
        size="2"
        mx="2"
        orientation="vertical"
      />
      <Text>Beautiful</Text>
    </Flex>
  );
};
