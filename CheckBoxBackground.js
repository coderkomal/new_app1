import React, { useState ,useEffect} from 'react';
import {
  FlatList,
  CheckBox,
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

const Item = ({ item, onPress, selectSingle, backgroundColor, textColor }) => {

console.log(backgroundColor)
  

 const [backgroundColor1,setBackgroundColor1] = useState(backgroundColor)



  return(
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.firstname}</Text>
    <CheckBox
      value={item.select}
      onValueChange={(event) => selectSingle(event, item.id)}
      style={styles.checkbox}
    />
  </TouchableOpacity>
)
};

const App = () => {
  const [studentState, setStudentState] = useState(studentStateData);

  const selectSingle = (event, id) => {
    const newArray = studentState.map((item, index) => {
      if (item.id === id) {
        item.select = event;
      }
      return item;
    });
    setStudentState(newArray);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.select === true ? '#6e3b6e' : '#f9c2ff';
    const color = item.select === true ? 'white' : 'black';

    return (
      <Item
        item={item}
        selectSingle={selectSingle}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
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
