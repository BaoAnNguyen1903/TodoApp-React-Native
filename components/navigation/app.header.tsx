import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    paddingTop: 40
  },
  headerText: {
    width: "100%",
    textAlign: "center",
    fontSize: 25
  }
});
const AppHeader = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="menu"
        size={40}
        color="black"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={[styles.headerText, globalStyles.globalFont]}>
        Mobile App
      </Text>
    </View>
  );
};

export default AppHeader;
