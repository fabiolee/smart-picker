import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { HomeScreen } from "../home/HomeScreen";
import { BookmarkScreen } from "../BookmarkScreen";
import { SettingsScreen } from "../SettingsScreen";
import { TabBarIcon } from "./TabBarIcon";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.actions.primary.background,
        },
        tabBarActiveTintColor: theme.actions.primary.foregroundActive,
        tabBarInactiveTintColor: theme.actions.primary.foregroundInactive,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon
                focused={focused}
                size={size}
                color={color}
                name="ios-home"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon
                focused={focused}
                size={size}
                color={color}
                name="ios-bookmark"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <TabBarIcon
                focused={focused}
                size={size}
                color={color}
                name="ios-settings"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
