import React, {useState, useEffect} from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'

function SearchIcon(){      
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [mount, setMount ] = useState(false);
    const [io, setIO ] = useState('SignInScreen');

    const navigation = useNavigation()     
    const signIn = useSelector(state => state.users)
    const userToken = useSelector(state => state.users.userToken)
    const dispatch = useDispatch()

    useEffect(() => {       
       if(userToken)
       {
        setIO('Perfil')
       }
       
  }, []);

  return(
    <View style={styles.container}>                                      
        <TouchableOpacity  
            style={styles.imgSearch}
             onPress={() => { navigation.navigate('Buscar')}}>
            <Ionicons name="search" size={22} color="#eaeaea" />
        </TouchableOpacity>

        <TouchableOpacity  
            style={styles.imgSearch}
             onPress={() => { navigation.navigate(io)}}>
            <FontAwesome5 name="user-alt" size={22} color="#eaeaea" />
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'row',      
      
    },
    imgSearch: {        
        borderRadius:25,
        paddingTop:6,
        paddingLeft:7,
        height: 40,
        width: 40,                
        backgroundColor:'#4d4d4d40',
        marginTop: 8,
        marginRight: 5,
        borderWidth: 2,
        borderColor: '#c1c1c180',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9        
    
      },        
  });

export default SearchIcon