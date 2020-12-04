import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header() {
    return (
      <Appbar.Header>
        <Appbar.Content title="Задачи" />
        <Appbar.Action icon="shape-outline" onPress={() => console.log("press")} />
      </Appbar.Header>
    );
}