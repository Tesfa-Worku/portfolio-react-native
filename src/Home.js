import { StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';

export default function Home() {
    const { width, height} = useWindowDimensions();
    return (
        <View style={ width < 500 ? styles.containerSmallScreen : styles.container}>                    
            <Image 
                source={require('./Images/Tesfa.jpg')}
                style={width < 500 ? styles.imageSizeSmallScreen : styles.imageSize} 
            >
            </Image>
            <View style={styles.textContainer}>    
                <Text style={styles.textStyle}>
                    <Text style={styles.bold}>Experienced Team Player</Text> - Education and experience in comprehensive problem solving, creative troubleshooting, and complex project management. Accomplished with effective collaboration skills, team building capabilities and leadership in diverse and multifaceted operations. I am known for my enthusiasm for complex projects, ability to turn constructive criticism into elegant solutions.
                </Text>                
                <Text style={styles.textStyle}>
                    <Text style={styles.bold}>Core Competencies</Text> - Motivated and dynamic Web Developer with a keen focus and experience in web application development and web layout design, with a strong work ethic and innate ability to adapt in ever-changing and challenging environments.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',                    
        justifyContent: 'space-between',                        
    },
    textContainer: {
        flex: 1,
    },
    textStyle: {
        fontSize: 20,
        margin: 10,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    imageSize: {
        flex: 1,
        width: "20%",
        height: "100%",
        aspectRatio: 2/3
    },
    containerSmallScreen: {
        flex: 1,                    
        justifyContent: 'space-between',
    },
    imageSizeSmallScreen: {
        flex: 1
    }
});

