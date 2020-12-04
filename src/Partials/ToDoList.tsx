import React, { useState } from 'react';
import { List } from 'react-native-paper';
import ToDoListItem from './ToDoLIstItem';

export default function ToDoList() {

  return (
    <List.Section >
      <List.Subheader>Header</List.Subheader>
      <ToDoListItem />
    </List.Section>
  );
}