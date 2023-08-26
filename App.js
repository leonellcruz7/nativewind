import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Review from "./screens/Review";
import Home from "./screens/Home";
import About from "./screens/About";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Root = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};
