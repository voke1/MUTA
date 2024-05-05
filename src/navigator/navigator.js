//Dependecies
import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { icons } from "../constants";
import { View, Image } from "react-native";
import { COLORS } from "../constants";
//Screens
import {
  WelcomeScreen,
  SpokenLanguageScreen,
  ProficiencyScreen,
  SelectedLanguageScreen,
  Signup,
  EmailAuth,
  HomeScreen,
  LiveSessionScreen,
  LearnScreen,
  LoginScreen,
  EmailLoginScreen,
} from "../screens";
import { AuthContext } from "../contexts/auth/state";
import setAuthToken from "../contexts/auth/setAuthToken";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="learn"
        component={LearnScreen} // Replace with your ProfileScreen component
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="liveSession"
        component={LiveSessionScreen} // Replace with your SettingsScreen component
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? icons.home : icons.home;
          } else if (route.name === "Learn") {
            iconName = focused ? icons.learn : icons.learn;
          } else if (route.name === "Live Session") {
            iconName = focused ? icons.liveSession : icons.liveSession;
          }

          return (
            <Image
              source={iconName}
              style={{ width: 25, height: 25, tintColor: color }}
            />
          );
        },
        tabBarActiveTintColor: COLORS.secondary, // Color for active tab
        tabBarInactiveTintColor: COLORS.lightGray, // Color for inactive tabs
        tabBarStyle: {
          backgroundColor: COLORS.primary, // Background color of the tab bar
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.home}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.secondary : COLORS.lightGray,
                  }}
                />
              </View>
            );
            // }
          },
          // tabBarIcon: ({ focused }) => ( /* Add icon component here */ ),
        }}
      />
      <Tab.Screen
        name="learn"
        component={ProfileStack}
        options={{
          tabBarLabel: "Learn",
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.learn}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.secondary : COLORS.lightGray,
                  }}
                />
              </View>
            );
            // }
          },
          // tabBarIcon: ({ focused }) => ( /* Add icon component here */ ),
        }}
      />
      <Tab.Screen
        name="liveSession"
        component={SettingsStack}
        options={{
          tabBarLabel: "Live Session",
          headerShown: false,
          tabBarIcon: ({ focused, tintColor }) => {
            // if (!isTradeModalVisible) {
            return (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.liveSession}
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? COLORS.secondary : COLORS.lightGray,
                  }}
                />
              </View>
            );
            // }
          },

          // tabBarIcon: ({ focused }) => ( /* Add icon component here */ ),
        }}
      />
    </Tab.Navigator>
  );
};

const GeneralStackNavigation = () => {
  const { token } = useContext(AuthContext);

  // intercept and attach token to all axios request
  setAuthToken(token);
  return (
    <>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="spokenLanguage"
          component={SpokenLanguageScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="selectedLanguage"
          component={SelectedLanguageScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="proficiency"
          component={ProficiencyScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="emailAuth"
          component={EmailAuth}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="emailLogin"
          component={EmailLoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="bottomTabs"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default GeneralStackNavigation;
