import React from "react";
import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {  
  return (  
    <ImageBackground   
    source={require('./../assets/images/background(1).jpg')} // Replace with your background image path  
    style={styles.background}  
  >  

    <View style={styles.container}>  
      <Text style={styles.title}>LOGIN</Text>  
      <TextInput  
        style={styles.input}  
        placeholder="Email"  
        placeholderTextColor="#888"  
      />  
      <TextInput  
        style={styles.input}  
        placeholder="Password"  
        placeholderTextColor="#888"  
        secureTextEntry  
      />  
      <TouchableOpacity>  
        <Text style={styles.forgotPassword}>Forget Your Password?</Text>  
      </TouchableOpacity>  
      <View style={styles.separator} />  
      <TouchableOpacity style={styles.loginButton}>  
        <Link href="/home"style={styles.loginButtonText}>Login</Link>  
      </TouchableOpacity>  
      <Text style={styles.signupText}>  
        Don’t have an Account? <Link href="/signup" className="font-u_regular text-orange-400">Sign Up</Link>  
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
    alignItems: "center",  
    justifyContent: "center",  
    padding: 20,  
  },  
  title: {  
    fontSize: 30,  
    fontWeight: "bold",  
    marginBottom: 30,  
  },  
  input: {  
    width: "100%",  
    height: 50,  
    backgroundColor: "#EAEAEA",  
    borderRadius: 5,  
    paddingHorizontal: 10,  
    marginBottom: 15,  
  },  
  forgotPassword: {  
    color: "#888", 
    marginBottom: 20,  
  },  
  separator: {  
    height: 1,  
    width: "90%",  
    backgroundColor: "#9A9A9A",  
    marginVertical: 20,  
  },  
  loginButton: {  
    backgroundColor:  "#F87910", // Orange button  
    borderRadius: 15,  
    paddingVertical: 15,  
    paddingHorizontal: 130,  
  }, 
  loginButtonText: {  
    color: "#000",  
    fontWeight: "bold", 
    fontSize: 20, 
  },  
  signupText: {  
    marginTop: 20,  
    color: "#888",  
  },  
  signupLink: {  
    color: "#FFA500", // Orange link  
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

export default Login; 