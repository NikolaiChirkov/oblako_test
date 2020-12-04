import React from 'react';
import { ScrollView } from 'react-native';
import Header  from "./Partials/Header";
import ToDoList from "./Partials/ToDoList";
import Fab from './Partials/Fab';

export default function Main() {
    return (
        <ScrollView>
          <Header />
          <ToDoList/>
          <Fab />
        </ScrollView>
    );
}