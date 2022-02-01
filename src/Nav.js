
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,  
} from "react-native";

export default function Nav({ setPage }) {  
  return (
    <View style={styles.container}>
      <View style={{color: 'white'}}>
        <Pressable onPress={() => setPage("Home")}>
          <View>
            <View style={{color: 'white'}}>
              <Text style={{color: 'white'}}>Tesfa Worku</Text>
              <Text style={{color: 'white'}}>I Build things for the Web</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View >
        <View style={styles.cont2}>
          <Pressable onPress={() => setPage("Home")}>
            <Text style={{color: 'white'}} name="Home">
              Home
            </Text>
          </Pressable>
          <Pressable onPress={() => setPage("Portfolio")}>
            <Text style={{color: 'white'}} name="Portfolio">
              Portfolio
            </Text>
          </Pressable>
          <Pressable onPress={() => setPage("Career")}>
            <Text style={{color: 'white'}} name="Career">
              Career
            </Text>
          </Pressable>
          <Pressable onPress={() => setPage("Education")}>
            <Text style={{color: 'white'}} name="Education">
              Education
            </Text>
          </Pressable>          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0,
    padding: 80,
    width: '100%',
    backgroundColor: '#000',    
    flexDirection: 'column',
    // alignItems: 'flex-start',
    // justifyContent: 'stretch',
    marginTop: 10,        
  },
  cont2: {
    flex: 1,
    width: '100%',
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent:'space-between',
    marginTop: 20,
    marginLeft: 20,
    
  }
});