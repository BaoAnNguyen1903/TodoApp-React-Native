import { Button, StyleSheet, Text, View } from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  RouteProp,
  useNavigation
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR
  },
  reviewText: {
    fontSize: 25,
    fontFamily: OPENSANS_REGULAR,
    padding: 15
  }
});
const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();

  return (
    <View>
      <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
      <Text style={styles.reviewText}>Tiêu đề: {route.params?.title}</Text>
      <Text style={styles.reviewText}>Rating: {route.params?.star}</Text>
      <Button title="Go Home" onPress={() => navigation.navigate("home")} />
    </View>
  );
};

export default DetailScreen;
