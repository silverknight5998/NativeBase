import React from 'react';
import {
  Box,
  AspectRatio,
  useMediaQuery,
  HStack,
  Image,
  Text,
  Center,
  Stack,
  Heading,
} from 'native-base';

export const Example = () => {
  const [isSmallScreen] = useMediaQuery({ minWidth: 280 });
  return (
    <Box>
      {isSmallScreen ? (
        <Box
          rounded="lg"
          overflow="hidden"
          width="72"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{ borderColor: 'coolGray.600', backgroundColor: 'gray.700' }}
          shadow={2}
          _light={{ backgroundColor: 'gray.50' }}
        >
          <Box>
            <AspectRatio ratio={16 / 9}>
              <Image
                source={{
                  uri:
                    'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
            <Center
              bg="violet.500"
              _text={{ color: 'white', fontWeight: '700', fontSize: 'xs' }}
              position="absolute"
              bottom={0}
              px="3"
              py="1.5"
            >
              PHOTOS
            </Center>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text
                fontSize="xs"
                _light={{ color: 'violet.500' }}
                _dark={{ color: 'violet.300' }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's
              high-tech industry. The city is also known for its parks and
              nightlife.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text color="gray.500" fontWeight="400">
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </Box>
      ) : (
        <HStack
          rounded="lg"
          overflow="hidden"
          shadow={1}
          _light={{ backgroundColor: 'gray.50' }}
          _dark={{ backgroundColor: 'gray.700' }}
        >
          <Stack p="2" pt="3" flex="2" space={1}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                The Garden City
              </Heading>
              <Text
                fontSize="xs"
                _light={{ color: 'violet.500' }}
                _dark={{ color: 'violet.300' }}
                fontWeight="500"
                ml="-0.5"
                mt="-1"
              >
                The Silicon Valley of India.
              </Text>
            </Stack>
            <Text fontSize="xs" fontWeight="400">
              Bengaluru (also called Bangalore) is the center of India's
              high-tech industry. The city is also known for its parks and
              nightlife.
            </Text>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                <Text fontSize="xs" color="gray.500" fontWeight="400">
                  6 mins ago
                </Text>
              </HStack>
            </HStack>
          </Stack>
        </HStack>
      )}
    </Box>
  );
};
