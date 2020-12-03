import React from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import MainPage from './src/MainPage';

export default function App() {
  return (
    <StoreProvider store={}>
      <PaperProvider>
        <MainPage />
      </PaperProvider>
    </StoreProvider>
  );
}
