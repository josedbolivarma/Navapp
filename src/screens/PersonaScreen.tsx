import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouterParams {
//     id: number;
//     nombre: string;
// }

interface Props extends StackScreenProps<RootStackParams, "PersonaScreen">{};

export const PersonaScreen = ( { route, navigation
 }: Props ) => {
  
//   const params = route.params as RouterParams; 
    const params = route.params; 

  useEffect(() => {
    navigation.setOptions({
        title: params.nombre
    });
  }, []);
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>{params.nombre }</Text>
    </View>
  )
}