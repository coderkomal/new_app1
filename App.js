import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View, FlatList } from 'react-native';

let studentStateData = [
  { select: false, id: 1, firstname: 'Stone', lastname: 'cold', major: 'wwf' },
  { select: false, id: 2, firstname: 'Max', lastname: 'cold', major: 'wwf' },
  { select: false, id: 3, firstname: 'Willy', lastname: 'cold', major: 'wwf' },
];

const App = () => {
  const [studentState, setStudentState] = useState(studentStateData);

  const [selectedNames, setSelectedNames] = useState([]);

  const selectSingle = (event, id) => {
    setStudentState(
      studentState.map((data) => {
        if (id === data.id) {
          data.select = event;
        }
        return data;
      })
    );

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
    //flatlists to show checkboxes
      <FlatList
        data={studentState}
        renderItem={renderItemAll}
        keyExtractor={(item) => item.id}
      />
   //flatlists to display selected names
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
