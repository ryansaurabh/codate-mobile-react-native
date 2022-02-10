import {View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';

export default function MsgBox({title, image, subtitle}) {
  return (
    <View style={styles.container}>
      <View>
        
        <Image style={styles.img} source={image} />
      </View>
      <View style={styles.title}>
        <View>
      <Text style={{fontWeight:'500', fontSize:20, color:'#E5E5E5',fontFamily:'DavidLibre'}}> {title} </Text>
      </View>
      <View>
          <Text style={{fontSize:13, color:"#555",paddingLeft:5,fontFamily:'DavidLibre'}}>{subtitle}</Text>
          </View>
      </View>
      <View>
      <Text style={{fontSize:12, color:'#555'}}>3:30pm</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    backgroundColor:  '#181228',
    borderBottomWidth: 0.2,
    borderBottomColor: '#181228',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  img: {
    height: 70,
    width: 70,
    resizeMode: 'cover',
    borderRadius: 5,
  },

  title:{
    width:250,
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'space-between',
      
  }
});
