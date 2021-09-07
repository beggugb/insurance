import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'

function PhoneIcon(props) {    
  const io = props.telefono ? '#3cae26' : '#c1c1c1' 
  const est = props.telefono ? false : true  
  return (
    <TouchableOpacity disabled={est} onPress={() => {Linking.openURL('tel:'+props.telefono  );}}>       
       <Feather name="phone" size={21} color={io}  /> 
    </TouchableOpacity>
  )
}

export default PhoneIcon