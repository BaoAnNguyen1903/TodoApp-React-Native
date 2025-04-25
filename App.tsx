import { StyleSheet, Text, View } from "react-native";

export default function App() {
  //jsx
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>baoan</Text>
        <Text style={styles.parent}>
          baoan2
          <Text style={styles.child}>bla bla</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>Hello World 1</Text>
      <Text>Hello World 2</Text>
    </View>
  );
}

//css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  hello1: {
    color: "red",
    fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "bold"
  },
  parent: {
    fontSize: 60,
    color: "green"
  },
  child: {
    fontSize: 30,
    color: "pink"
  }
});
