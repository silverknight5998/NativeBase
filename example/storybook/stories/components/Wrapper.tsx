import React from 'react';
import {
  View,
  NativeBaseProvider,
  useColorMode,
  IconButton,
  Icon,
  ColorMode,
  useColorModeValue,
} from 'native-base';
import type { StorageManager } from 'native-base';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue(`gray.50`, `gray.800`);

  const [loaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('../../../assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('../../../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../../../assets/fonts/Roboto-Medium.ttf'),
  });

  if (!loaded) return null;

  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      safeAreaY
    >
      <IconButton
        position="absolute"
        top={12}
        right={8}
        onPress={toggleColorMode}
        icon={
          <Icon
            name={colorMode === 'dark' ? 'light-up' : 'md-moon'}
            type={colorMode === 'dark' ? 'Entypo' : 'Ionicons'}
            color={colorMode === 'dark' ? 'white' : 'black'}
          />
        }
      />
      {children}
    </View>
  );
}

export function RenderTestButton() {
  const [state, setState] = React.useState(1);
  return (
    <View style={{ position: 'absolute', top: 10, left: 20 }}>
      <Button title={state.toString()} onPress={() => setState(state + 1)} />
    </View>
  );
}
export default ({ children, theme }: any) => {
  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem('@example-wrapper-mode');
        return val === 'dark' ? 'dark' : 'light';
      } catch (e) {
        console.log(e);
        return 'light';
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem('@example-wrapper-mode', value);
      } catch (e) {
        console.log(e);
      }
    },
  };
  return (
    <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};
