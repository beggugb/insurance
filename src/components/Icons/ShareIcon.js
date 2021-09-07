import React from 'react'
import { TouchableOpacity, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function FacebookIcon(props) {    
  return (
    <TouchableOpacity      
      style={{ marginRight: 10, marginTop: 20  }}>
       <Feather name='share-2' size={20} color='#3b5998' />
    </TouchableOpacity>
  )
}

export default FacebookIcon