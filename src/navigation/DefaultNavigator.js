import React, {useEffect} from "react";
import PrivateStackScreen from './PrivateStackScreen'
import PublicStackScreen from './PublicStackScreen'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const DefaultNavigator = () => { 
  const dispatch = useDispatch()
 const { userToken } = useSelector(state => state.users)        
 const _retriveDate = async () => {        
  try {   
    const token = await AsyncStorage.getItem('@userToken');    
    const data = await AsyncStorage.getItem('@userLogin');            
    if(token && data){
      dispatch({type:'SET_USER',response: JSON.parse(data)})
      dispatch({type:'SET_TOKEN', token: token })
    }else{
      console.log('vacio')
    }    
  } catch ({ message }) {
    console.log('nell'); 
  }
};

useEffect(() => {
  _retriveDate()
  /*AsyncStorage.removeItem('@userToken');
  AsyncStorage.removeItem('@userLogin');*/
  return () => {
    
  }
}, [])
return (  	
      <NavigationContainer>   
      {userToken !== null ? <PrivateStackScreen/> : <PublicStackScreen/>}      
      </NavigationContainer> 
  );
}

export default DefaultNavigator;