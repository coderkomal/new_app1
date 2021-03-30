import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View, FlatList } from 'react-native';

let studentStateData = [
  { select: false, id: '237vy6r88', firstname: 'Stone', lastname: 'cold', major: 'wwf' },
  { select: false, id: '237vioj88', firstname: 'Max', lastname: 'cold', major: 'wwf' },
  { select: false, id: "237vigjh8", firstname: 'Willy', lastname: 'cold', major: 'wwf' },
];

const App = () => {
  const [studentState, setStudentState] = useState(studentStateData);

  const [selectedNames, setSelectedNames] = useState([]);

  const selectSingle = (event, id) => {
    // const newArray = [...studentState]
    //  newArray[index].select=event;
    //  setStudentState(newArray)

    const newArray = studentState.map((item,index) =>{
      if(item.id===id) {
       item.select=event;
      }
      return item
    })
    setStudentState(newArray)

    //   setStudentState(studentState.map((item,index) =>{
    //   if(item.id===id) {
    //    item.select=event;
    //   }
    //   return item
    // }))


    let selectedPersons = studentState.filter((item) => item.select === true);

    setSelectedNames(selectedPersons);

    console.log(selectedNames);
  };
 // for mapping of checkboxes
  const renderItemAll = ({ item, index }) => {
    return (
      <>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={item.select}
            onValueChange={(event) => selectSingle(event, item.id)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>{item.firstname}</Text>
        </View>
      </>
    );
  };

  // for mapping of selected names
  const renderItemSelected = ({ item, index }) => {
    return (
      <>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>{item.firstname}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        data={studentState}
        renderItem={renderItemAll}
        keyExtractor={(item) => item.id}
      />

      <Text style={styles.container}>Selected Contacts</Text>

      <FlatList
        data={selectedNames}
        renderItem={renderItemSelected}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};


//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default App;
