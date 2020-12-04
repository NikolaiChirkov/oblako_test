import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Appbar, Portal, Modal } from 'react-native-paper';
import PartialStyles from './PartialStyleSheets';
import ModalListItem from './ModalListItem';

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
          <TextInput style={PartialStyles.modalInput} />
        </Modal>
      </Portal>
    </View>
  );
}