import React from "react";
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {  
  const handleLogout = () => {  
    Alert.alert(  
      "Are you sure?",  
      "Please confirm if you want to logout.",  
      [  
        {  
          text: "Cancel",  
          style: "cancel"  
        },  
        {  
          text: "Log out",  
          onPress: () => {  
            // Add your logout logic here  
            console.log("User logged out");  
          }  
        }  
      ],  
      { cancelable: false }  
    );  
  };  
  return (  
    <ImageBackground   
    source={require('../../assets/images/background(1).jpg')} // Replace with your background image path  
    style={styles.background}  
  >    

    <ScrollView style={styles.container}>  
      <View style={styles.profileSection}>  
        <Image source={require('../../assets/icons/avatar.png')} style={styles.profilePicture} />  
        <TouchableOpacity style={styles.editIconContainer}>  
          <Image source={require('../../assets/icons/edit_profile.png')} style={styles.editIcon} />  
        </TouchableOpacity>   
        <Text style={styles.profileName}>Rechiel Castillo</Text>  
        <Text style={styles.profileemail}>rechielcastillo22@gmail.com</Text>  
      </View>  

      <View style={styles.accountSection}>  
        <Text style={styles.sectionTitle}>Account</Text>  
        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/notification.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Notifications</Text>  
          <View style={styles.notificationDot} />  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/lock.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Update Password</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/shipping_truck.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Shipping</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/payment.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Payment Method</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} /> 
        </TouchableOpacity>  
      </View>  

      <View style={styles.geographySection}>  
        <Text style={styles.sectionTitle}>Geography</Text>  
        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/location.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Locations</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/font.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Change Language</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  
      </View>  

      <View style={styles.membershipSection}>  
        <Text style={styles.sectionTitle}>Membership</Text>  
        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/member_card.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Loyalty Cards</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  

        <TouchableOpacity style={styles.item}>  
          <Image source={require('../../assets/icons/membership.png')} style={styles.icon} />  
          <Text style={styles.itemText}>Membership</Text>  
          <Image source={require('../../assets/icons/chevron.png')} style={styles.arrowIcon} />  
        </TouchableOpacity>  
      </View>  

       {/* Log Out Button */}  
       <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>  
          <Text style={styles.logoutText}>Log Out</Text>  
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
    flex: 1,  
    padding: 25,  
    
  },  
  profileSection: {  
    alignItems: 'center',  
    marginBottom: 20,  
  },  
  profilePicture: {  
    width: 100,  
    height: 100,  
    borderRadius: 50,  
  },  
  editIconContainer: {  
    position: 'absolute',  
    bottom: 55,  
    right: 111,  
  },  
  editIcon: {  
    width: 20,  
    height: 20,  
  },  
  profileName: {  
    fontSize: 20,  
    fontWeight: 'bold',  
    marginTop: 10,  
  },  
  profileemail: {  
    fontSize: 16,  
    color: '#888',  
  },  
  sectionTitle: {  
    fontSize: 18,  
    fontWeight: 'bold',  
    marginVertical: 10,  
  },  
  accountSection: {  
    marginBottom: 20,  
  },  
  geographySection: {  
    marginBottom: 20,  
  },  
  membershipSection: {  
    marginBottom: 20,  
  },  
  item: {  
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'space-between',  
    paddingVertical: 10,  
  },  
  itemText: {  
    fontSize: 16,  
    flex: 1,  
  },  
  icon: {  
    width: 24,  
    height: 24,  
    marginRight: 10,  
  },  
  arrowIcon: {  
    width: 16,  
    height: 16,  
  },  
  notificationDot: {  
    width: 8,  
    height: 8,  
    borderRadius: 4,  
    backgroundColor: 'orange',  
    position: 'absolute',  
    right: 40,  
  },  
  logoutButton: {  
    backgroundColor: '#FF8C00',  
    padding: 15,  
    borderRadius: 15,  
    alignItems: 'center',  
    marginBottom: 35,
  },  
  logoutText: {  
    color: '#fff',  
    fontSize: 18,  
    fontWeight: 'bold',  
  },  
});  

export default Profile;