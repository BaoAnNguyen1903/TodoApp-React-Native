import { View, Text } from "react-native";
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";

const App = () => {
  return (
    <View>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  );
};

export default App;
