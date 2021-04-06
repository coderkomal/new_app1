import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

let studentStateData = [
  {
    select: false,
    id: 'Styuy567SS',
    firstname: 'Stone',
    lastname: 'cold',
    major: 'wwf',
  },
  {
    select: false,
    id: 'Maxud677MM',
    firstname: 'Max',
    lastname: 'cold',
    major: 'wwf',
  },
  {
    select: false,
    id: 'Ws67876dWW',
    firstname: 'Willy',
    lastname: 'cold',
    major: 'wwf',
  },
];

const Item = ({ item, selectSingle }) => {

  
  return(
  <TouchableOpacity onPress = {() => selectSingle(item.id)} style={[styles.item, {backgroundColor:item.select?"blue":"skyblue"}]}>
    <Text style={[styles.title]}>{item.firstname}</Text>

  </TouchableOpacity>
)
};

const App = () => {
  const [studentState, setStudentState] = useState(studentStateData);

  const selectSingle = ( id) => {
    const newArray = studentState.map((item) => {
      if (item.id === id) {
        item.select = !item.select ;
      }
      return item;
    });
    setStudentState(newArray);
  };

  const renderItem = ({ item }) => {


    return (
      <Item
        item={item}
        selectSingle={selectSingle}
       
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={studentState}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
