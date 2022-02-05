
import "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
// import Drawernavigation from './src/navigation/DrawerNavigation';
import Drawer from "./src/Navigation/Drawer";

export default function App() {

  // const [page,setPage] = useState("Home");

  return (
    <NavigationContainer>
      {/* <Drawernavigation> */}
        <Drawer />
      {/* </Drawernavigation> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',    
//     margin: 10,
//   },
// });