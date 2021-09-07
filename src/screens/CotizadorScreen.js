import React  from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import AutomotorView from '../components/Automotor/AutomotorView';

const {height, width} = Dimensions.get("screen");

const CotizadorScreen = ({navigation, route}) => {   
     
    return (
      <View style={styles.container}>                            
        <AutomotorView navigation={navigation} style={styles.contenedor}/>        
      </View>
    );
};

export default CotizadorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:3
  },
  titulo: {
    borderWidth:1,
    borderColor: '#4d4d4d',
    height: '5%',
    alignItems: 'center',
    backgroundColor: '#4d4d4d'
  },
  txt_titulo: {
    padding: 5,
    fontWeight: 'bold',
    color: '#c1c1c1'
  },
  contenedor: {
    borderWidth:2,
    borderColor: '#4d4d4d',
    height: '95%'
  },
   
 
});
