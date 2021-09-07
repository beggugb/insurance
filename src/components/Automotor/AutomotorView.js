import React,{useState, useCallback}  from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import { useFocusEffect } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import { ActivityIndicator} from 'react-native-paper';
import { crudActions }  from '../../actions'
import Tipos from './Tipos'
import Marcas from './Marcas';
import Modelos from './Modelos'
import Cotizar from './Cotizar'
import Cotizacion from './Cotizacion'
const {height, width} = Dimensions.get("screen");

const AutomotorView = ({navigation, route}) => {   
    const dispatch = useDispatch()         
    const { loading, user, userId, userToken, userf } = useSelector(state => state.users)
    const [component, setComponent] = useState()
    const [s1, setS1] = useState('#1b88da')
    const [s2, setS2] = useState('#c1c1c1')
    const [s3, setS3] = useState('#c1c1c1')
    const [s4, setS4] = useState('#c1c1c1')
    const [s5, setS5] = useState('#c1c1c1')

    const getPanels = (pnl,id,label,img) =>{                 
        /*console.log('-------------')
          console.log('panel : ' + pnl)
          console.log('id : ' + id)
          console.log('label : ' + label)
          console.log('img : ' + img)
        console.log('-------------')*/

      switch(pnl){
        case 1:
          dispatch(crudActions.getData('TIPOS_LISTA','tipos',1,12,'nombre','ASC'))           
          setComponent(<Tipos navigation={navigation} getPanels={getPanels}  />)    
          setS1('#1b88da')
          setS2('#c1c1c1')
          setS3('#c1c1c1')
          setS4('#c1c1c1')
          setS5('#c1c1c1')      
        break;
        case 2:                  
          dispatch(crudActions.getLis('MARCAS_LISTA','marcas'))          
          if(label && id)
          { dispatch({type:'COTIZACIONES_SET_TIPO_ID',tipo:label,tipoId:id}) }
          setComponent(<Marcas navigation={navigation} getPanels={getPanels}  />)
          setS2('#1b88da')
          setS1('#c1c1c1')
          setS3('#c1c1c1')
          setS4('#c1c1c1')    
          setS5('#c1c1c1')        
        break;
        case 3:    
          dispatch(crudActions.getListsDetalle('MODELOS_LISTA','modelos',id,img))  
          if(label && id){
          dispatch({type:'COTIZACIONES_SET_MARCA_ID',marcaId:id,marca:label})}
          setComponent(<Modelos navigation={navigation} getPanels={getPanels}  />)          
          setS3('#1b88da')
          setS2('#c1c1c1')
          setS1('#c1c1c1')
          setS4('#c1c1c1')  
          setS5('#c1c1c1')          
        break;
        case 4:           
        if(label && id && img){                   
          dispatch({type:'COTIZACIONES_SET_MODELO_ID',modeloId:id,modelo:label,modeloImg:img})}
          setComponent(<Cotizar navigation={navigation} getPanels={getPanels}  />)   
          setS4('#1b88da')
          setS2('#c1c1c1')
          setS1('#c1c1c1')
          setS3('#c1c1c1') 
          setS5('#c1c1c1')                  
        break;
        case 5:   
        if(pnl && id){                   
          dispatch({type:'COTIZACIONES_SET_MONTO',monto:id,email:label})                         
        }   
        setComponent(<Cotizacion navigation={navigation} getPanels={getPanels}  />)   
          setS5('#1b88da')
          setS2('#c1c1c1')
          setS1('#c1c1c1')
          setS3('#c1c1c1') 
          setS4('#c1c1c1')        
        break;
        default:
        break;
     }
    }

    useFocusEffect(
      useCallback(() => {            
        getPanels(1,0,'','')  
      return () => {        
        /*dispatch({type:'PRODUCTOS_RESET_ITEM'})                */
      };      
    }, [])
  );
    

    return (
      <View style={styles.container}>       
        
        <View style={styles.subpanel}>           
          <View style={styles.row}>            
            <FontAwesome5 name="car" size={30} color={s1} />
          </View>
    
          <Text style={styles.item}>
            <MaterialCommunityIcons name="arrow-right-bold" size={20} color="#4d4d4d" />
          </Text>        
          <View style={styles.row}>            
            <FontAwesome5 name="clipboard-list" size={30} color={s2} />
          </View>
        
          <Text style={styles.item}>
            <MaterialCommunityIcons name="arrow-right-bold" size={20} color="#4d4d4d" />
          </Text>        
          <View style={styles.row}>
            <MaterialCommunityIcons name="file-plus" size={30} color={s3} />
          </View>
          <Text style={styles.item}>
            <MaterialCommunityIcons name="arrow-right-bold" size={20} color="#4d4d4d" />
          </Text>        
          <View style={styles.row}>
            <MaterialCommunityIcons name="point-of-sale" size={30} color={s4} />
          </View>

          <Text style={styles.item}>
            <MaterialCommunityIcons name="arrow-right-bold" size={20} color="#4d4d4d" />
          </Text>        
          <View style={styles.row}>
          <MaterialCommunityIcons name="email-send" size={30} color={s5} />
          </View>

        </View>    
        { loading ?
          <ActivityIndicator animating={loading} color={"#c1c1c1"} size={60} style={styles.loading}/>     
          :
          <>
          <View style={styles.panel}> 
          <Animatable.View animation="bounceInLeft" direction="alternate">   
            {component}
          </Animatable.View>   
        </View> 
          </>
        }        
            
      </View>
    );
};

export default AutomotorView;

const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:2            
      },  
      subpanel: {        
        borderColor: '#c1c1c1',
        borderWidth: 1,
        borderRadius: 5,                    
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#c1c1c130',
        marginTop:25,
        height: height /15 ,
        paddingLeft:20
      },
      panel: {
        marginTop:5,
        borderRadius: 5,    
        backgroundColor: '#fff',
        height: height / 1.3,        
      },
      item:{        
        height: 50,
        width: 40,
        borderRadius: 25,
        paddingTop: 11,
        alignContent:'center',
        paddingLeft: 8,
        color:'#4d4d4d'
      },
      row:{        
        height: 50,
        width: 35,
        paddingTop: 7,
        borderRadius: 25,
        textAlign:'center'        
      },
      loading:{
        zIndex:1,
        position:'absolute',            
        marginLeft: width / 2.4,
        marginTop: height / 3.5,
        backgroundColor: '#4d4d4d40',
        borderRadius: 30
      },
    
});
