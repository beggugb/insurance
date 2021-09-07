import React,{ useCallback  }  from 'react';
import { FlatList, View, ToastAndroid, Image, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { api } from '../../helpers'
import {  useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { begguTheme } from '../../constants'
import { crudActions }  from '../../actions'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const {height, width} = Dimensions.get("screen");

  const Cotizacion = ({navigation:{goBack}, getPanels}) => {   
  const dispatch = useDispatch()    
  const { marca, marcaId, modelo, modeloId, tipo, tipoId, modeloImg, tasas, monto, email } = useSelector(state => state.cotizaciones) 
  const { item } = useSelector(state => state.productos) 
  const { user } = useSelector(state => state.users)  
  
  const saveHandle = () => {        
    let fecha = new Date() 
    let dating ={}   
    dating.orden = 1
    dating.nro = 1
    dating.ivigencia = fecha
    dating.fvigencia = fecha
    dating.valor = monto
    dating.tipoId = tipoId
    dating.productoId = item.id
    dating.cliente = user.id
    dating.nombre = user.name
    dating.email = email
    dating.modelo = modeloImg
    dating.marcaId = marcaId
    dating.modeloId = modeloId
    dating.usuarioId = 1        
    dispatch(crudActions.createList('COTIZACIONES_ADD','cotizaciones',dating))       
    showToastWithGravity('!! Cotización guardada ')
    getPanels(1,0,'','')
}


 const showToastWithGravity = (mensaje) => {
ToastAndroid.showWithGravity(
  mensaje,
  ToastAndroid.SHORT,
  ToastAndroid.CENTER
    );
  }; 



  useFocusEffect(
    useCallback(() => {                        
    return () => {        
      /*dispatch({type:'COTIZACIONES_RESET'}) */
    };      
  }, [])
 );
  
 
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
  <View style={{ marginTop:2}}
  />
);


  return (
    <View style={styles.bar} >
      <View style={styles.bari} >
        <View style={styles.barck} >
          <TouchableOpacity onPress={() => getPanels(3)} style={styles.barck_icon} >
            <MaterialCommunityIcons name="keyboard-backspace" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.mensaje} >
          <Text>Cotizar Vehículo</Text>
        </View>        
      </View>   
      <View style={styles.cnt} >
          <View style={styles.img} >
            <Image style={styles.thumbnail} source={{uri:`${api}/static/images/modelos/sm/${modeloImg}`}} /> 
          </View>  
          <View style={styles.dato} >
            <Text style={styles.txtTitulo}>Tipo   : {tipo}</Text>
            <Text style={styles.txtTitulo}>Marca  : {marca}</Text>
            <Text style={styles.txtTitulo}>Modelo : {modelo}</Text>
            <Text style={styles.txtTitulo}>Valor  : {parseFloat(monto).toFixed(2)} $us.</Text>
            <Text style={styles.txtTitulo}>{user.name}</Text>
          
          </View>  
      </View>  
      <View style={styles.cnu} >
        <View style={styles.panelcoti} >
        <Text style={styles.dat_comparativo}>Comparativo</Text> 
          <View style={styles.cotizar} >
            <TouchableOpacity style={styles.button} onPress={() => { saveHandle() }}>                        
              <MaterialCommunityIcons name="content-save" size={24} color="white" />           
            </TouchableOpacity>
          </View>
        </View>
          <FlatList            
            ItemSeparatorComponent={renderSeparator}
            data={tasas}     
            renderItem={({ item }) => ItemView(item) }
            keyExtractor={item => item.id.toString()}                    
          />
      </View>                     
    </View> 
    );
};

export default Cotizacion;

const styles = StyleSheet.create({
    bar: {        
        width: '100%',                          
        borderRadius: 5,      
        padding:2
      },
      panelcoti:{                        
        borderColor: '#c1c1c1',
        borderWidth:1,
        height: 50,
        width:'100%',
        flexDirection:'row'
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
        alignItems:'center',        
        height: 100,        
        borderWidth:1,
        borderColor: '#c1c1c1',
        borderRadius: 5           
      },
      titulo: {                                             
        marginLeft: 2,      
        marginRight: 2,    
      },
      txtTitulo: {       
        fontSize: 12,     
        color: '#4d4d4d',
        textAlign:'left',
        marginTop:3
      }, 
      cnt:{        
        height: '20%',
        alignItems:'center',
        padding:3,
        flexDirection:'row',
        borderRadius: 5
      },      
      cnu:{
        borderWidth:1,
        borderColor: '#c1c1c1',
        height: '70%',
        alignItems:'center',
        padding:10,
        borderRadius:5
      },   
        

      dat_comparativo:{                        
        textAlign:'center',        
        color:begguTheme.COLORS.DEFAULT,
        borderRadius:5,        
        paddingTop:12,
        fontWeight: 'bold',
        width:'70%'
      },
      cotizar:{                
        alignItems:'center',
        padding:10,
        width:'30%'
      }, 
      
      dato:{            
        width:'55%',
        height:'100%',
        paddingTop: 1,
        paddingLeft: 12
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
        alignItems:'center'
      },
      barck_icon:{
        borderWidth:1,
        borderColor: '#c1c1c1',    
        height:30,
        width:30,
        borderRadius:15    
      },
      dat_form: {        
        width: '100%',                  
        height: 90,      
        marginBottom:5
      }, 
      label: {        
        paddingTop: 8,
        paddingLeft: 8,
        paddingBottom:8,
        color: '#4d4d4d',
        fontSize: 16,
        color: '#4d4d4d',
        textAlign:'center'
      },
      dat_input: {                     
        height: 40,
        width: '99%'
      },
      dat_monto: {                      
        borderWidth:1,      
        height: 30,
        width: '99%',
        height: 40,    
        borderColor:'#c1c1c1',
        borderRadius:9,
        marginLeft:3,
        marginRight:3,
        paddingLeft:10,
        paddingTop:5

      },
      dat_buttons: {                            
        height: 30,
        width: '100%',      
        borderRadius:5,
        height: 50,            
        alignItems:'center',      
        marginTop:20,   
        
      },
      buton: {                 
        backgroundColor: "#FB6340",    
        borderRadius:4,
        color:'#fff',    
        flexDirection:'row',            
        width:'100%',
        alignItems:'center',            
        height: 50
      },
      butont:{
        color:'#fff',
        fontSize: 16,
        marginLeft:8,
        width:'55%',
        textAlign:'left'
      },
      butoni:{
        color:'#fff',
        width:'45%',
        textAlign:'right'
      },
     
      img:{        
        width:'45%',
        height:'100%',
        alignSelf:'center'
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
        borderColor: '#c1c1c1',
        borderWidth: 1, 
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
        borderWidth:1,
        borderColor: '#c1c1c1',        
        borderRadius: 2,
        flexDirection:'row',
        height:23,
        marginBottom:2,
        backgroundColor:'#c1c1c150'
      },
      txt_tasacr:{        
        width: '100%',           
        borderWidth:1,
        borderColor: '#1b88da',        
        borderRadius: 2,
        flexDirection:'row',
        height:23,
        marginBottom:2,
        backgroundColor:'#c1c1c110'
      },
      txt_franquicia:{            
        width: '100%',                  
        borderWidth:1,
        borderColor: '#1b88da', 
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
        textAlign: "center",            
        width: '40%'
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

});
