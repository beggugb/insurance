import React,{ useCallback, useState }  from 'react';
import { FlatList, View, ToastAndroid, TextInput, Image, StyleSheet, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { api } from '../../helpers'
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { begguTheme } from '../../constants'
import { crudActions }  from '../../actions'
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
const {height, width} = Dimensions.get("screen");

  const Cotizar = ({navigation:{goBack}, getPanels}) => {   
  const dispatch = useDispatch()    
  const { marca, modelo, tipo, tipoId, modeloImg } = useSelector(state => state.cotizaciones) 
  const { item } = useSelector(state => state.productos) 
  const {user } = useSelector(state => state.users)  
  const [monto, setMonto] =useState(0);
  const [mail, setMail] =useState('');   
  
 const cotizarHandle = () => {
   if(mail && monto){
      let cot = {}
      cot.tipoId = tipoId
      cot.productoId =  item.id
      cot.monto = monto              
      console.log(cot)   
      dispatch(crudActions.createList('TASAS_LISTA','cotizaciones/mobil/cotizar',cot))    
      getPanels(5,monto,mail,'')
   }
   else{
    showToastWithGravity('!! Datos faltantes')    
   }
    
}

const showToastWithGravity = (mensaje) => {
  ToastAndroid.showWithGravity(
    mensaje,
    ToastAndroid.SHORT,
    ToastAndroid.CENTER
      );
    };
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

      <View style={styles.cnu} >

        <View style={styles.form} >
          <View style={styles.label}>
            <Text style={styles.labels}>Monto ($us) :</Text>               
          </View>
          <View style={styles.dat_monto} >
              <TextInput                 
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => setMonto(val)}                  
              />                
          </View>  
        </View>
        <View style={styles.form} >
          <View style={styles.label}>
            <Text style={styles.labels}>Email :</Text>               
          </View>
          <View style={styles.dat_monto} >
              <TextInput                 
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => setMail(val)}                  
              />                
          </View>  
        </View>

        <View style={styles.dat_buttons} >
             <TouchableOpacity style={styles.buton} onPress={() => { cotizarHandle() }}>                                       
               <FontAwesome5 name="coins" size={15} color="#fff" style={styles.butoni}/>                                  
               <Text style={styles.butont}>Cotizar</Text>   
            </TouchableOpacity>              
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
          
          </View>  
      </View>
      <View style={styles.cliente} >
        <Text style={styles.txtTitulo}>Nombre : {user.name}</Text>        
      </View>
                       
    </View> 
    );
};

export default Cotizar;

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
        height: height /7.5,
        borderWidth:1,
        borderColor:'#c1c1c180',
        alignItems:'center',
        padding:3,
        flexDirection:'row',
        borderRadius: 5,
        marginBottom:2
        
      },
      cliente:{
        borderWidth:1,
        borderColor:'#c1c1c180',
        height: height /16,
        alignItems:'center',
        padding:10,
        borderRadius: 5,
      },
      cnu:{
        borderWidth:1,
        borderColor:'#c1c1c180',
        height: height /4,
        alignItems:'center',
        padding:10,
        borderRadius: 5,
        marginBottom:2
      },   

      img:{                     
        width:'45%',
        height:'100%',
        alignSelf:'center'
      },
      dato:{        
        width:'55%',
        height:'100%',
        paddingTop: 15,
        paddingLeft: 12
      },   
      
      
      bari:{        
        height: height /15,
        flexDirection:'row',
        
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
       
      form:{
        flexDirection:'row',
        height: 50,        
        width: '100%'
      }, 
      dat_form: {        
        width: '50%',                  
        height: 90,      
        marginBottom:5
      },
      label: {                
        width:'30%'
      },
      labels: {        
        paddingTop:10,
        paddingLeft: 5,
        fontSize: 12
      },
      dat_monto: {                                   
        height: 50,
        width: '70%',
        padding:5      
      },
      textInput: {        
        borderWidth:1,
        borderColor:'#c1c1c1',
        height: 35,
        width:'94%',
        borderRadius:5,
        marginLeft:10,
        marginRight:10,
        textAlign:'center'
      },
      dat_input: {                     
        height: 40,
        width: '99%',
        
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
        backgroundColor: "#1b88da",    
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
      }    
});
