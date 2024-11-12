import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Search = () => {  
  return (
    <ImageBackground   
    source={require('../../assets/images/background(1).jpg')} // Replace with your background image path  
    style={styles.background}  
  >    


    <View style={styles.container}>  
      <Text style={styles.title}>Search</Text>  
      <View style={styles.searchBar}>  
        <Image source={require('../../assets/icons/search.png')} style={styles.searchIcon} />  
        <TextInput  
          style={styles.input}  
          placeholder="Search for food"  
          placeholderTextColor="#888"  
        />  
      </View>  

      <Text style={styles.historyTitle}>History record</Text>  

      <View style={styles.historyContainer}>

        <TouchableOpacity style={styles.historyItem}>  
          <Text style={styles.historyText}>Ice coffee</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.historyItem}>  
          <Text style={styles.historyText}>Dessert</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.historyItem}>  
          <Text style={styles.historyText}>Sphagetti</Text>  
        </TouchableOpacity>  
        </View>

        <View  style={styles.historyContainer}>
        <TouchableOpacity style={styles.historyItem}>  
          <Text style={styles.historyText}>Chicken</Text>  
        </TouchableOpacity>  
        <TouchableOpacity style={styles.historyItem}>  
          <Text style={styles.historyText}>Steak</Text>  
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
    padding: 20,  
    
  },  
  title: {  
    fontSize: 24,  
    fontWeight: 'bold',  
    marginBottom: 20,  
    textAlign: 'center',  
  },  
  searchBar: {  
    borderWidth: 1,
    flexDirection: 'row',  
    alignItems: 'center',  
    backgroundColor: '#f0f0f0',  
    borderRadius: 10,  
    padding: 10,  
    marginBottom: 20,  
  },  
  searchIcon: {  
    width: 20,  
    height: 20,  
    marginRight: 10, 
    marginLeft: 10,
  },  
  input: {  
    flex: 1,  
    fontSize: 16,  
  },  
  historyTitle: {  
    fontSize: 19,  
    fontWeight: 'bold',  
    marginBottom: 10,  
  },  
  historyContainer: {  
    flexDirection: 'row',  
    marginBottom: 20,  
  },  
  historyItem: {  
    backgroundColor: '#FF8C00',  
    borderRadius: 10,  
    padding: 15,  
    marginRight: 10,  
    width: 100, // Adjust width as needed  
    height: 45,
    alignItems: 'center',  
  },  
  historyText: {  
    fontSize: 15,  
    textAlign: 'center', 
    color: 'white',  
  },  
});  

export default Search;