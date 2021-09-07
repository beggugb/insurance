import React from 'react'
import { TouchableOpacity } from 'react-native'
import {  MaterialIcons } from '@expo/vector-icons'

const BackIcon = ({navigation}) => {  
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginRight: 10 }}>
      <MaterialIcons name='arrow-back' size={27} color='#eaeaea' />
    </TouchableOpacity>
  )
}

export default BackIcon