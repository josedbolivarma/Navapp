import { createDrawerNavigator, DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const SettingsStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SettingsScreen"
                component={ SettingsScreen }
            />
        </Stack.Navigator>
    );
}

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: ( width >= 768 ) ? "permanent" : "front"
        }}
        drawerContent={ (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsStackScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>

            {/* Parte del avatar */}
            <View style={ styles.avatarContainer }>
                <Image 
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/1364565195633225729/dg4ucbJ6_400x400.jpg"
                    }}
                    style={ styles.avatar }
                />
            </View>

            {/* Opciones de menu */}
            <View style={ styles.menuContainer }>

                <TouchableOpacity 
                    style={ styles.menuButton }
                    onPress={ () => navigation.navigate("Tabs") }
                >
                    <Text style={ styles.menuTexto }>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={ styles.menuButton }
                    onPress={ () => navigation.navigate("SettingsScreen") }
                >
                    <Text style={ styles.menuTexto }>Ajustes</Text>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    )
};