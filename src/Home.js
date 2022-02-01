import { StyleSheet, Text, View, Image} from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.bold}>Profile</Text>
            
                <Image 
                    source={require('./Images/Tesfa.jpg')}
                    style={{width: 300, height: 400}} 
                />
            </View>            
                
            <Text style={{marginLeft: 10}}><Text style={styles.bold}>Experienced Team Player</Text> – Education and experience in comprehensive problem solving, creative troubleshooting, and complex project management. Accomplished with effective collaboration skills, team building capabilities and leadership in diverse and multifaceted operations. 
            I am known for my enthusiasm for complex projects, ability to turn constructive criticism into elegant solutions.
            </Text>
            
            <Text style={{marginLeft: 10}}><Text style={styles.bold}>Core Competencies</Text> – Motivated and dynamic Web Developer with a keen focus and experience in web application development and web layout design, with a strong work ethic and innate ability to adapt in ever-changing and challenging environments.
            </Text>

        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'row', 
            backgroundColor: '#fff',            
            justifyContent: 'space-between',
            marginTop: 100,            
        },
        bold: {
            fontWeight: 'bold',
        }
    });

