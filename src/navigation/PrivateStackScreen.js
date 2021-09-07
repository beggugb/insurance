import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CotizadorScreen from "../screens/CotizadorScreen"
import CotizacionesScreen from "../screens/CotizacionesScreen"
import CotizacionDetalleScreen from "../screens/CotizacionDetalleScreen"
import PerfilScreen from "../screens/PerfilScreen"
import { BackIcon, PerfilIcon, LogoIcon, TitleIcon } from '../components/Icons'
import { begguTheme } from '../constants'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign , MaterialCommunityIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptionStyle = {    
    headerTintColor: "white",
    headerBackTitle: "Back",   
    headerStyle: {
      backgroundColor: "#fff",
    },
    headerShown: false
  };
   
  const MainStackNavigator = (props)=>{
    return(
    <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={screenOptionStyle} >
        <Stack.Screen
          name="Home"          
          >        
          {props => <HomeScreen {...props} />}          
        </Stack.Screen>

        <Stack.Screen
          name="Cotizador"          
          options={{              
            headerRight: () => ( <PerfilIcon />),
            headerStyle: {
              backgroundColor: begguTheme.COLORS.DEFAULT,
              borderBottomColor: '#c1c1c1',
              borderBottomWidth: 1
            },
          }}>        
          {props => <CotizadorScreen {...props} />}          
        </Stack.Screen>

        <Stack.Screen
          name="CotizacionDetalle"          
          options={{     
            headerLeft: () => ( <BackIcon {...props}/>),         
            headerRight: () => ( <PerfilIcon />),
            headerStyle: {
              backgroundColor: begguTheme.COLORS.DEFAULT,
              borderBottomColor: '#c1c1c1',
              borderBottomWidth: 1
            },
          }}>        
          {props => <CotizacionDetalleScreen {...props} />}          
        </Stack.Screen>

       
    </Stack.Navigator>
    )
}

const CotizacionesStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
          options={{
            headerRight: () => ( <PerfilIcon />),                                          
            headerStyle: {
                backgroundColor: begguTheme.COLORS.DEFAULT,
                borderBottomColor: 'black',
                borderBottomWidth: 0,
              },
          }}
          name="Cotizaciones">
       {props => <CotizacionesScreen {...props} />}          
      </Stack.Screen>    
    </Stack.Navigator>
  );
}


const PerfilStackNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
          options={{
            headerRight: () => ( <PerfilIcon />),                                          
            headerStyle: {
                backgroundColor: begguTheme.COLORS.DEFAULT,
                borderBottomColor: 'black',
                borderBottomWidth: 0,
              },
          }}
          name="Perfil">
       {props => <PerfilScreen {...props} />}          
      </Stack.Screen>    
    </Stack.Navigator>
  );
}

 
  const PrivateStackScreen = () => { 
    return (
      <Tab.Navigator     
      initialRouteName="Home"
      screenOptions={({ route }) => ({
          tabBarLabel:() => {return null},        
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Inicio: 'home',
              Buscar: 'search',
              Contratos: 'file1',
              About: 'questioncircleo',                        
              User: 'account'
    
            };
      
            return (
              <AntDesign
                name={icons[route.name]}
                color={begguTheme.COLORS.DEFAULT}
                size={30}
              />
            );
          },
        })} 
      >
      <Tab.Screen name="Inicio" component={MainStackNavigator}/>    
      <Tab.Screen name="Contratos" component={CotizacionesStackNavigator}/>
      <Tab.Screen name="About" component={PerfilStackNavigator}/>
      </Tab.Navigator>
    );
  
  };


export default PrivateStackScreen;