import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AlbumScreen, ChatScreen, ContactsScreen } from '../screens';

import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme';
LogBox.ignoreLogs(["Sending"]);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
        style={{ paddingTop }}
        sceneContainerStyle={{
            backgroundColor: "white"
        }}
        screenOptions={ ({ route }) => ({
            tabBarPressColor: colores.primary,
            tabBarPressOpacity: .8,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary
            },
            tabBarStyle: {
                shadowColor: "transparent",
                elevation: 0,
            },
            tabBarIcon: ({ color, focused }) => {
                
                let iconName: string = "";
                switch (route.name) {
                    case "Chat":
                        iconName = "CH"
                        break;
                    case "Contacts":
                        iconName = "CO"
                    break;
                    case "Albums":
                        iconName = "AL"
                    break;
                }
                
                return <Text style={{ color }}>{ iconName }</Text>
            }

        })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
}