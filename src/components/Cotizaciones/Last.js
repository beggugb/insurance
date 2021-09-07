import React,{useState} from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions }  from '../../actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { begguTheme } from '../../constants'
import { useCallback } from 'react';


function Last ({navigation}){            
    const dispatch = useDispatch()     


return(          
    <View style={styles.container}>            
      
    </View>    
    ); 
}
    
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#c1c1c130',            
        padding:3,
        borderWidth:1,
        borderRadius:7,
        borderColor:'#c1c1c180'
      },  
   
    
})
export default Last