import React from "react";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Signup = () => {  
  return (  
    <ImageBackground   
    source={require('./../assets/images/background(1).jpg')} // Replace with your background image path  
    style={styles.background}  
  >  

    <View style={styles.container}>  
      <Text style={styles.title}>SIGN UP</Text>  
      <TextInput style={styles.input} placeholder="Fullname" />  
      <TextInput style={styles.input} placeholder="Email" />  
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />  
      <TextInput style={styles.input} placeholder="Phone Number" />  
      <TouchableOpacity style={styles.button}>  
        <Link href="/login"style={styles.buttonText}>Create Account</Link>  
      </TouchableOpacity>  
      <Text style={styles.loginText}>  
        Already have an Account? <Link href="/login" className="font-u_regular text-orange-400">Login</Link>  
      </Text>  
      <View style={styles.iconContainer}>  
        <TouchableOpacity>  
          <Image source={require('./../assets/icons/facebook.png')} style={styles.icon} />  
        </TouchableOpacity>  
        <TouchableOpacity>  
          <Image source={require('./../assets/icons/google.png')} style={styles.icon} />  
        </TouchableOpacity>  
        <TouchableOpacity>  
          <Image source={require('./../assets/icons/twitter.png')} style={styles.icon} />  
        </TouchableOpacity>  
      </View>  
    </View> 
    </ImageBackground> 
  );  
};  

const styles = StyleSheet.create({  
  background: {  
    flex: 1,  
    justifyContent: "center",  
  },  
  container: {  
    flex: 1,  
    padding: 25,  
    justifyContent: 'center',  
  },  
  title: {  
    fontSize: 25,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    marginBottom: 35,  
  },  
  input: {  
    height: 50,  
    borderColor: '#D3D3D3', // Light gray border  
    backgroundColor: "#EAEAEA", 
    borderWidth: 1,  
    borderRadius: 5,  
    paddingHorizontal: 10,  
    marginBottom: 25,  
  },  
  button: {  
    backgroundColor:  "#F87910", // Orange button  
    padding: 16,  
    borderRadius: 15,  
    alignItems: 'center', 
    
     
  },  
  buttonText: {  
    color: '#000', // White text  
    fontWeight: 'bold',  
    fontSize: 18,
  },  
  loginText: {  
    textAlign: 'center',  
    marginTop: 15,  
  },  
  loginLink: {  
    color: '#FFA500', // Orange link  
    fontWeight: 'bold',  
  },  
  iconContainer: {  
    flexDirection: 'row',  
    justifyContent: 'center',  
    marginTop: 20,
  },  
  icon: {  
    width: 40,  
    height: 40,  
    marginHorizontal: 10,  
  },  
});  

export default Signup; 

