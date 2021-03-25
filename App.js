import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddScreen from "./screens/AddScreen";
import BlogStack from "./screens/BlogStack";
import EditScreen from "./screens/EditScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Blog Stack" component={BlogStack} />
        <Stack.Screen name="Add Screen" component={AddScreen} />
        <Stack.Screen name="Edit Screen" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
