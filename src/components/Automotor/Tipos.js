import React,{useCallback}  from 'react';
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { begguTheme } from '../../constants'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


  const Tipos = ({navigation:{goBack}, getPanels}) => {     
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.tipos)   
  const ItemView = (item) =>{    
    return(      
      <View key={item.id} style={styles.card}>
        <TouchableOpacity onPress={() => getPanels(2,item.id,item.nombre)} >           
          <View style={styles.thumbnail} >                      
          <MaterialCommunityIcons name={item.icon} size={40} color="#fff" /> 
          </View>
          <View style={styles.titulo} >
            <Text style={styles.txtTitulo} numberOfLines={2} ellipsizeMode='tail'>{item.nombre}</Text>            
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

  useFocusEffect(
    useCallback(() => {                        
    return () => {        
      /*dispatch({type:'TIPOS_RESET_DATA'})*/
    };      
  }, [])
);

  return (
    <View style={styles.bar} >
      
      <View style={styles.bari} >
        <View style={styles.barck} >
          <TouchableOpacity onPress={() => goBack()} style={styles.barck_icon} >
            <MaterialCommunityIcons name="keyboard-backspace" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mensaje} >
          <Text>Selecciona el tipo de vehículo</Text>
        </View>        
      </View>   
      <View style={styles.cnt} >
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
};

export default Tipos;

const styles = StyleSheet.create({
  bar: {        
    width: '100%',                          
    borderRadius: 5,      
    padding:2           
  },
  card: {
    backgroundColor: begguTheme.COLORS.DEFAULT,
    marginVertical: 2,      
    marginHorizontal: 6,    
    width: 150,
    height: 120,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,
  elevation: 11,
  borderRadius: 10
  },
  thumbnail: {                              
    width:'100%',
    alignItems:'center',
    paddingTop: 20           
  },
  titulo: {                                             
    marginLeft: 7,      
    marginRight: 7,      
  },
  txtTitulo: {       
    fontSize: 12,     
    color: '#eaeaea',
    textAlign:'center'
  }, 
  cnt:{
    borderWidth:1,
    borderColor: '#c1c1c1',
    height: '90%',
    alignItems:'center',
    padding:10,
    borderRadius: 5
  },
  bari:{    
    height: '10%',
    flexDirection:'row'
  },

  barck:{    
    width: '20%',
    padding: 10    
  },

  mensaje:{    
    width: '80%',
    paddingTop: 14,
    paddingLeft:10,
    alignItems: 'center'    
  },
  barck_icon:{
    borderWidth:1,
    borderColor: '#c1c1c1',    
    height:30,
    width:30,
    borderRadius:15    
  }

 
});
