import React from 'react';
import { View, Text } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

export default function Header() {
    return (
      <View>
            <Text>Задачи</Text>
            <IconButton icon="mdi-shape-outline" color={Colors.black}></IconButton>
      </View>
    );
}