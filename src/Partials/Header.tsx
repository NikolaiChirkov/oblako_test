import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Appbar, Portal, Modal, IconButton } from 'react-native-paper';
import PartialStyles from './PartialStyleSheets';
import ModalListItem from './ModalListItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function Header() {
  const [editLists, setEditLists] = useState(false);

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Задачи" />
        <Appbar.Action icon="shape-outline" onPress={() => setEditLists(true)} />
      </Appbar.Header>
      <Portal>
        <Modal 
          visible={editLists} 
          onDismiss={() => setEditLists(false)}
          contentContainerStyle={PartialStyles.modalContainer}
        >
          <ModalListItem />
          <View style={PartialStyles.modalInput}>
            <TextInput placeholder="Новая категория" placeholderTextColor="gray"/>
            <IconButton 
              icon="plus" 
              color={Colors.gray} 
              onPress={() => console.log('add category')}
            />
          </View>
        </Modal>
      </Portal>
    </View>
  );
}