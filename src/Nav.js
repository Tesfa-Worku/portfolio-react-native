import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,  
} from "react-native";

export default function Nav({ setPage }) {  
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={() => setPage("Home")}>
          <View>
            <View>
              <Text style={{color: 'white'}}>Tesfa Worku</Text>
              <Text style={{color: 'white'}}>I Build things for the Web</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={styles.cont2}>
        <Pressable onPress={() => setPage("Home")}>
          <Text style={{color: '#F2D379'}} name="Home">
            Home
          </Text>
        </Pressable>
        <Pressable onPress={() => setPage("Portfolio")}>
          <Text style={{color: '#F2D379'}} name="Portfolio">
            Portfolio
          </Text>
        </Pressable>
        <Pressable onPress={() => setPage("Career")}>
          <Text style={{color: '#F2D379'}} name="Career">
            Career
          </Text>
        </Pressable>
        <Pressable onPress={() => setPage("Education")}>
          <Text style={{color: '#F2D379'}} name="Education">
            Education
          </Text>
        </Pressable> 
      </View>      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    width: '100%',
    maxHeight: "8%",
    backgroundColor: '#000',    
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,        
  },
  cont2: {
    flex: 1,
    width: '100%',    
    maxHeight: "4%",
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-evenly',   
  }
});