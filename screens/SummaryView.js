import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const SummaryView  = ({ navigation }) => {
    const  [username, setUsername] = useState('');
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            const storedUsername = await AsyncStorage.getItem('username');
            const storedCount  = await AsyncStorage.getItem('clickCount');
            setUsername(storedUsername || '');
            setClickCount(parseInt(storedCount) || 0);
        };
        loadData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Summary</Text>
            <Text style={styles.info}>Username: {username}</Text>
            <Text style={styles.info}>Total Clicks: {clickCount}</Text>

            <View style={styles.buttonContainer}>
                <Button title="Back to Welcome" onPress={() => navigation.navigate('WelcomeView')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title:  {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    info: {
        fontSize: 22,
        marginBottom: 10
    },
    buttonContainer: {marginTop: 30 },
});

export default SummaryView;