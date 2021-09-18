import React from 'react';
import {
  Flex,
  Center,
  Heading,
  ScrollView,
  VStack,
  Divider,
} from 'native-base';

export function Example() {
  return (
    <ScrollView pr="32" pl="4">
      <Center mt="4">
        <VStack space={2.5} w="100%">
          {/* flexDirection -> row */}
          <Heading size="md">row</Heading>

          <Flex
            direction="row"
            mb="2.5"
            mt="1.5"
            _text={{ color: 'coolGray.800' }}
          >
            <Center size="16" bg="primary.100">
              100
            </Center>
            <Center size="16" bg="primary.200">
              200
            </Center>
            <Center bg="primary.300" size="16">
              300
            </Center>
            <Center size="16" bg="primary.400">
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column */}
          <Heading size="md">column</Heading>

          <Flex
            direction="column"
            mb="2.5"
            mt="1.5"
            _text={{ color: 'coolGray.800' }}
          >
            <Center size="16" bg="primary.100">
              100
            </Center>
            <Center size="16" bg="primary.200">
              200
            </Center>
            <Center bg="primary.300" size="16">
              300
            </Center>
            <Center size="16" bg="primary.400">
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> row-reverse */}
          <Heading size="md">row-reverse</Heading>
          <Flex
            direction="row-reverse"
            mb="2.5"
            mt="1.5"
            _text={{ color: 'coolGray.800' }}
          >
            <Center size="16" bg="primary.100">
              100
            </Center>
            <Center size="16" bg="primary.200">
              200
            </Center>
            <Center bg="primary.300" size="16">
              300
            </Center>
            <Center size="16" bg="primary.400">
              400
            </Center>
          </Flex>
          <Divider />
          {/* flexDirection -> column-reverse */}
          <Heading size="md">column-reverse</Heading>
          <Flex
            direction="column-reverse"
            mb="2.5"
            mt="1.5"
            _text={{ color: 'coolGray.800' }}
          >
            <Center size="16" bg="primary.100">
              100
            </Center>
            <Center size="16" bg="primary.200">
              200
            </Center>
            <Center bg="primary.300" size="16">
              300
            </Center>
            <Center size="16" bg="primary.400">
              400
            </Center>
          </Flex>
          <Divider />
        </VStack>
      </Center>
    </ScrollView>
  );
}
