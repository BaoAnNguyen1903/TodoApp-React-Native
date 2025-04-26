import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  //jsx
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Name: {name} </Text>
        <TextInput
          multiline
          onChangeText={(value) => setName(value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15
          }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 40, fontWeight: "600" }}>Age: {age} </Text>
        <TextInput
          onChangeText={(value) => setAge(+value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15
          }}
          keyboardType="numeric"
          maxLength={2}
        />
      </View>

      <Text style={{ fontSize: 40, fontWeight: "600" }}>count = {count}</Text>
      <View>
        <Button
          color={"red"}
          title="Increase"
          onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
