import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR
  }
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();

  return (
    <View>
      <Text style={styles.review}> detail screen google</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
};

export default DetailScreen;
