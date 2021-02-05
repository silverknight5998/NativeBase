import React from 'react';
import { Li, Heading, Ul, Ol, Box } from 'native-base';

export default function () {
  return (
    <Box height="50%">
      <Heading fontSize={24} color="indigo.500">
        Unordered List
      </Heading>
      <Ol my={2} spacing={4}>
        <Li>Inferno</Li>
        <Li>Mirage</Li>
        <Li>Dust 2</Li>
        <Li>Nuke</Li>
      </Ol>
      <Heading fontSize={24} color="indigo.500">
        Ordered List
      </Heading>
      <Ul my={2} spacing={4}>
        <Li>Inferno</Li>
        <Li>Mirage</Li>
        <Li>Dust 2</Li>
        <Li>Nuke</Li>
      </Ul>
    </Box>
  );
}
