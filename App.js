import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              case routes.home:
                return <Entypo name="home" size={24} color="black" />;
              case routes.connections:
                return <Entypo name="users" size={24} color="black" />;
              case routes.profile:
                return <Entypo name="user" size={24} color="black" />;
              case routes.profile:
                return <Entypo name="user" size={24} color="black" />;
              case routes.chat:
                return <Entypo name="message" size={24} color="black" />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "black",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name={routes.home} component={HomeScreen} />
        <Tab.Screen name={routes.profile} component={SettingsScreen} />
        <Tab.Screen name={routes.connections} component={SettingsScreen} />
        <Tab.Screen name={routes.chat} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const routes = {
  home: "home",
  profile: "profile",
  connections: "connections",
  chat: "chat",
};
