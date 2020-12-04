import React from 'react';
import { Colors, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import MainPage from './src/MainPage';
import store from './src/Redux/Store';

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
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <MainPage />
      </PaperProvider>
    </StoreProvider>
  );
}
