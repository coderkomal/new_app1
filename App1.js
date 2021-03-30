import React, { useState } from 'react';
import { CheckBox, Text, StyleSheet, View, FlatList } from 'react-native';

let studentStateData = [
  { select: false, id: 1, firstname: 'Stone' },
  { select: false, id: 2, firstname: 'Max' },
  { select: false, id: 3, firstname: 'Willy' },
];

const App = () => {
  const [studentState, setStudentState] = useState(studentStateData);

  const selectSingle = (event, id) => {
    setStudentState(
      studentState.map((data) => {
        if (id === data.id) {
          data.select = event;
          console.log( "Data" , data);
        }
        
        return data;
      })
    );

  };

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


  return (
    <View style={styles.container}>
   
      <FlatList
        data={studentState}
        renderItem={renderItemAll}
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
