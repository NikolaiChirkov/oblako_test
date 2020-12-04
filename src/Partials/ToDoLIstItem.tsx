import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import PartialStyles from './PartialStyleSheets'; 

export default function ToDoListItem() {
    const [value, setValue] = useState('lul');

    return (
        <RadioButton.Group onValueChange={() => console.log(`${value} radio changed`)} value={value}>
            <View style={PartialStyles.itemContainer}>
              <RadioButton value="test" />
              <Text>test</Text>
            </View>
        </RadioButton.Group>
    );
}