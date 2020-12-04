import React from 'react';
import { ScrollView } from 'react-native';
import Header  from "./Partials/Header";
import ToDoList from "./Partials/ToDoList";

export default function Main() {
    return (
        <ScrollView>
          <Header />
          <ToDoList/>
        </ScrollView>
    );
}