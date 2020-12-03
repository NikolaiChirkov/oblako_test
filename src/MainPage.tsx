import React from 'react';
import { ScrollView } from 'react-native';
import Header  from "./Partials/Header";
import List from "./Partials/List";

export default function App() {
    return (
        <ScrollView>
          <Header />
          <List />
        </ScrollView>
    );
}