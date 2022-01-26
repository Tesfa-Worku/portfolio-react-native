import { StyleSheet, View, Text, Linking } from 'react-native';

export default function Portfolio() {
    return (
        <View style={styles.container}>
            <Text>
                Portfolio
            </Text>
            <Text>
                <Text>
                    {/* <a className="nav-link" href="https://luceroweb.github.io/haunted-house-game/#/" target="_blank" rel="noreferrer">Haunted House Game</a> */}
                    <Text style={{color: 'blue'}}
                            onPress={() => Linking.openURL('https://luceroweb.github.io/haunted-house-game/#/')}>
                            Haunted House Game
                    </Text>
                </Text>
                {/* <li className="nav-item border-light border-bottom">
                    <a className="nav-link" href="https://tesfa-worku.github.io/Decidr/" target="_blank" rel="noreferrer">Decider</a>
                </li>
                <li className="nav-item border-light border-bottom">
                    <a className="nav-link" href="https://tesfa-worku.github.io/ecard/" target="_blank" rel="noreferrer">ecard</a>
                </li>
                <li className="nav-item border-light border-bottom">
                    <a className="nav-link" href="https://expo.dev/@tesfa-worku/team-marvel-project" target="_blank" rel="noreferrer">Marvel Space</a>
                </li>
                <li className="nav-item border-light border-bottom">
                    <a className="nav-link" aria-current="page" href="https://github.com/Tesfa-Worku/todo-list-app" rel="noreferrer" target="_blank">To do App</a>
                </li> */}
            </Text>
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