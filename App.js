import React from 'react';
import {Text,View,Button,TextInput, StyleSheet,Image, TouchableOpacity} from 'react-native';
import piven from './assets/piven.jpg';



function App(){
  return<View style={styles.container}>

    <Image source={piven} style={styles.image} />

    <View style={styles.detailContainer}>
      <Text style={styles.firstText}>School</Text>
    </View>

    <View>
    <Text style={styles.secondText}>Codetrain College</Text>
    </View>

    <View >
      <Text style={styles.detailText}>Email Address</Text>
      <Text style={styles.infoText}>kezty100@gmail.com</Text>
    </View>

    <View>
      <Text style={styles.NameText}>Name</Text>
      <TextInput defaultValue='Ethel Komson' style={styles.underline} />
      <Text style={styles.NameText}>Nick Name</Text>
      <TextInput defaultValue='Ethelcom' style={styles.underline}></TextInput>
      <Text style={styles.NameText}>Emergency Contact</Text>
      <TextInput defaultValue='+2550557626606' style={[styles.underline]}/>
    
    </View>

    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UPDATE PROFILE</Text>
      </TouchableOpacity>
      
    </View>
    
    </View>
    
  
}




const styles = StyleSheet.create({
  container:{
    flex:2.5,
    marginHorizontal:5,
    backgroundColor:'white',
    borderWidth:9,
    borderColor:'skyblue'
   

  },

  image:{
    marginTop:80,
    height:100,
    width:100,
    marginBottom:30,
    alignSelf:'center',
    borderRadius:75
  },

  detailContainer:{
    flexDirection:"row",
    marginVertical:3,
    
    
  },

  firstText:{
    paddingLeft:20,
    color:'skyblue'


  },

  secondText:{
    paddingLeft:20
  },

  detailText:{
    paddingLeft:20,
    color:'skyblue',
    marginTop:6
    
  },

  infoText:{
    paddingLeft:20
  },
   
    NameText:{
      paddingLeft:20,
      color:'blue',
      marginTop:20
    },

   underline:{
     borderBottomWidth:0.5,
     fontSize:15,
     fontWeight:'bold',
     paddingLeft:20,
     
   },

   button:{
     alignSelf:'center',
     alignItems:'center',
     borderRadius:30,
     marginVertical:50,
     backgroundColor:'skyblue',
     height:45,
     width:300,
    
   },
   buttonText:{
     color:'black',
     fontWeight:'bold',
     
   }
    

  

})

export default App;
