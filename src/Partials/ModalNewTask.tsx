import React, { useState } from 'react';
import { FAB, Modal, Portal } from 'react-native-paper';
import PartialStyles from './PartialStyleSheets';
import { View } from 'react-native';

export default function NewTask() {
    const [isVisible, setIsVisible] = useState(false);
    
    return (
        <View>
            <FAB visible={!isVisible} style={PartialStyles.fab} icon="plus" onPress={() => setIsVisible(true)} />
            <Portal>
                <Modal 
                    visible={isVisible} 
                    onDismiss={() => setIsVisible(false)}
                    contentContainerStyle={PartialStyles.modalNewTask} 
                >
                    
                </Modal>
            </Portal>
        </View>
    )
}