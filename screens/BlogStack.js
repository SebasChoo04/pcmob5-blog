import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./IndexScreen";
import AddScreen from "./AddScreen";
import EditScreen from './EditScreen';

const InnerStack = createStackNavigator();

export default function BlogStack() {
  return (
    <InnerStack.Navigator mode="modal">
      <InnerStack.Screen
        name="Blogs"
        component={IndexScreen}
        options={{
          title: "Blogs",
          headerStyle: {
            backgroundColor: "yellow",
            height: 100,
            shadowColor: "black",
            shadowOpacity: 0.2,
            shadowRadius: 5,
          },
          headerTintColor: "#f55",
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: "bold",
          },
        }}
      />
    </InnerStack.Navigator>
  );
}
