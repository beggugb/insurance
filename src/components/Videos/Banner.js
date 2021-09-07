import React,{useState, useCallback}  from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
const {height, width} = Dimensions.get("screen");

const Banner = ({navigation}) => {   
    const [playing, setPlaying] = useState(true)
    const onStateChange = useCallback((state) => {
        if (state === "ended") {         
          /*Alert.alert("video has finished playing!");*/
        }
         
      }, []); 
    return (
    <View style={styles.container}>             
      <YoutubePlayer
        height={129}
        width={width /1.022}
        play={playing}
        videoId="rUWxSEwctFU"
        onChangeState={onStateChange}
      /> 
    </View>
    );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:3
  }
});
