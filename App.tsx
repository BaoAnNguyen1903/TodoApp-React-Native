import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface ITodo {
  id: number;
  name: string;
}

export default function App() {
  const [todo, setTodo] = useState("");

  const [listTodo, setListTodo] = useState<ITodo[]>([]);

  // {id: 1, name: "watching hoidanit"}

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleAddTodo = () => {
    if (!todo) {
      Alert.alert("Lỗi input todo", "Todo không được để trống", [
        // {
        //   text: 'Hủy',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        { text: "Ok con dê", onPress: () => console.log("OK Pressed") }
      ]);
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 2000000), name: todo }]);
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter((item) => item.id !== id);
    setListTodo(newTodo);
  };

  //jsx
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>Todo APP</Text>

        {/* form  */}
        <View style={styles.form}>
          <TextInput
            value={todo}
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add todo" onPress={handleAddTodo} />
        </View>

        {/* list todo */}
        <View style={styles.todo}>
          <FlatList
            data={listTodo}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => deleteTodo(item.id)}
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                >
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

//css in js
const styles = StyleSheet.create({
  groupTodo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: "dashed",
    marginBottom: 15,
    marginHorizontal: 10,
    padding: 15
  },

  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff"
  },

  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 60
  },

  form: {
    // flex: 2
    marginBottom: 20
  },

  todo: {
    flex: 1
  },

  todoInput: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    padding: 5,
    margin: 15
  },

  todoItem: {
    fontSize: 20
    // padding: 10
  },

  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
    flex: 1
  }
});
