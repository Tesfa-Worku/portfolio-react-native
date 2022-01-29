import { StyleSheet, View } from 'react-native';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Stack from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Drawer() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
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