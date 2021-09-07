import React from 'react'
import {Image, TouchableOpacity } from 'react-native'

import Images from '../../constants/Images'

function LogoIcon(props){
    return(
        <Image
            source={Images.Logo}
            style={{ height:45, width:35, zIndex: 1,margin:15}}
        />
    )
}

export default LogoIcon