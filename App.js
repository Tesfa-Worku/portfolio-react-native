import { SafeAreaView, StyleSheet, View} from 'react-native';
import Home from "./src/Home";
import Career from './src/Career';
import Portfolio from './src/Portfolio';
import Education from './src/Education';
import Footer from "./src/Footer";
import Nav from "./src/Nav";
import { useState } from "react";

export default function App() {

  const [page,setPage] = useState("Home");

  return (
    <SafeAreaView style={styles.container}>
      <Nav setPage={setPage}/>
      <View style={styles.pages}>
        {page === "Home" && <Home />}
        {page === "Career" && <Career />}
        {page === "Portfolio" && <Portfolio/>}
        {page === "Education" && <Education/>}
      </View>
      <Footer /> 
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pages: {
    flex: 1
  }
});