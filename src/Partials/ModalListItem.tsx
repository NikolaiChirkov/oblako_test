import React from 'react';
import { View } from 'react-native';
import PartialStyles from './PartialStyleSheets';
import { IconButton, Text } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ModalListItem({title = "Test"}) {

    return (
        <View style={PartialStyles.modalListItem}> 
            <Text>{title}</Text>
            <IconButton icon="trash-can-outline" color={"rgb(178,34,34)"}></IconButton>
        </View>
    )
}