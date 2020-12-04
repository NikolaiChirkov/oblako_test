import React from 'react';
import { Colors, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import Main from './src/Main';
import Store from './src/Redux/Store';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white,
    text: Colors.black
  }
};

export default function App() {
  return (
    <StoreProvider store={Store}>
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>
    </StoreProvider>
  );
}
