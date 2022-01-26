import { StyleSheet, Text, View, Image} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Profile</Text>        
            <Image 
                source={require('./Images/Tesfa.jpg')}
                style={{width: 50, height: 50}} 
            />             
            
            <Text><Text style={styles.bold}>Experienced Team Player</Text> – Education and experience in comprehensive problem solving, creative troubleshooting, and complex project management. Accomplished with effective collaboration skills, team building capabilities and leadership in diverse and multifaceted operations. 
            I am known for my enthusiasm for complex projects, ability to turn constructive criticism into elegant solutions.</Text>

            <Text><Text style={styles.bold}>Core Competencies</Text> – Motivated and dynamic Web Developer with a keen focus and experience in web application development and web layout design, with a strong work ethic and innate ability to adapt in ever-changing and challenging environments.</Text>

            <Text><Text style={styles.bold}>UI Philosophies</Text> – I believe that simple, semantic structure can be easily optimized to work well in all browsers, on all devices, and will allow for excellent SEO. Through mutual respect with my coworkers, we can analyze and define clear job requirements. This results in well formed and well organized finished products.</Text>
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

