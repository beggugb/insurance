import React,{useCallback}  from 'react';
import { FlatList, View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { api } from '../../helpers'
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

  const Modelos = ({navigation:{goBack}, getPanels}) => {     
  const { data } = useSelector(state => state.modelos)
  const dispatch = useDispatch()
  
  const ItemView = (item) =>{    
    return(      
      <View key={item.id} style={styles.card}>
        <TouchableOpacity onPress={() => getPanels(4,item.id,item.label,item.filename)} > 
          <Image 
            style={styles.thumbnail} 
            source={{uri:`${api}/static/images/modelos/sm/${item.filename}`}} 
          />               
          <View style={styles.titulo} >
            <Text style={styles.txtTitulo} numberOfLines={2} ellipsizeMode='tail'>{item.label}</Text>            
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
      /*dispatch({type:'MODELOS_RESET_DATA'})  */
    };      
  }, [])
);

  return (
    <View style={styles.bar} >
      <View style={styles.bari} >
        <View style={styles.barck} >
          <TouchableOpacity onPress={() => getPanels(2)} style={styles.barck_icon} >
            <MaterialCommunityIcons name="keyboard-backspace" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mensaje} >
          <Text>Selecciona el modelos de vehículo</Text>
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

export default Modelos;

const styles = StyleSheet.create({
  bar: {        
    width: '100%',                          
    borderRadius: 5,      
    padding:2       
  },
  card: {
    backgroundColor: '#fff',
    marginVertical: 2,      
    marginHorizontal: 6,    
    width: 100,
    height: 65,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    paddingTop:10,
    borderWidth:1,
    borderColor: '#c1c1c1',
    alignItems: 'center'
  },
  thumbnail: {                              
    width:'100%',
    alignItems:'center',
    paddingTop: 10,
    height: 35,
    width: 60,    
    borderRadius: 5           
  },
  titulo: {                                             
    marginLeft: 2,      
    marginRight: 2,    
  },
  txtTitulo: {       
    fontSize: 11,     
    color: '#4d4d4d',
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
