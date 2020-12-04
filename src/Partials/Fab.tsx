import React from 'react';
import { FAB } from 'react-native-paper';
import PartialStyles from './PartialStyleSheets';

export default function Fab() {
    
    return (
        <FAB style={PartialStyles.fab} icon="plus" onPress={() => console.log("fab press")} />
    )
}