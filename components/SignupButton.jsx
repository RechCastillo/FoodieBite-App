import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const SignupButton = ({title, handlePress, containerStyles, 
textStyles, isLoading}) => {
  return (
    <TouchableOpacity
     onPress={handlePress}
     activeOpacity={0.7}
     className={`bg-orange-500 rounded-xl min-h-[62px]
     justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''} `}
    >
        <Text className={`font-u_bold text-lg text-black ${textStyles}`}>
           {title}
        </Text>

    </TouchableOpacity>
    
  )
}

export default SignupButton
