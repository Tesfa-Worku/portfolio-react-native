import { StyleSheet, View, Text } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Adelphi, MD</Text>            
            <Text style={styles.textColor}>(240) 705-4466</Text>
            <Text style={styles.textColor}>hopegorg@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        maxHeight: "10%",
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#000',    
        flexDirection: 'row',
    },
    textColor: {
        color: "#F2D379"
    }
});