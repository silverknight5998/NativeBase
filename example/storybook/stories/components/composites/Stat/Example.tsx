import React from 'react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box>
      <Heading>Basic Stat Usage</Heading>
      <Stat mt={6}>
        <StatLabel>Amount</StatLabel>
        <StatNumber>£126.00</StatNumber>
        <StatHelpText>Feb 12 - Feb 28</StatHelpText>
      </Stat>
    </Box>
  );
}
