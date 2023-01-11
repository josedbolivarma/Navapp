import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme';
import { useNavigation } from '@react-navigation/core';

export const Pagina2Screen = () => {

  const navigator = useNavigation<any>();

  useEffect(() => {
    navigator.setOptions({
        title: 'Hola Mundo',
        headerBackTitle: 'Atras'
    });
  }, []);
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}>Pagina2Screen</Text>

        <Button 
            title="Ir pagina 3"
            onPress={ () => navigator.navigate("Pagina3Screen") }
        />
    </View>
  )
}
