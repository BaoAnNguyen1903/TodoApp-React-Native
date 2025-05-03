import { View, Text } from "react-native";
import HomeScreen from "./components/review/home";
import DetailScreen from "./components/review/detail";
import AboutScreen from "./components/review/about";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf")
  });
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  return (
    <View>
      <HomeScreen />
      <DetailScreen />
      <AboutScreen />
    </View>
  );
};

export default App;
