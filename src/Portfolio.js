import { StyleSheet, View, Text, Linking } from 'react-native';

export default function Portfolio() {
    return (
        <View style={styles.container}>
            <Text>
                Portfolio
            </Text>
            <View style={styles.wrp}>
                <Text>                    
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('https://luceroweb.github.io/haunted-house-game/#/')}>
                            Haunted House Game
                    </Text>
                </Text>
                <Text>                    
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('https://expo.dev/@tesfa-worku/team-marvel-project')}>
                            Marvel Space
                    </Text>
                </Text>
                <Text>                    
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('https://tesfa-worku.github.io/Decidr/')}>
                            Decidr
                    </Text>
                </Text>
                <Text>                    
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('https://tesfa-worku.github.io/ecard/')}>
                            e card
                    </Text>
                </Text>
                <Text>                    
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('https://github.com/Tesfa-Worku/todo-list-app')}>
                            To do app
                    </Text>
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
    wrp: {
        flex: 0,        
    }
});