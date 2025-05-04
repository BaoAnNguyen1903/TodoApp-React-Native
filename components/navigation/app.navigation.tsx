import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../review/home";
import DetailScreen from "../review/detail";
import AboutScreen from "../review/about";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ title: "Trang Chủ" }}
      />
      <Stack.Screen
        name="review-detail"
        component={DetailScreen}
        options={{ title: "Chi tiết Review" }}
      />
    </Stack.Navigator>
  );
};
const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home1"
        options={{ title: "Trang chủ" }}
        component={HomeLayout}
      />
      <Drawer.Screen
        name="about"
        component={AboutScreen}
        options={{ title: "Thông tin" }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
