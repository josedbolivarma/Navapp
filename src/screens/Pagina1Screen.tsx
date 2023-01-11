import React, { useEffect } from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { styles } from '../theme';
import { DrawerScreenProps } from '@react-navigation/drawer';

// import { StackScreenProps } from '@react-navigation/stack';

// interface Props extends StackScreenProps<any, any>{
//     id: number;
//     nombre: string;
// };

interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

  useEffect(() => {
    navigation.setOptions({
        headerLeft: () => (
            <TouchableOpacity>
            <Button 
                title='Menu'
                onPress={ () => navigation.toggleDrawer() }
            />
            </TouchableOpacity>
        )
    });
  }, []);
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}>Pagina1Screen</Text>

        <Button 
            title="Ir a la pagina 2"
            onPress={ () => navigation.navigate('Pagina2Screen') }       
        />

        <Text style={{
            marginVertical: 20,
            fontSize: 20,
            marginLeft: 5
        }}>Navegar con argumentos</Text>

        <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
            style={{
                ...styles.btnBig,
                backgroundColor: "#5856d6"
            }}
            onPress={ () => navigation.navigate("PersonaScreen", {
                id: 1,
                nombre: "Pedro"
            }) } 
        >
            <Text style={ styles.btnBigText }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{
                ...styles.btnBig,
                backgroundColor: "#FF9427"
            }}
            onPress={ () => navigation.navigate("PersonaScreen", {
                id: 2,
                nombre: "Jorge"
            }) } 
        >
            <Text style={ styles.btnBigText }>Jorge</Text>
        </TouchableOpacity>
        </View>

    </View>
  )
}
