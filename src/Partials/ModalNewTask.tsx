import React, { useState } from 'react';
import { FAB, IconButton, Modal, Portal, Text, RadioButton } from 'react-native-paper';
import PartialStyles from './PartialStyleSheets';
import { View, TextInput } from 'react-native';

export default function NewTask() {
    const [isVisible, setIsVisible] = useState(false);
    const [check, setCheck] = useState("");

    const checkButton = (radio: string) => {
        check === radio ? setCheck("") : setCheck(radio);
    }
    
    return (
        <View>
            <FAB visible={!isVisible} style={PartialStyles.fab} icon="plus" onPress={() => setIsVisible(true)} />
            <Portal>
                <Modal 
                    visible={isVisible} 
                    onDismiss={() => setIsVisible(false)}
                    contentContainerStyle={PartialStyles.modalNewTask} 
                >
                    <View style={PartialStyles.newTaskElement}>
                        <IconButton icon="arrow-left" onPress={() => setIsVisible(false)}/>
                        <IconButton icon="check" color="blue" onPress={() => console.log("check press")}/>
                    </View>
                    <TextInput 
                        style={PartialStyles.newTaskInput}
                        placeholder="Название задачи" 
                        placeholderTextColor="lightgray"
                    />
                    <Text style={PartialStyles.newTaskCategory}>Категория</Text>
                    <View style={PartialStyles.newTaskElement}>
                        <Text>Test</Text>
                        <RadioButton 
                            value={"test"} 
                            status={check === "test" ? "checked" : "unchecked"}
                            onPress={() => checkButton("test")}
                        />
                    </View>
                </Modal>
            </Portal>
        </View>
    )
}