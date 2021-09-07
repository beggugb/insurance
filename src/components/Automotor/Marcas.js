import React,{useCallback}  from 'react';
import { FlatList, View, Image, StyleSheet, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
const {height, width} = Dimensions.get("screen");
import { api } from '../../helpers'
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { begguTheme } from '../../constants'
import { crudActions }  from '../../actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


  const Marcas = ({navigation:{goBack}, getPanels}) => {   
  const dispatch = useDispatch()     
  const { data } = useSelector(state => state.marcas)
  const { tipoId } = useSelector(state => state.cotizaciones)
 
  
  const ItemView = (item) =>{    
    return(      
      <View key={item.id} style={styles.card}>
        <TouchableOpacity onPress={() => getPanels(3,item.id,item.label,tipoId)} > 
          <View style={styles.titulo} >
          <Image style={styles.thumbnail} 
            source={{uri:`${api}/static/images/marcas/${item.icon}`}} 
          />               
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
      /*dispatch({type:'MARCAS_RESET_DATA'})      */
    };      
  }, [])
);

  return (
    <View style={styles.bar} >
      <View style={styles.bari} >
        <View style={styles.barck} >
        <TouchableOpacity onPress={() => getPanels(1)} style={styles.barck_icon} >
            <MaterialCommunityIcons name="keyboard-backspace" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mensaje} >
          <Text>Selecciona la marca de vehículo</Text>
        </View>        
      </View>   
      <View style={styles.cnt} >
        <FlatList                             
          numColumns={3}
          ItemSeparatorComponent={renderSeparator}          
          data={data}     
          renderItem={({ item }) => ItemView(item) }
          keyExtractor={item => item.id.toString()}                    
        />
      </View>               
    </View> 
    );
};

export default Marcas;

const styles = StyleSheet.create({
  bar: {        
    width: '100%',                          
    borderRadius: 5,      
    padding:2
  },
  
  
  titulo: {                                             
    marginLeft: 2,      
    marginRight: 2,    
  },
  txtTitulo: {       
    fontSize: 12,     
    color: begguTheme.COLORS.DEFAULT,          
    textAlign:'center',
    marginTop: 2
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
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 2,      
    marginHorizontal: 6,    
    width: 100,
    height: 52,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    paddingTop:3,
    borderWidth:1,
    borderColor: '#c1c1c1',
    alignItems: 'center'
  },
  thumbnail: {                              
    width:'100%',
    alignItems:'center',    
    height: 45,
    width: 70,    
    borderRadius: 5           
  },

 
});
