import React  from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import ProductosLista from '../components/Productos/ProductosLista'
import ListaCompanias from '../components/Companias/ListaCompanias'
import Last from '../components/Cotizaciones/Last'
import Banner from '../components/Videos/Banner'
import Propaganda from '../components/Videos/Propaganda'
import { LogoIcon, PerfilIcon } from '../components/Icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const iconLogo = require("../../assets/icon.png");
const {height, width} = Dimensions.get("screen");

const HomeScreen = ({navigation}) => {    
    return (
    <View style={styles.container}>   
      <View style={styles.header_titulo}>
        <Text style={styles.header_txt} >SARI </Text>
        <Text style={styles.header_tx} >tu comprador de seguros..</Text>
        <View style={styles.header_img}>
          <PerfilIcon/>
        </View>        
      </View>  
      <View style={styles.card_propaganda}>
        <Propaganda/>
      </View>
      <View style={styles.card_cotizar}>
        <View style={styles.card_img}>
          <Image
              source={iconLogo}
              style={{ height:160, width:140, zIndex: 1,marginTop:30,marginLeft:25}}
          />
        </View>
        <View style={styles.card_cotizacion}>
        <ProductosLista navigation={navigation}/>
        </View>
      </View>      
      <View style={styles.card_servicios}>
        <ListaCompanias/>
      </View>
      <View style={styles.card_last}>
        <Last/>
      </View>                     
    </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:3,    
  },
  header_titulo:{    
    height : height / 8,
    flexDirection:'row'
  }, 
  header_txt:{    
    width:'20%',
    paddingTop:40,
    textAlign: 'center',
    color:'#1b88da',
    fontWeight: 'bold',
    fontSize:18,
    marginLeft:15        
  },
  header_tx:{    
    width:'55%',
    paddingTop:42,    
    textAlign: 'left',
    color:'#4d4d4d',
    zIndex:1,
  },
  header_img:{    
    width:'20%', 
    alignItems:'center',
    paddingTop: 25
  },
  card_propaganda:{    
    height : height / 6,    
    padding:5 
  },

  card_cotizar:{    
    height : height / 4,
    flexDirection:'row',       
    padding:5,
    borderWidth:1,
    borderColor: '#c1c1c180',
    borderRadius:9,
    marginLeft: 6,
    marginRight: 6
  },
  card_img:{    
    width:'50%',    
    borderRadius: 8    
  },
  card_cotizacion:{    
    width:'50%',        
    borderRadius: 8
  },  
  card_servicios:{    
    height : height / 4.6,
    padding: 5,        
  },
  card_last:{    
    height : height / 8.5,    
    padding:5 
  },
   
});
