import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'

function InstagramIcon(props) {    
  const io = props.enlace ? '#e1306c' : '#c1c1c1'  
  const est = props.enlace ? false : true
  return (
    <TouchableOpacity disabled={est} onPress={() => { Linking.openURL(props.enlace); }} >
       <Feather name='instagram' size={20} color={io} />
    </TouchableOpacity>
  )
}

export default InstagramIcon