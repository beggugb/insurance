import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { Fontisto } from '@expo/vector-icons'

function WhatsAppIcon(props) {  
  const url = 'send?text=' + props.mesage + '&phone=' + '591' +props.telefono;  
  const io = props.telefono ? '#2f8c48' : '#c1c1c1'  
  const est = props.telefono ? false : true
  return (
    <TouchableOpacity disabled={est} onPress={() => {Linking.openURL('http://api.whatsapp.com/' + url);}}>
       <Fontisto name='whatsapp' size={20} color={io} />
    </TouchableOpacity>
  )
}

export default WhatsAppIcon