import React from 'react';
import {
  ThemeConsumer,
  ThemeContext,
  ThemeProvider,
} from 'styled-components/native';
import {
  SafeAreaProvider,
  initialWindowMetrics as defaultInitialWindowMetrics,
} from 'react-native-safe-area-context';
import { SSRProvider } from '@react-native-aria/utils';
import { theme as defaultTheme, ITheme } from './../theme';
import type { IColorModeProviderProps } from './color-mode';
import HybridProvider from './hybrid-overlay/HybridProvider';
import { OverlayProvider } from '@react-native-aria/overlays';
import { ToastProvider } from '../components/composites/Toast';
// import { createGlobalStyle } from 'styled-components';
// import Roboto from './Roboto.ttf';

export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: IColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
  initialWindowMetrics?: any;
  // Refer https://github.com/th3rdwave/react-native-safe-area-context#testing
}

// const GlobalStyles = createGlobalStyle`
//   @font-face {
//     font-family: 'Roboto';
//     src: url('${Roboto}') format('opentype');
//   }

//   body {
//     font-family: 'Roboto', sans-serif;
//   }
// `;

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const {
    colorModeManager,
    theme = defaultTheme,
    children,
    initialWindowMetrics,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        initialMetrics={initialWindowMetrics ?? defaultInitialWindowMetrics}
      >
        <HybridProvider
          colorModeManager={colorModeManager}
          options={theme.config}
        >
          <OverlayProvider>
            <ToastProvider>
              <SSRProvider>{children}</SSRProvider>
            </ToastProvider>
          </OverlayProvider>
        </HybridProvider>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};
