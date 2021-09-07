import React, {useState} from 'react';
import { 
    View, 
    Text,     
    Platform,
    StyleSheet,
    Image, Dimensions
} from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux'
import Loader from '../components/loader';
import { SocialIcon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../constants/Images'
const { width, height } = Dimensions.get('screen');



const SignInScreen = ({navigation}) => {
    const [loading, isLoading] = useState(false);


    const dispatch = useDispatch()
    

const signUpFacebook = async () => {        
    try {
      await Facebook.initializeAsync({
      appId: "381555326913339"
    });
      const { 
        type, 
        token       
      }  = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
        behavior: 'web'
      })
      if (type === "success") {
       const response = await fetch(`https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`); 
       const data = await response.json();       
       const jsonUserToken = JSON.stringify(data.id) 
        AsyncStorage.setItem('@userToken', jsonUserToken)
        AsyncStorage.setItem('@userLogin', JSON.stringify(data))         
        dispatch({type:'SET_USER',response: data})
        dispatch({ type: 'SET_TOKEN', token: jsonUserToken }) 
      } else {       
        console.log('else')
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  


    return (
      <View style={styles.container}> 
        <View style={styles._header}> 
        <Text>sdsd</Text>
        </View>
        <View style={styles._body}> 
          <View style={styles.imagen}>
            <Image source={Images.iconLogo} style={{ height:'100%', width:'60%', zIndex: 1 }} />  
          </View>
          <View style={styles.titulo}>
            <Text style={styles.txt_titulo}>Bienvenido a Sari</Text>
          </View>
          <View style={styles.titulo}>
            <Text style={styles.txt_subtitulo}>
              Busca el mejor seguro para tu vehículo
            </Text>
          </View> 
          <Animatable.View animation="fadeInUpBig" style={styles.subcontainer}>                  
            <SocialIcon
              title='Iniciar sesión con Facebook'
              button
              type='facebook'
              onPress={signUpFacebook}/>
          </Animatable.View>
        </View>  
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff',            
    },
    _header: {
      height: height / 4,
      
    },
    _body: {
      height: height / 1.45,
      
    },
    imagen: {            
      height: 280,            
      alignContent: 'center',
      alignItems: 'center',
      padding: 5
    },
    titulo:{
      marginTop:5,      
      height:50, 
      alignItems:'center',
      paddingTop:10      
    },
    txt_titulo:{
      fontSize: 25,
      color:'#8b8b8b'      
    },
    txt_subtitulo:{
      fontSize: 17,
      color:'#8b8b8b'      
    },
    
    
    
  });