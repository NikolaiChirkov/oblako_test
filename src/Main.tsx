import React from 'react';
import { ScrollView, View } from 'react-native';
import Header  from "./Partials/Header";
import ToDoList from "./Partials/ToDoList";
import Fab from './Partials/Fab';
import MainStyle from './MainStyle';

export default function Main() {
    return (
      <View style={MainStyle.mainContainer}>
        <ScrollView>
          <Header />
          <ToDoList/>
        </ScrollView>
        <Fab />
      </View>
    );
}