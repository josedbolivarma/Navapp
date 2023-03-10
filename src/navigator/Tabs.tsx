import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen, Tab2Screen, Tab3Screen } from '../screens';
import { StackNavigator } from './';
import { colores } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';


export const Tabs = () => {
    
    return Platform.OS === "ios"
        ? <TabsIOS />
        : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled={ true }
        barStyle={{
            backgroundColor: colores.primary
        }}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, focused }) => {
                
                let iconName: string = "";
                switch (route.name) {
                    case "Tab1Screen":
                        iconName = "T1"
                        break;
                    case "Tab2Screen":
                        iconName = "T2"
                    break;
                    case "StackNavigator":
                        iconName = "St"
                    break;
                }
                
                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: "Tab2" }} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle={{
            backgroundColor: "white"
        }}
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
                borderTopColor: colores.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: {
                fontSize: 15
            },
            tabBarIcon: ({ color, focused, size }) => {
                
                let iconName: string = "";
                switch (route.name) {
                    case "Tab1Screen":
                        iconName = "T1"
                        break;
                    case "Tab2Screen":
                        iconName = "T2"
                    break;
                    case "StackNavigator":
                        iconName = "St"
                    break;
                }
                
                return <Text style={{ color }}>{ iconName }</Text>
            }
        })}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: "Tab1", tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: "Tab2" }} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: "Stack" }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}