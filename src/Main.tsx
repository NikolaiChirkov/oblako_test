import React from 'react';
import { ScrollView, View } from 'react-native';
import Header  from "./Partials/Header";
import ToDoList from "./Partials/ToDoList";
import MainStyle from './MainStyle';
import NewTask from './Partials/ModalNewTask';

export default function Main() {

  return (
    <View style={MainStyle.mainContainer}>
      <ScrollView>
        <Header />
        <ToDoList/>
      </ScrollView>
      <NewTask />
    </View>
  );
}