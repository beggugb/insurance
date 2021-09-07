import React from 'react'
import {StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import Images from '../../constants/Images'

function TitleIcon(props){
    return(
        <Text style={styles.card}>SARI</Text>
     )
}

const styles = StyleSheet.create({  
    card:{
      fontSize:14,
      color: '#1b88da',
      fontWeight: 'bold'  
    }       
})
export default TitleIcon