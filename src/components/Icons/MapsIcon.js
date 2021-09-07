import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function MapsIcon(props) { 
  const io = (props.latitude && props.longitude) ? '#d14929' : '#c1c1c1'  
  const est = (props.latitude && props.longitude) ? false : true  
  const navigation = useNavigation()  
  return (
    <TouchableOpacity disabled={est}
      onPress={() => navigation.navigate('Ubicacion',
        { 
        platitude:props.latitude,
        plongitude:props.longitude,
        ptitle:props.title,
        pdescription:props.description,
        ptelefono: props.telefono,
        pcelular: props.celular,
        pdireccion: props.direccion,
        pfilename: props.filename 
      })
       } >
       <Entypo name='location-pin' size={20} color={io} />
    </TouchableOpacity>
  )
}

export default MapsIcon