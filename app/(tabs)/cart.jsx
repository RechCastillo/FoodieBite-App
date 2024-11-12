import React from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const Cart = () => {  
  const handleCheckout = () => {  
    Alert.alert('Success', 'Your order has been placed successfully!');  
  };  
  return (
    <ImageBackground   
    source={require('../../assets/images/background(1).jpg')} // Replace with your background image path  
    style={styles.background}  
  >    

    <ScrollView style={styles.container}>  
      <Text style={styles.header}>Carts</Text>  
      
      
      <View style={styles.item}>  
        <Image source={require('../../assets/images/burger.png')} style={styles.image} />  
        <View style={styles.itemDetails}>  
          <Text style={styles.Text}>Burger</Text>  
          <Text style={styles.price}>₱95</Text> 
          
          <View style={styles.quantityControl}>  
            <TouchableOpacity style={styles.circle}>  
              <Image source={require('../../assets/icons/minus (2).png')} style={styles.icon} />  
            </TouchableOpacity>  
            <Text>2</Text>  
            <TouchableOpacity style={styles.circle}>  
              <Image source={require('../../assets/icons/add.png')} style={styles.icon} />  
            </TouchableOpacity>  
          </View>  
        </View>  

        <TouchableOpacity style={styles.removeButton}>  
          <Image source={require('../../assets/icons/cancel.png')} style={styles.icon} />  
        </TouchableOpacity>  
      </View>  
      


      <View style={styles.item}>  
        <Image source={require('../../assets/images/fried_chicken.png')} style={styles.image} />  
        <View style={styles.itemDetails}>  
          <Text style={styles.Text}>Fried Chicken</Text>  
          <Text style={styles.price}>₱180</Text> 

          <View style={styles.quantityControl}>  
            <TouchableOpacity style={styles.circle}>  
              <Image source={require('../../assets/icons/minus (2).png')} style={styles.icon} />  
            </TouchableOpacity>  
            <Text>1</Text>  
            <TouchableOpacity style={styles.circle}>  
              <Image source={require('../../assets/icons/add.png')} style={styles.icon} />  
            </TouchableOpacity>  
          </View>  

        </View>  
        <TouchableOpacity style={styles.removeButton}>  
          <Image source={require('../../assets/icons/cancel.png')} style={styles.icon} />  
        </TouchableOpacity>  
      </View>  


      <View style={styles.item}>  
        <Image source={require('../../assets/images/tea.png')} style={styles.image} />  
        <View style={styles.itemDetails}>  
          <Text style={styles.Text}>Bubble Milk Tea</Text>  
          <Text style={styles.price}>₱250</Text>  

          <View style={styles.quantityControl}>  
            <TouchableOpacity style={styles.circle}>  
              <Image source={require('../../assets/icons/minus (2).png')} style={styles.icon} />  
            </TouchableOpacity>  
            <Text>2</Text>  
            <TouchableOpacity style={styles.circle}>  
              <Image source={require('../../assets/icons/add.png')} style={styles.icon} />  
            </TouchableOpacity>  
          </View
          >  
        </View> 
        <TouchableOpacity style={styles.removeButton}>  
          <Image source={require('../../assets/icons/cancel.png')} style={styles.icon} />  
        </TouchableOpacity>  
      </View>  

      <Text style={styles.orderinstructions}>Order Instructions</Text>  
      <TextInput style={styles.instructionsInput} placeholder="Add instructions here..." />  


     {/* Subtotal, Shipping, and Total Amount */}  
      <View style={styles.summary}>  
        <Text style={styles.subtotal}>Subtotal</Text>  
        <Text style={styles.subtotal}>₱525</Text>  
      </View>  
      <View style={styles.summary}>  
        <Text style={styles.subtotal}>Shipping</Text>  
        <Text style={styles.subtotal}>₱40</Text>  
      </View>  
      <View style={styles.summary}>  
        <Text style={styles.subtotal}>Total amount</Text>  
        <Text style={styles.subtotal}>₱565</Text>  
      </View>   


      

      {/* Checkout Button */}  
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>  
        <Text style={styles.checkoutText}>CHECKOUT</Text>  
      </TouchableOpacity>  


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
    padding: 20,    
    flex: 1,  
  },  
  header: {  
    fontSize: 20,  
    fontWeight: 'bold',  
    marginBottom: 20,  
  },  
  Text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  item: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    marginBottom: 28,  
  },  
  image: {  
    width: 70,  
    height: 70,  
    marginRight: 20,  
  },  
  itemDetails: {  
    flex: 1, 
      
  },  

  price: {  
    fontWeight: 'bold', 
    marginTop: 10, 
   

  },  
  quantityControl: {  
    flexDirection: 'row',  
    alignItems: 'center',  
  },  
  circle: {  
    borderRadius: 15,  
    borderColor: '#ccc',  
    padding: 5,  
    marginHorizontal: 5,
  },  
  removeButton: {  
    marginLeft: 10,
    marginBottom: 35,  
  },  
  icon: {  
    width: 20,  
    height: 20,
      
  },  
  orderinstructions: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  instructionsInput: {  
    borderWidth: 1,  
    borderColor: '#ccc',  
    padding: 10,  
    marginVertical: 10,  
    borderRadius: 10,
  },  
  total: {  
    color: 'black',
    fontSize: 18,  
    fontWeight: 'bold',  
    marginVertical: 10,  
  },  
  address: {
    color: 'black',
    fontSize: 18,  
    fontWeight: 'bold',  
    marginVertical: 5,  
  },
  checkoutButton: {  
    backgroundColor: '#FF8C00',  
    padding: 14,  
    alignItems: 'center',  
    borderRadius: 15,  
  },  
  summary: {  
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    marginVertical: 4,
  }, 
  subtotal: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  checkoutButton: {  
    backgroundColor: '#FF8C00',  
    padding: 16,  
    alignItems: 'center',  
    borderRadius: 8,  
    marginTop: 16,  
  },  
  checkoutText: {  
    color: 'white',  
    fontWeight: 'bold', 
  },
  

});  

export default Cart;