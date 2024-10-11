import React, { useState, useEffect } from "react";
// import {Image, ScrollView, Text} from 'react-native';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
  FlatList,
} from "react-native";

import Task from "./componnet/Task";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("todolist");

export default function App() {
  // const [itemtodo,setItemtodo]=useState([])
  const [item, setItem] = useState("");

  // let items=[];
  // =================================================================

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   async function setup() {
  //     const result = (await db).getAllAsync('SELECT * FROM todo');
  //     // ( await result ).map((it)=>{
  //     //   // ar.push(it.note)
  //     //   items.push(it.note)

  //     // });
  //   // console.log(result)
  //     setTodos(result);
  //   }
  //   setup();
  // }, []);

  //==============
  // useEffect(() => {
  //   async function setup() {

  //     (todos._j).map((it)=>{
  //       // ar.push(it.note)
  //       items.push(it.note)
  //      setItemtodo(it.note)

  //     });
  //   //  console.log(itemtodo)

  //   }
  //   setup();
  // }, []);

  //==================================================================
  useEffect(() => {
    createUserTable();
  }, []);

  const createUserTable = async () => {
    (await db).execAsync(`
    
        CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT );
        
        `);
  };

  //insert methode---
  const insert = async () => {
    (await db).runAsync("INSERT INTO todo (note) VALUES (?)", item);
    // alert("add")
    // const statement = (await db).prepareAsync(
    //   'INSERT INTO todo (note) VALUES ($note)'
    // );
    // try {
    //  (await statement).executeAsync({ $note:item })

    //   // console.log(result.lastInsertRowId, result.changes);

    // } finally {
    //   (await statement).finalizeAsync();
    // }
    setItem("");
  };
  //======================================================
  const [todoss, setTodoss] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      // const response = await fetch(
      //   // 'https://jsonplaceholder.typicode.com/todos?_limit=5'
      // );
      const result = (await db).getAllAsync("SELECT * FROM todo");
      const data = await result.catch();
      setTodoss(data);
      // console.log(result)
    };
    getTodos();
  }),
    [];

  // const getTodos = async () => {
  //   // const response = await fetch(
  //   //   // 'https://jsonplaceholder.typicode.com/todos?_limit=5'
  //   // );
  //   const result = (await db).getAllAsync('SELECT * FROM todo');
  //   const data = await result.catch();
  //   setTodoss(data);
  // };
  // async () => {
  //   // const response = await fetch(
  //   //   // 'https://jsonplaceholder.typicode.com/todos?_limit=5'
  //   // );
  //   const result = (await db).getAllAsync('SELECT * FROM todo');
  //   const data = await result.catch();
  //   setTodoss(data);
  // };
  //=======================================================

  // get All item methide --------
  // const allitem =async ()=>{
  //  const itemss=( (await db).getAllAsync('SELECT * FROM todo'));
  //   // for  (const row of  (await  itemss)) {
  //   //   console.log( row.note);

  //   // setItemtodo([...itemtodo,row.note])

  //   // }
  //   // let ar=
  //   // [];
  //    (await itemss ).map((it)=>{
  //     // ar.push(it.note)
  //     items.push(it.note)

  //   });

  // // for(let i=0;i<ar.length;i++){
  // //   setItemtodo([...itemtodo,ar[i]])

  // // }
  //   //  console.log(items)
  //     // alert(JSON.stringify(itemtodo))

  // //    const  itemss= (await db).getEachAsync('SELECT * FROM todo')
  // // for await (const row of itemss) {
  // //   console.log(row.id, row.note );

  // //   setItemtodo(itemss)
  // // }
  // //  alert(JSON.stringify(itemtodo))
  // // }
  // }

  // del item ------
  const delitem = async (index) => {
    (await db).runAsync("DELETE FROM todo WHERE id = $id", { $id: index });
    //('delete from tasks where key = ?', [id])
    //  ( await db).runAsync('DELETE FROM test WHERE value = $value', { $value: 'aaa' });

    // alert("del")
  };

  //===================================================================
  // let STORAGE_KEY = '@user_input';
  //  const [input, setInput] = useState("");
  //  const [inputtask, setInputtask] = useState([]);

  // const [task, setTask] = useState("");
  // const [taskItems, setTaskItems] = useState([]);

  //   const handleAddTask =async () => {

  //     Keyboard.dismiss();

  //    setTaskItems([...taskItems, task]);

  //       setTask(null);

  //   };

  //   const handleAddTask2 = async() => {

  //   Keyboard.dismiss();

  //   setTaskItems([...taskItems, task]);

  // try {
  //    await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(taskItems));

  // } catch (error) {
  //   // Error saving data
  // }

  // try {
  //    const myArray2 = await AsyncStorage.getItem('@MySuperStore:key');
  //     setInputtask (JSON.parse(myArray2));

  //   if (inputtask !== null) {
  //     // We have data!!
  //   // alert(myArray3[1])
  //   // alert(inputtask)
  //   setInputtask([...inputtask,task])
  //   }
  // } catch (error) {
  //   // Error retrieving data
  // }

  // setTask(null);

  //   };

  //   const completeTask = (index) => {
  //     let itemCopy = [...inputtask];
  //     itemCopy.splice(index, 1);
  //     setInputtask(itemCopy);
  //   };

  const addNote = () => {
    insert();

    // getTodos();

    //  console.log(todoss)

    //  for(let i=0;i<(todos._j).length;i++){
    //   //  console.log((todos._j)[i])
    //   items.push((todos._j)[i].note)
    //   // console.log((todos._j)[i].id)

    //  }

    // setItemtodo(todos._j)
    //  insert();
    //  allitem();
    // console.log("=====")
    // console.log((todos._j)[6].note)
    //  console.log(itemtodo)
    //  console.log(todos._j)
    // (todos._j).map((t)=>{

    // })
    // console.log(todoss)
    // console.log(todos._j[5].note)
    // let i=JSON.stringify(itemtodo)
    //  alert(i)
    //  alert(JSON.parse(i))
    //   setItem('')
    //  alert(JSON.stringify(items));

    // Removing duplicate objects using map
  };

  // const arrayDataItems = itemtodo.map(course =>
  //   <li key={course.id}>
  //     <text>{course.name}</text>

  //   </li>

  // )

  // const persons = [
  //   {
  //   id: "1",
  //   name: "Earnest Green",
  //   },
  //   {
  //   id: "2",
  //   name: "Winston Orn",
  //   },
  //   {
  //   id: "3",
  //   name: "Carlton Collins",
  //   },
  //   {
  //   id: "4",
  //   name: "Malcolm Labadie",
  //   },
  //   {
  //   id: "5",
  //   name: "Michelle Dare",
  //   },
  //   {
  //   id: "6",
  //   name: "Carlton Zieme",
  //   },
  //   {
  //   id: "7",
  //   name: "Jessie Dickinson",
  //   },
  //   {
  //   id: "8",
  //   name: "Julian Gulgowski",
  //   },
  //   {
  //   id: "9",
  //   name: "Ellen Veum",
  //   },
  //   {
  //   id: "10",
  //   name: "Lorena Rice",
  //   },

  //   {
  //   id: "11",
  //   name: "Carlton Zieme",
  //   },
  //   {
  //   id: "12",
  //   name: "Jessie Dickinson",
  //   },
  //   {
  //   id: "13",
  //   name: "Julian Gulgowski",
  //   },
  //   {
  //   id: "14",
  //   name: "Ellen Veum",
  //   },
  //   {
  //   id: "15",
  //   name: "Lorena Rice",
  //   },
  // ];
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task 😎  </Text>

        {/* <View style={styles.container}>
          {itemtodo.map((person) => {
        return (
          <View>
            <Text  key={person.id}>{person.note}</Text>
          </View>
        );
      })}
    </View> */}

        <ScrollView>
          <View style={styles.items}>
            {/* taskitems */}
            {todoss.map((item) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => delitem(item.id)}
                >
                  <Task text={item.note} />
                </TouchableOpacity>
              );
            })}
            {/* <Task text={"task 1 "} />

          <Task text={"task 2"} /> */}
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task "}
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        {/* handleAddTask */}
        <TouchableOpacity onPress={() => addNote()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      {/* <View >
      {persons.map((todo, index) => (
        <View  key={index}>
          <Text>{todo.name}</Text>
        </View>
      ))}
    </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  taskWrapper: {
    paddingTop: 15,
    paddingHorizontal: 17,
    paddingBottom: 140,
    // backgroundColor:"red"
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 12,
    paddingVertical: 15,
    backgroundColor: "#E0F7FA",
    borderRadius: 10,
    borderWidth: 0.3,
  },
  items: {
    marginTop: 22,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 2,
    width: 260,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c0c0c0",
    borderWidth: 2,
  },
  addText: {
    fontSize: 25,
  },
});
