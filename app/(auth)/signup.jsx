import LoginButton from "../../components/SignupButton";
import React from "react";
import { Link, Redirect, router } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { images } from "../../constants";

const Signup = () => {  
  return (  
    <View style={styles.container}> 
    <View className="w-full justify-center items-center h-full px-4 my-6">
              <Image source={images.foodiebite_logo}
                resizemode='contain'
                className="w-[260px] h-[45px] "
              /> 
      <Text className="text-xl text-orange-400  mt-5 mb-8 font-u_regular ">Signup to FoodieBite</Text>
      <TextInput style={styles.input} placeholder="Fullname" />  
      <TextInput style={styles.input} placeholder="Email" />  
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />  
      <TextInput style={styles.input} placeholder="Phone Number" />  
     
      <LoginButton
             title=" Create Account  "
             handlePress={()=> router.push('/login')}
             containerStyles="w-72 mt-7 "
            ></LoginButton>

      <Text style={styles.loginText}>  
        Already have an Account? <Link href="/login" className="font-u_regular text-orange-400">Login</Link>  
      </Text>  

    </View> 
    </View>
    
  );  
};  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    padding: 25,  
    alignItems: "center",  
    backgroundColor: "#E0E0E0",
    justifyContent: 'center',  
  },  
  title: {  
    fontSize: 25,  
    fontWeight: 'bold',  
    textAlign: 'center',  
    marginBottom: 35,  
  },  
  input: {  
    width: "105%",  
    height: 55,  
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,  
    paddingHorizontal: 10,  
    marginBottom: 18, 
    elevation: 1, 
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

