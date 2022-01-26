import { StyleSheet, View } from 'react-native';
import Home from "./src/Home";
import Career from './src/Career';
import Portfolio from './src/Portfolio';
import Education from './src/Education';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Career />
      <Portfolio />
      <Education />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
