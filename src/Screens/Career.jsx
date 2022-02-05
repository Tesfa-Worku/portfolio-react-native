import { StyleSheet, Text, View } from 'react-native';

export default function Career() {
    return (
        <View style={styles.container}>
            <Text>Career Development</Text>        
            <Text>
                Bitwise Industries – Fresno, CA: 2021-Present
            </Text>
            <Text>
                React/React-Native Apprentice 
            </Text>

            <Text>
                Bitwise Industrie's Apprenticeship program is built to bridge the gap between learning and working in the tech industry. Participants in this paid program work on real projects under the supervision of a seasoned technical lead. Apart from the day-to-day workload, apprentices will have several opportunities to sharpen their skills and give back to the larger tech community by leading workshops, meetings, and co-teaching classes.                            
            </Text>

            <Text style={styles.wrp2}>
                <Text style={styles.wrp2}>React</Text>
                <Text style={styles.wrp2}>JavaScript</Text>
                <Text>css</Text>
                <Text>HTML</Text>
                <Text>Agile</Text>
            </Text>

            <Text>
                Hyatt Regency – Bellevue, WA: 2018-2020
            </Text>
            <Text>
                Maintenance Engineer 
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
        backgroundColor: '#fff',            
        justifyContent: 'center',
        marginTop: 100,            
    },
    wrp2: {
        flex: 0,
    }
});