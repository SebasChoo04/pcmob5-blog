import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddScreen from "./screens/AddScreen";
import BlogStack from "./screens/BlogStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Blog Stack" component={BlogStack} />
        <Stack.Screen name="Add Screen" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
