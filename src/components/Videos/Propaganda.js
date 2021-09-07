import React,{useState} from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions }  from '../../actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { begguTheme } from '../../constants'
import { useCallback } from 'react';
const iconLogo = require("../../../assets/images/banner.png");

function Propaganda ({navigation}){            
    const dispatch = useDispatch()     


return(          
    <View style={styles.container}>            
      <Image
              source={iconLogo}
              style={{ height:130, width:365, zIndex: 1}}
          />
    </View>    
    ); 
}
    
const styles = StyleSheet.create({  
    container: {
        flex: 1,
        backgroundColor: '#c1c1c130',                    
        borderWidth:1,
        borderRadius:7,
        borderColor:'#c1c1c180',
        padding:1
      },  
   
    
})
export default Propaganda