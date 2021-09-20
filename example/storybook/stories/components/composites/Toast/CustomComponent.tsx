import React from 'react';
import { Button, useToast, Box } from 'native-base';

export const Example = () => {
  const toast = useToast();

  return (
    <Button
      onPress={() => {
        toast.show({
          render: () => {
            return (
              <Box bg="indigo.500" px="2" py="1" rounded="sm" mb={5}>
                Hello! Have a nice day
              </Box>
            );
          },
        });
      }}
    >
      Custom Toast
    </Button>
  );
};
