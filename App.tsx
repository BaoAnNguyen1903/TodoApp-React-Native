import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Eric1", age: 18 },
    { id: 2, name: "Eric2", age: 19 },
    { id: 3, name: "Eric3", age: 20 },
    { id: 4, name: "Eric4", age: 18 },
    { id: 5, name: "Eric5", age: 18 },
    { id: 6, name: "Eric6", age: 18 },
    { id: 7, name: "Eric7", age: 18 },
    { id: 8, name: "Eric8", age: 18 },
    { id: 9, name: "Eric9", age: 18 },
    { id: 10, name: "Eric10", age: 18 }
  ]);

  //jsx
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>hello world</Text>
      <ScrollView>
        {students.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                padding: 30,
                backgroundColor: "pink",
                marginBottom: 30
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
//css in js
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff"
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
