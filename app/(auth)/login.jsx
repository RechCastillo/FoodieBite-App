import LoginButton from "../../components/LoginButton";
import React from "react";
import { Link, Redirect, router } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { images } from "../../constants";

const Login = () => {  
  return (  
    <View style={styles.container}>  
    <View className="w-full justify-center items-center h-full px-4 my-6">
              <Image source={images.foodiebite_logo}
                resizemode='contain'
                className="w-[260px] h-[45px] "
              />
              <Text className="text-xl text-orange-400 mt-5 mb-8 font-u_regular ">Log in to FoodieBite</Text>
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
      <LoginButton
             title=" Login "
             handlePress={()=> router.push('/home')}
             containerStyles="w-72 mt-7 "
            ></LoginButton>

      <Text style={styles.signupText}>  
        Don’t have an Account? <Link href="/signup" className="font-u_regular text-orange-400">Sign Up</Link>  
      </Text>  
      
      <View style={styles.iconContainer}>  
        <TouchableOpacity>  
          <Image source={require('../../assets/icons/facebook.png')} style={styles.icon} />  
        </TouchableOpacity>  
        <TouchableOpacity>  
          <Image source={require('../../assets/icons/google.png')} style={styles.icon} />  
        </TouchableOpacity>  
        <TouchableOpacity>  
          <Image source={require('../../assets/icons/twitter.png')} style={styles.icon} />  
        </TouchableOpacity>  
      </View>  
    </View>
     </View>
   
  );  
};  

const styles = StyleSheet.create({   
  container: {  
    flex: 1,  
    alignItems: "center",  
    justifyContent: "center", 
    backgroundColor: "#E0E0E0", 
    padding: 20,  
  },  
  title: {  
    fontSize: 30,  
    fontWeight: "bold",  
    marginBottom: 30,  
  },  
  input: {  
    width: "105%",  
    height: 55,  
    backgroundColor: "#fff",  
    borderRadius: 10,  
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,  
    marginBottom: 18, 
    elevation: 1, 
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
    width: 35,  
    height: 35,  
    marginHorizontal: 10,  
  },  
});  

export default Login; 