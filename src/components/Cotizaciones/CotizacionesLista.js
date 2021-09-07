import React,{useState} from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { crudActions }  from '../../actions'
import { ActivityIndicator} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { begguTheme } from '../../constants'
import { useCallback } from 'react';
const {height, width} = Dimensions.get("screen");


function CotizacionesLista ({navigation}){            
    const dispatch = useDispatch()     
    const { data, pagina, paginas, total } = useSelector(state => state.cotizaciones)    
    const { loading, user, userId, userToken, userf } = useSelector(state => state.users)
    const dd = userToken.replace(/"/g,'')

    const getComponent = (tipo) =>{                          
      let iok = 0
       if(tipo === 'prev')
       {
        iok = pagina <= 1 ? pagina : pagina - 1 
       }else{
        iok = pagina >= paginas ? pagina : pagina + 1 
       } 

      dispatch(crudActions.getCotizaciones('COTIZACIONES_DATA','cotizaciones', iok, 17, dd))              
    }

    useFocusEffect(
      useCallback(() => {            
        dispatch(crudActions.getCotizaciones('COTIZACIONES_DATA','cotizaciones', 1, 17, dd))       
      return () => {        
        dispatch({type:'COTIZACIONES_RESET_DATA'})        
      };      
    }, [])
  );
  

    
    const ItemView = (item) =>{
      return(      
        <TouchableOpacity onPress={() => {  
            dispatch(crudActions.getCotizacion('cotizaciones',item.Cotizacion.id))
            navigation.navigate('CotizacionDetalle')}}>                                     
      <View key={item.key} style={styles.card}>                             
         <Text numberOfLines={1} ellipsizeMode='tail' style={styles.txtCliente}>
           {item.Marca.nombre} / {item.Modelo.nombre}
         </Text>
         <Text style={styles.txtProducto}>$ {parseInt(item.Cotizacion.valor).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</Text>

         <Text style={styles.txtProducto}>{item.Cotizacion.ivigencia}</Text>
      </View>      
      </TouchableOpacity>     
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
    <View style={styles.cotizaciones} > 
      <ActivityIndicator animating={loading} color={"#c1c1c1"} size={40} style={styles.loading}/>  
      <View style={styles.header}>        
        <Text style={styles.labelCotizaciones}>{total} registros página {pagina} de {paginas}</Text>
      </View>

      <View style={styles.card}>                            
          <Text style={styles.headerCliente}>Vehículo</Text>
          <Text style={styles.headerProducto}>Valor</Text>
          <Text style={styles.headerButton}>Fecha</Text>                               
      </View>
      <View style={styles.body}> 
        <FlatList        
          ItemSeparatorComponent={renderSeparator}
          data={data}     
          renderItem={({ item }) => ItemView(item) }
          keyExtractor={item => item.id.toString()}                    
        /> 
      </View>  
      <View style={styles.footer} > 
        <TouchableOpacity onPress={() => getComponent('prev',17)} style={styles._btn}>
          <MaterialCommunityIcons name="arrow-left-bold" size={25} color="#1b88da" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => getComponent('next',17)} style={styles._btn}>
          <MaterialCommunityIcons name="arrow-right-bold" size={25} color="#1b88da" />
        </TouchableOpacity>
      </View>
  </View>  
    ); 
}
    
const styles = StyleSheet.create({  
    cotizaciones: {        
        flex:1,            
      },
      header:{
        borderColor: '#c1c1c1',      
        borderBottomWidth: 1,                        
        flexDirection: 'row',
        marginBottom:1,     
        height: 25
        
      }, 
      _btn: {      
        borderWidth:1,
        borderColor: '#c1c1c1', 
        borderRadius: 15,
        height:30,
        marginRight:15
      },    
      card: {      
        borderColor: '#c1c1c1',      
        borderBottomWidth: 1,                        
        flexDirection: 'row',
        marginBottom:1,      
        height: 30
      }, 
      body: {      
        borderColor: '#c1c1c150',      
        borderBottomWidth: 1,                        
        flexDirection: 'row',
        marginBottom:1,      
        height: height / 1.55,
        marginBottom:5
      },
      footer: {      
        borderColor: '#c1c1c160',      
        borderBottomWidth: 1,                        
        flexDirection: 'row',
        marginBottom:1,      
        height: 45,
        padding:5
      },   
      labelCotizaciones:{    
        textAlign:'right',
        paddingRight:5,
        color:'#4d4d4d',
        fontStyle: 'italic',
        width:"100%"
      },
      loading:{
        zIndex:1,
        position:'absolute',            
        marginLeft: width / 2.5,
        marginTop: height / 4
      },    
     
       headerCliente: {            
        width:'55%',
        borderColor: '#c1c1c1',
        backgroundColor: begguTheme.COLORS.DEFAULT,    
        borderRightWidth: 1,
        paddingLeft:5,
        paddingTop:5,
        fontSize: 13,
        color: '#fff' 
      },
      headerProducto: {                    
        width:'25%',
        paddingLeft:5,
        paddingTop:5,
        fontSize: 13, 
        backgroundColor: begguTheme.COLORS.DEFAULT,    
        color: '#fff' 
      },
      headerButton: {                    
        width:'20%',
        borderColor: '#c1c1c1',      
        borderLeftWidth: 1,
        paddingLeft:5,
        paddingTop:5,
        fontSize: 13, 
        backgroundColor: begguTheme.COLORS.DEFAULT,    
        color: '#fff' 
      },    
      txtCliente: {            
        width:'55%',
        borderColor: begguTheme.COLORS.DEFAULT,             
        paddingLeft:5,
        paddingTop:5,
        fontSize: 12      
      },
      txtProducto: {                    
        width:'25%',
        paddingLeft:5,
        paddingTop:5,
        fontSize: 12, 
      },
      txtButton: {                    
        width:'20%',
        borderColor: '#c1c1c1',      
        borderLeftWidth: 1,
        flexDirection:'row'      
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",       
      },
      modalView: {      
        margin: 20,
        backgroundColor: "#eaeaea",
        borderWidth:2,
        borderColor: "#c1c1c1",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 5
        },
         shadowOpacity: 0.25,
         shadowRadius: 4,
         elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2        
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: begguTheme.COLORS.ERROR,
        zIndex:2,
        position: 'absolute',
        alignItems: 'flex-end',
        marginTop:-20,      
        elevation: 5
      },  
  
    
})
export default CotizacionesLista