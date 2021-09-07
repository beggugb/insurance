import React,{useState, useCallback, createRef}  from 'react';
import { FlatList, Text, Image, View, StyleSheet, Dimensions } from 'react-native';
import { api } from '../../helpers'
const {height, width} = Dimensions.get("screen");
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native';
import { crudActions }  from '../../actions'


const ListaCompanias = ({navigation}) => {   
  const dispatch = useDispatch()     
  const { data } = useSelector(state => state.companias) 
  const [_timerId, _setTimerId] = useState(null)

   
  const getComponent = () =>{                
   dispatch(crudActions.getListaItems('COMPANIAS_LISTA','companias'))               
  }
  

  useFocusEffect(
    useCallback(() => {            
      getComponent()        

    return () => {        
        /*dispatch({type:'PRODUCTOS_RESET'})        */
      };      
    }, [])
  );


  const ItemView = (item) =>{

    return(      
      <View key={item.key} style={styles.card}>      
        <View style={styles.titulo} >
        <Image style={styles.thumbnail} source={{uri:`${api}/static/images/companias/sm/${item.filename}`}} />                          
        </View>            
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
    return (
    <View style={styles.container}>    
      <Text style={styles._txt}>Compañias Aseguradoras</Text>             
      <FlatList                                       
          numColumns={4}
          ItemSeparatorComponent={renderSeparator}          
          data={data}     
          renderItem={({ item }) => ItemView(item) }
          keyExtractor={item => item.id.toString()}                      
          />
    </View>
    );
};

export default ListaCompanias;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:3,    
    borderRadius:7,
    borderWidth:1,
    borderColor:'#c1c1c180'
  },
 
  card: {
    backgroundColor: '#fff',
    marginVertical: 2,      
    marginHorizontal: 6,    
    width: 75,
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,    
    borderWidth:1,
    borderColor: '#c1c1c1',
    alignItems: 'center',
    paddingTop:7
  },
  thumbnail: {                                  
    alignItems:'center',    
    height: 35,
    width: 45,    
    borderRadius: 5           
  },
  _txt: {                                      
    paddingLeft: 10,
    color:'#1b88da',
    fontWeight:'bold',
    marginBottom:3
  },
});
