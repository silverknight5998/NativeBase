import React from 'react';
import { Slider, Icon, Box } from 'native-base';

export default function () {
  return (
    <Box mx={5} width="80%">
      <Slider defaultValue={70} colorScheme="orange">
        <Slider.Track bg="orange.100">
          <Slider.FilledTrack bg="green.400" />
        </Slider.Track>
        <Slider.Thumb borderWidth={0}>
          <Icon name="park" type="MaterialIcons" color="green.500" />
        </Slider.Thumb>
      </Slider>
    </Box>
  );
}
