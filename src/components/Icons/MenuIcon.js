import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function MenuIcon({navigation, route}){            
    return(
        <TouchableOpacity
           onPress={() => navigation.openDrawer()} 
           style={{ marginRight: 10 }}
        >
         <MaterialIcons name="menu" size={27} color="#eaeaea" style={{ marginLeft:5}} />
        </TouchableOpacity>
    )
}

export default MenuIcon