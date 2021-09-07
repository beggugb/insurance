import React,{useCallback, useState} from 'react';
import { FlatList, View, Text, StyleSheet, ToastAndroid,TouchableOpacity, Dimensions, Image} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { api } from '../helpers'
import { begguTheme } from '../constants'
import { crudActions} from '../actions'
import { PhoneIcon } from '../components/Icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useFocusEffect } from '@react-navigation/native';
import { Card, Title, Paragraph, ActivityIndicator } from 'react-native-paper';
const {height, width} = Dimensions.get("screen");

const CotizacionDetalleScreen = ({ navigation: { goBack }  }) => {  
  const dispatch = useDispatch()     
  const { tasas, modelo, monto, item, auto } = useSelector(state => state.cotizaciones)   
  const { loading } = useSelector(state => state.users)  

  

  const showToastWithGravity = (mensaje) => {
    ToastAndroid.showWithGravity(
      mensaje,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
        );
      };
  
      const ItemView = (item) =>{
        return(      
          <View key={item.key} style={styles.compania}>
          <View style={styles.img_compania}>
            <Image style={styles.thumbnails} source={{uri:`${api}/static/images/companias/sm/${item.filename}`}} />
          </View>  
          <View style={styles.contenido_compania}>
            <View style={styles.txt_tasaco}>
              <Text style={styles.txt_ts}>Contado</Text>
              <Text style={styles.txt_tst}>{parseFloat(item.primaContado).toFixed(2)} $us.</Text>
            </View>
            <View style={styles.txt_tasacr}>
              <Text style={styles.txt_ts}>Crédito</Text>
              <Text style={styles.txt_tst}>{parseFloat(item.primaCredito).toFixed(2)} $us.</Text>
            </View>
            <View style={styles.txt_franquicia}>
              <Text style={styles.txt_tf}>Franquicia</Text>
              <Text style={styles.txt_tfs}>{parseFloat(item.franquicia).toFixed(2)} $us.</Text>
            </View>
    
          </View>
          <View style={styles.contenido_contacto}>
            
          </View>
         </View>                 
         )
      }
  
  
    const renderSeparator = () => (
      <View style={{ marginRight:2}}
      />
    );

    return (
      <View style={styles.container}>
         { loading ?
          <ActivityIndicator animating={loading} color={"#c1c1c1"} size={60} style={styles.loading}/>     
          :
          <>
        <View style={styles.footer}>
        <TouchableOpacity onPress={() => goBack()} style={styles._btn}>
          <MaterialCommunityIcons name="arrow-left-bold" size={25} color="#1b88da" />
        </TouchableOpacity>
        </View> 
        <View style={styles.coti} >
          <View style={styles.cnc} >
            <View style={styles.coto}>
              <Text style={styles._txt_ti}>Cotización:</Text>
              <Text style={styles._txt_co}>{item.id}</Text>
            </View>
            <View style={styles.coto}>
              <Text style={styles._txt_ti}>Valor:</Text>
              <Text style={styles._txt_co}>{parseFloat(item.valor).toFixed(2)} $us.</Text>
            </View>
            <View style={styles.coto}>
              <Text style={styles._txt_ti}>Nombre:</Text>
              <Text style={styles._txt_co} numberOfLines={1} ellipsizeMode='tail'>{item.nombre}</Text>
            </View> 
            <View style={styles.coto}>
              <Text style={styles._txt_ti}>Teléfono:</Text>
              <Text style={styles._txt_co} numberOfLines={1} ellipsizeMode='tail'>{item.email}</Text>
            </View> 
          </View>
        </View> 
        <View style={styles.header}>       
          <View style={styles.cnt} >
              <View style={styles.img} >
                <Image style={styles.thumbnail} source={{uri:`${api}/static/images/modelos/sm/${auto.Modelo.filename}`}} /> 
              </View>
              <View style={styles.dato} >
                <Text style={styles.txtTitulo}>Tipo   : {auto.Tipo.nombre}</Text>
                <Text style={styles.txtTitulo}>Marca  : {auto.Marca.nombre}</Text>
                <Text style={styles.txtTitulo}>Modelo : {auto.Modelo.nombre}</Text>                
              </View>  
          </View> 

        </View>
        <View style={styles.body}>
        <View style={styles.t_body}>
          <FlatList            
            ItemSeparatorComponent={renderSeparator}
            data={tasas}     
            renderItem={({ item }) => ItemView(item) }
            keyExtractor={item => item.id.toString()}                    
          />
          </View>
        </View>
        
          </>

        }
              
      </View>
    );
};

export default CotizacionDetalleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    padding:2,    
    backgroundColor:'#fff'            
  }, 
  footer:{
    borderWidth:1,
    borderColor: '#c1c1c150',
    height: height / 13,
    borderRadius:5,
    marginLeft:10,
    marginRight:10,
    marginTop:15   
  },
  coti:{    
    height: height / 6.1    
  },
  header:{    
    height: height / 7    
  },
  body:{    
    height: height / 2.02,        
    padding:10    
  },
  t_body:{
    borderWidth:1,
    borderColor: '#c1c1c1',
    padding:5,
    borderRadius:5,
    backgroundColor:'#fff'    
  },
 
  compania: {
    borderWidth:1,
    borderColor: '#c1c1c1',
    width: width / 1.12,
    height: 80,
    flexDirection:'row',
    borderRadius:5                
  },
  img_compania: {        
    height:78,   
    width:'30%',                         
    paddingLeft:5,
    paddingTop:2
  },
  thumbnails: {        
    height:70,   
    width:'90%',   
    borderRadius: 4,           
    marginLeft:2,     
    marginTop:1,         
    borderColor: '#c1c1c1',
    borderWidth: 1,
  },
  contenido_compania : {        
    height:78,   
    width:'69%',         
    padding:1
  },      
  txt_compania:{
    marginTop:10,    
    width: '95%',      
    fontSize:11,      
    textAlign: "center" ,
    height: 50,
    paddingTop:17,        
    marginBottom:5,
    borderRadius:2     

  },
  txt_tasaco:{                 
    width: '100%',                      
    borderRadius: 2,
    flexDirection:'row',
    height:23,
    marginBottom:2,
    backgroundColor:'#c1c1c150'
  },
  txt_tasacr:{        
    width: '100%',               
    borderRadius: 2,
    flexDirection:'row',
    height:23,
    marginBottom:2,
    backgroundColor:'#c1c1c110'
  },
  txt_franquicia:{            
    width: '100%',                      
    backgroundColor: '#1b88da',        
    borderRadius: 2,
    flexDirection:'row',
    height:23,
    
  },
  txt_ts:{      
    fontSize:12,
    color:'#4d4d4d',              
    width: '40%',
    paddingLeft:3
  },
  txt_tst:{      
    fontSize:12,
    color:'#4d4d4d',
    textAlign: "center",            
    width: '60%'
  },
  txt_tf:{      
    fontSize:12,
    color:'#eaeaea',    
    width: '40%',
    marginLeft:5,
    marginTop:2
  },
  txt_tfs:{      
    fontSize:12,
    color:'#eaeaea',
    textAlign: "center",            
    width: '60%'
  },
  button: {                                         
    paddingLeft:15,
    paddingRight:15,
    paddingTop:4,
    paddingBottom:4,
    borderRadius:5,
    backgroundColor:'#2DCE89'
  }, 
  thumbnail: {                                      
    alignItems:'center',        
    height: 100,        
    borderWidth:1,
    borderColor: '#c1c1c1',
    borderRadius: 5           
  },
  cnt:{            
    alignItems:'center',    
    flexDirection:'row',
    borderRadius: 5,
    borderColor:'#c1c1c1',
    borderWidth:1,
    flex:1,
    marginLeft:10,
    marginRight:10,
    padding:5,
    backgroundColor:'#fff'
  }, 
  dato:{            
    width:'55%',
    height:'100%',
    paddingTop: 20,
    paddingLeft: 12
  },
  img:{        
    width:'45%',
    height:'100%',
    alignSelf:'center',    
  },
  cnc:{            
    alignItems:'center',      
    borderRadius: 5,
    borderColor:'#c1c1c180',
    borderWidth:1,    
    marginTop:10,
    marginLeft:10,        
    marginRight:10,
    padding:5,
    backgroundColor:'#fff'        
  }, 
  coto:{
    flexDirection:'row',    
    borderRadius:5
  },
  _txt_ti:{
 
    width: '30%',
    paddingTop:1,
    paddingLeft:6,
    fontWeight: 'bold'
  },
  _txt_co:{

    width: '70%',
    paddingTop:1,
    paddingLeft:6
  },
  loading:{
    zIndex:1,
    position:'absolute',            
    marginLeft: width / 2.4,
    marginTop: height / 3.5,
    backgroundColor: '#4d4d4d20',
    borderRadius: 30,
    color:'#fff'
  },
  _btn:{
    borderWidth:1,
    height:35,
    width:35,
    marginTop: 15,
    marginLeft: 15,
    borderColor:'#c1c1c180',
    paddingTop: 3,
    paddingLeft: 3,
    borderRadius: 20
  }
 
});
