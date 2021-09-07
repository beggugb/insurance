import React from 'react'
import { TouchableOpacity, StyleSheet, View, Pressable, Image, Text, Button } from 'react-native'
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../../actions'

function PerfilIcon({navigation, route}){     
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.users);    
 

return(
    <View style={styles.container}>
      {user ? (        
      <Image style={styles.image} source={{ uri: user.picture.data.url }} />                     
      ) : null}      
    </View>
    )
}

const styles = StyleSheet.create({
   container:{
      flex:1,
      flexDirection:'row'        
    },          
    image: {        
        borderRadius:25,        
        height: 50,
        width: 50,                
        backgroundColor:'#eaeaea40',        
        justifyContent: "center",    
        borderRadius: 62,
        borderWidth: 2,
        borderColor: "#c1c1c1",
        marginTop: 3,
        marginRight:3,
        paddingTop: 1,
        paddingLeft: 12
      },  
  });

export default PerfilIcon