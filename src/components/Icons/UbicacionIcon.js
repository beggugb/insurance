import React from 'react'
import { TouchableOpacity, StyleSheet, View, Pressable, Image, Text, Button } from 'react-native'
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../../actions'

function UbicacionIcon({navigation, route}){     
  const dispatch = useDispatch()
  const { longitude, latitude } = useSelector(state => state.mapas);    

return(
    <View style={styles.container}>
      <Text style={styles.txt}>{latitude}</Text>
      <Text style={styles.txt}>{longitude}</Text>    
    </View>
    )
}

const styles = StyleSheet.create({
   container:{
      flex:1,            
      borderColor: '#c1c1c1',
      borderWidth: 1,
      marginRight: 15,
      height: 20
    },          
    txt:{
        fontSize:14,     
        fontWeight:"700",
        color:'#629ed5'  
    }
  });

export default UbicacionIcon