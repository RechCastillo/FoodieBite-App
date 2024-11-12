import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Home = () => {   
  return (  
    <ImageBackground   
    source={require('../../assets/images/background(1).jpg')} // Replace with your background image path  
    style={styles.background}  
  >  

    <ScrollView style={styles.container}>  
      {/* Header */}  
      <View style={styles.header}>  
        <Image   
          source={require('../../assets/images/foodiebite_logo.png')} resizeMode="contain" style={styles.logo}  // FoodieBite logo 
          />  
        <Image  
          source={require('../../assets/icons/avatar.png')} style={styles.profilePic} // Profile picture   
        />  
      </View>  

       {/* Search Bar */}  
       <View style={styles.searchBar}>  
        <Image source={require('../../assets/icons/search.png')} style={styles.searchIcon} />  
        <TextInput 
          style={styles.input}  
          placeholder="Search for food"  
          placeholderTextColor="#888"  
        />  
      </View> 
      


      {/* Main Section */}  
      <View style={styles.mainSection}>  
        <Text style={styles.deliveryTitle}>The Fastest Food Delivery</Text> 
        <Image   
          source={require('../../assets/images/cheeseburger.png')}  // Burger image   
          style={styles.burgerImage} />  
        <TouchableOpacity style={styles.orderButton}>  
          <Text style={styles.orderButtonText}>Order Now</Text>  
        </TouchableOpacity>  
      </View>  

      {/* Categories Section */}  
      <Text style={styles.categoriesTitle}>Categories</Text>  
      <View style={styles.categoriesContainer}>  


        <View style={styles.category}>  
          <Image   
            source={require('../../assets/images/pizza.png')}  // Pizza image  
            style={styles.categoryImage} />  
          <Text>Ham Pizza</Text> 

          <View style={styles.priceContainer}>  
          <Text style={styles.price}>₱180</Text>  
          <TouchableOpacity style={styles.addButton}> 
          <Image   
            source={require('../../assets/icons/adds.png')}   // Plus icon  
            style={styles.addIcon} /> 
          </TouchableOpacity> 
        </View>  
        </View>


        <View style={styles.category}>  
          <Image   
            source={require('../../assets/images/burger.png')}   // Burger image   
            style={styles.categoryImage} />  
          <Text>Burger</Text>  

          <View style={styles.priceContainer}> 
          <Text style={styles.price}>₱150</Text> 
          <TouchableOpacity style={styles.addButton} > 
          <Image   
            source={require('../../assets/icons/adds.png')} // Plus icon  
            style={styles.addIcon} />  
          </TouchableOpacity> 
        </View>  
        </View>


        <View style={styles.category}>  
          <Image   
            source={require('../../assets/images/fries.png')} // Fries image  
            style={styles.categoryImage} />  
          <Text>French Fries</Text>  

          <View style={styles.priceContainer}> 
          <Text style={styles.price}>₱95</Text> 
          <TouchableOpacity style={styles.addButton}> 
          <Image   
            source={require('../../assets/icons/adds.png')} // Plus icon  
            style={styles.addIcon} />  
          </TouchableOpacity>
        </View>  
      </View>  
      </View>
       
      <View style={styles.categoriesContainer}> 

      <View style={styles.category}>  
          <Image   
            source={require('../../assets/images/fried_chicken.png')} // Chicken image  
            style={styles.categoryImage} />  
          <Text>8 Pc Fried Chicken Solo</Text>  

          <View style={styles.priceContainer}> 
          <Text style={styles.price}>₱549</Text> 
          <TouchableOpacity style={styles.addButton}> 
          <Image   
            source={require('../../assets/icons/adds.png')} // Plus icon  
            style={styles.addIcon} />  
          </TouchableOpacity>
        </View>  
      </View>  
      
      <View style={styles.category}>  
          <Image   
            source={require('../../assets/images/sundaes.png')} // sundaes image  
            style={styles.categoryImage} />  
          <Text>Ice Cream Sundaes</Text>  

          <View style={styles.priceContainer}> 
          <Text style={styles.price}>₱30</Text> 
          <TouchableOpacity style={styles.addButton}> 
          <Image   
            source={require('../../assets/icons/adds.png')} // Plus icon  
            style={styles.addIcon} />  
          </TouchableOpacity>
        </View>  
      </View> 

      <View style={styles.category}>  
          <Image   
            source={require('../../assets/images/ice_coffee.png')} // coffee image  
            style={styles.categoryImage} />  
          <Text>Latte Iced Coffee</Text>  

          <View style={styles.priceContainer}> 
          <Text style={styles.price}>₱39</Text> 
          <TouchableOpacity style={styles.addButton}> 
          <Image   
            source={require('../../assets/icons/adds.png')} // Plus icon  
            style={styles.addIcon} />  
          </TouchableOpacity>
        </View>  
      </View>  
      </View>


      <TouchableOpacity style={styles.viewAllButton}>  
        <Text style={styles.viewAllText}>View All</Text>  
      </TouchableOpacity> 


      {/* Popular Today Section */}  
      <Text style={styles.popularTitle}>Popular Today</Text>  
      <Image   
        source={require('../../assets/images/popular_pizza.jpg')} // Popular item image  
        style={styles.popularImage}  
      />  
    </ScrollView>  
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
  header: {  
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    alignItems: 'center',  
    
  },  
  logo: {  
    width: 180,  
    height: 40,  
  },  
  profilePic: {  
    width: 35,  
    height: 35,  
    borderRadius: 20,  
  },  

  searchBar: { 
    borderWidth: 1, 
    flexDirection: 'row',  
    alignItems: 'center',  
    backgroundColor: '#f0f0f0',  
    borderRadius: 15,  
    padding: 10,  
    marginVertical: 20,  

  },   
  searchIcon: {  
    width: 20,  
    height: 20,  
    marginRight: 10, 
    marginLeft: 10,
  },  

  mainSection: {  
    alignItems: 'center',  
    backgroundColor: '#FF8C00',  
    borderRadius: 19,  
    padding: 15,  
    width: 320,
    height: 180,
  },  
  deliveryTitle: {  
    fontSize: 28,  
    fontWeight: 'bold', 
    textAlign: 'center', 
    color: '#FFFFFF',  
    marginBottom: 15, 
    marginRight: 120, 
    top: 20,
  },  
  burgerImage: {  
    width: 135 ,  
    height: 135,  
    bottom: 60,
    marginLeft: 180, 
    
  },  
  orderButton: {  
    backgroundColor: '#FFFFFF', 
    paddingVertical: 13,
    paddingHorizontal: 15, 
    borderRadius: 14,  
    padding: 15, 
    marginRight: 140,
    bottom: 110,
    
  },  
  orderButtonText: {  
    fontSize: 16,  
    color: '#FF8C00',  
  },  
  categoriesTitle: {  
    fontSize: 20,  
    fontWeight: 'bold',  
    marginVertical: 20,  
  },  
  categoriesContainer: {  
    flexDirection: 'row',  
    justifyContent: 'space-between', 
    marginBottom: 15, 
  },  
  category: {  
    alignItems: 'center',  
    backgroundColor: '#FFFFFF',  
    borderRadius: 19,  
    padding: 10,  
    width: 100,  
  },  

  categoryImage: {  
    width: 60,  
    height: 60,  
    marginBottom: 5,  
  },  
  priceContainer: {  
    flexDirection: 'row', // Align price and plus icon horizontally  
    alignItems: 'center', // Center them vertically  
    marginTop: 20, // Space between the text and the price  
  },  

  price: {  
    color: '#FF8C00',  
    fontWeight: 'bold',  
    fontSize: 15,
    marginRight: 5,
    
  },  

  addIcon: {  
    width: 23,  
    height: 23,  
    marginLeft: 25,
     
  },  

  viewAllButton: {  
    alignItems: 'center',  
    marginVertical: 20,  
  },  
  viewAllText: {  
    color: '#FF8C00',  
    fontWeight: 'bold',  
    fontSize: 18,
    
  },  
  popularTitle: {  
    fontSize: 20,  
    fontWeight: 'bold',  
    marginVertical: 20,  
  },  
  popularImage: {  
    width: '100%',  
    height: 200,  
    borderRadius: 10,  
  },  
});  

export default Home; 