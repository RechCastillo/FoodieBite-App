import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const CustomButton = ({title, handlePress, containerStyles, 
textStyles, isLoading}) => {
  return (
    <TouchableOpacity
     onPress={handlePress}
     activeOpacity={0.7}
     className={`bg-orange-500 rounded-xl min-h-[62px]
     justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''} `}
    >
        <Text className={`font-u_bold text-lg text-white ${textStyles}`}>
           {title}
        </Text>

    </TouchableOpacity>
    
  )
}

export default CustomButton

