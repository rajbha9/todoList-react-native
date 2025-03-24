import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import Task from "./components/task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);
  const handleAddTask = () => {
    setTaskItem([...taskItem, task]);
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titaltext}>
        Today's Task
      </Text>
      {
        taskItem.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          )
        })
      }
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wightTastWrappar}
      >
        <TextInput style={styles.input}
          placeholder="Write Task "
          onChangeText={text => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#EAEAEAFF'
  },
  titaltext: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 15,
  },
  wightTastWrappar: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#C0C0C0',
    justifyContent: 'center'
  },
  addText: {
    fontSize: 30
  },


})