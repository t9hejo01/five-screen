import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeView = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const storedUsername = await AsyncStorage.getItem('username');
            const storedCount = await AsyncStorage.getItem('clickCount');
            setUsername(storedUsername || '');
            setClickCount(parseInt(storedCount) || 0);
        };
        loadData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome {username}</Text>
            <Text style={styles.countText}>Click Count: {clickCount}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Increment" onPress={() => navigation.navigate('ButtonIncrementView')} />
                <Button title="Decrement" onPress={() => navigation.navigate('ButtonDecrementView')} />
                <Button title="Summary" onPress={() => navigation.navigate('SummaryView')} /> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20
    },
    countText: {
        fontSize: 24,
        marginBottom: 30
    },
    buttonContainer: {
        width: '100%',
        gap: 10
    },    
});

export default WelcomeView;