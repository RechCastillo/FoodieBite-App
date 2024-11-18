import CustomButton from "../components/CustomButton";
import { Link, Redirect, router } from "expo-router";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";

export default function App() {  
  return (  
    <ImageBackground   
    source={require('./../assets/images/background(1).jpg')} // Replace with your background image path  
    style={{ flex: 1 }}  
  >    

    <SafeAreaView className=" h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="w-full justify-center items-center
        min-h-screen h-[85vh] px-4">
          <Image
            source={images.imagelogo}
            className="w-[300px] h-[300px]"
            resizeMode='contain'
          />
          <Image
            source={images.foodiebite_logo}
            className="w-[250px] h-[85px] pt-10"
            resizeMode='contain'
          />
          <View className="relative mt-5">
            <Text className="text-l text-white font-u_bold
            text-center">Enjoy your food</Text>
             <Text className="text-l text-white font-u_bold
            text-center">enjoy your first bite.</Text>

            <CustomButton
             title=" GET STARTED "
             handlePress={()=> router.push('./login')}
             containerStyles="w-72 mt-7 "
            >

            </CustomButton>
          </View>

        </View>

      </ScrollView>

    </SafeAreaView>
    </ImageBackground>
  );  
}  