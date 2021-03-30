import React from 'react';
import { CircularProgress, Heading, Center } from 'native-base';
export default function () {
  return (
    <Center>
      <Heading mb={6}>Changing the thickness</Heading>
      <CircularProgress value={60} thickness={2} />
    </Center>
  );
}
