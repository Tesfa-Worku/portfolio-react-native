import { SafeAreaView, StyleSheet, ScrollView} from 'react-native';
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
      <ScrollView style={styles.pages}>
        {page === "Home" && <Home />}
        {page === "Career" && <Career />}
        {page === "Portfolio" && <Portfolio/>}
        {page === "Education" && <Education/>}
      </ScrollView>
      <Footer /> 
    </SafeAreaView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pages: {
    flex: 1,
    overflow: "hidden",
  }
});