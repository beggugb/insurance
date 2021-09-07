import React, {useState, useEffect, useCallback} from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location';
import { useFocusEffect } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux'
import {clientesActions} from '../../actions'


function PanicIcon(){          
    const navigation = useNavigation() 
    const dispatch = useDispatch()
    const {user, userf, userToken } = useSelector(state => state.users)
    const {latitude, longitude } = useSelector(state => state.mapas)
    const dd = userToken.replace(/"/g,'') 
    

    const handleLoadMore = () =>{              
       
       let dato = userf
       dato.latitude = latitude
       dato.longitude = longitude                     
       dispatch(clientesActions.sendPanico(userf))           
       console.log(latitude)
       console.log(longitude)
    }

    useFocusEffect(
    useCallback(() => { 
      /**/       
      dispatch(clientesActions.getItems(dd))      
      /**/     
      return () => {                        
        console.log('descarga panico')
      };      
    }, [])
  );

    console.log(userf)

 
  return(
        <View style={styles.container}>
            <TouchableOpacity  
                style={styles.imgSearch}
                onPress={() => handleLoadMore() }
            >
                <MaterialCommunityIcons name="bell-ring-outline" size={25} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
      flex:1,            
      alignItems: 'center',
      marginTop: 25
    },
    imgSearch: {        
        borderRadius:40,        
        height: 70,
        width: 70,                
        backgroundColor:'#F5365C',        
        justifyContent: "center",                                  
        paddingTop: 2,
        paddingLeft: 17,
        borderColor:"#015EEA",
        borderWidth: 6
      },       
  });

export default PanicIcon