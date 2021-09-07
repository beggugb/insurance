import React  from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
const {height, width} = Dimensions.get("screen");
const about = require("../../assets/images/about.png");
const PerfilScreen = ({navigation}) => {    
    return (
      <View style={styles.container}>            
        <View style={styles.searchCotizaciones}>
        <Image
              source={about}
              style={{ height:height/1.1, width:width, zIndex: 1, marginRight:5}}
          />
        </View>
          
      </View>
    );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchCotizaciones:{                                       
    borderRadius: 4,            
  },
  
 
});
