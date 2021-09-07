import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'

function FacebookIcon(props) {    
  const io = props.enlace ? '#3b5998' : '#c1c1c1'  
  const est = props.enlace ? false : true
  return (
    <TouchableOpacity disabled={est} onPress={() => { Linking.openURL(props.enlace); }} >
       <Feather name='facebook' size={20} color={io} />      
    </TouchableOpacity>
  )
}

export default FacebookIcon