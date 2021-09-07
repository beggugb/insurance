import React  from 'react';
import { View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import CotizacionesLista from '../components/Cotizaciones/CotizacionesLista';
import { crudActions }  from '../actions'
import { useSelector, useDispatch } from 'react-redux'
const {height, width} = Dimensions.get("screen");

const CotizacionesScreen = ({navigation}) => {    
  const { user } = useSelector(state => state.users);
    return (
      <View style={styles.container}>            
        <View style={styles.searchCotizaciones}>
          <View style={styles.header}>
            <Text style={styles.txt}>Cotizaciones</Text>
          </View>
         
          <View style={styles.imagen}>
          {user ? (        
            <Image style={styles.image} source={{ uri: user.picture.data.url }} />                     
          ) : null}  
          </View>  
        </View>
        <View style={styles.listaCotizaciones}>
          <CotizacionesLista navigation={navigation} />
        </View>    
      </View>
    );
};

export default CotizacionesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:3
  },
  searchCotizaciones:{                                   
    marginTop:30,                
    height:height * 0.07,
    borderWidth:1,
    borderColor: '#c1c1c170',
    borderRadius: 4,
    padding:16,
    flexDirection:'row'
  },
  header:{                                       
    width: '80%'    
   },

   imagen:{                                       
    width: '20%',
    alignItems:'center'
   },
  txt:{                                   
   fontSize:18,
   color: '#1b88da',
   fontWeight:'bold',
   marginTop:3
  },
 
  listaCotizaciones:{                                   
    marginTop:2,        
    borderWidth:1,
    borderColor: '#c1c1c1',
    borderRadius: 4,    
    flex:1
  },
  image: {        
    borderRadius:25,        
    height: 40,
    width: 40,                
    backgroundColor:'#eaeaea40',        
    justifyContent: "center",    
    borderRadius: 62,
    borderWidth: 2,
    borderColor: "#c1c1c1",    
    marginRight:3,
    paddingLeft: 12
  },    
 
});
