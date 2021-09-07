import React,{useState} from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions }  from '../../actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { begguTheme } from '../../constants'
import { useCallback } from 'react';


function ProductosLista ({navigation}){            
    const dispatch = useDispatch()     
    const { data } = useSelector(state => state.productos)    

    const getComponent = () =>{                
      dispatch(crudActions.getListDetalle('PRODUCTOS_LISTA','productos',0))               
    }

    useFocusEffect(
      useCallback(() => {            
        getComponent(1,12)        
      return () => {        
        dispatch({type:'PRODUCTOS_RESET'})        
      };      
    }, [])
  );
  

    
    const ItemView = (item) =>{

      return(      
        <View key={item.key} style={styles.card}>
        <TouchableOpacity onPress={() => {
          dispatch(crudActions.getItem('productos',item.id))
          navigation.navigate('Cotizador',{ name: item.nombre })}}>                       
          <View style={styles.titulo} >
            <Text style={styles.txtTitulo} numberOfLines={2} ellipsizeMode='tail'>
            Cotizar
            </Text>            
          </View>            
        </TouchableOpacity>   
        </View>      
       )
    }    

    const renderSeparator = () => (
    <View
      style={{
        marginRight:5,        
      }}
    />
  );


return(          
    <View style={styles.bar} >            
       <View style={styles.der}>
         <FlatList                             
          numColumns={2}
          ItemSeparatorComponent={renderSeparator}          
          data={data}     
          renderItem={({ item }) => ItemView(item) }
          keyExtractor={item => item.id.toString()}                    
          />
       </View>
    </View>    
    ); 
}
    
const styles = StyleSheet.create({  
    bar: {                    
      width: "100%",            
      borderRadius: 5,
      alignItems:'center',                  
      flexDirection:'row',
      padding: 10
    },        
  
    der: {                    
      width: "100%",                              
      alignItems: 'center',      
      paddingTop: 22
    }, 
    card: {      
      backgroundColor: '#c1c1c145',            
      borderWidth: 15,
      borderColor:'#eaeaea80',
      height: 150,
      width:150,      
      borderRadius: 80,                            
    }, 
    titulos: {                                             
      marginLeft: 7,      
      marginRight: 7,      
      borderWidth:1,
      height:50
    },
    thumbnail: {                              
      width:'100%',
      alignItems:'center',      
      borderWidth:1,
      height:80           
    },
    titulo: {                                             
      marginLeft: 7,      
      marginRight: 7,      
      height: '100%',
      alignItems:'center'     
    },    
    txtTitulo: {       
      fontSize: 18,     
      color: '#1b88da',
      textAlign:'center',
      fontWeight:'bold',
      paddingTop: 47
    },    
    
    
})
export default ProductosLista