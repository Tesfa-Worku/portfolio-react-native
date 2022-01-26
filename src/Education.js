import { StyleSheet, View, Text } from 'react-native';

export default function Education() {
    return (
        <View style={styles.container}>
            <Text>Education</Text>
            <View>
                <Text><Text style={styles.bold}>Workforce training at Bitwise Industries - Certificate</Text>July, 2021 - August, 2021 Study JavaScript and React.
                </Text>
                <Text><Text style={styles.bold}>Evangadi Academy - Certificate</Text>February, 2021 - June, 2021 Full-Stack web development
                </Text>
                <Text><Text style={styles.bold}>Arba-Minch University - Bsc</Text> October, 2008 - July, 2011 B.Sc in Mechanical Engineering
                </Text>                       
            </View>
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
    bold: {
        fontWeight: 'bold',
    }
});