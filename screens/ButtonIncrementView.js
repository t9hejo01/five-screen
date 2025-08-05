import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"; 

const ButtonIncrementView = ({ navigation }) => {
    const [clickCount, setClickCount] = useState(0)

    useEffect(() => {
        const loadCount = async () => {
            const storedCount = await AsyncStorage.getItem('clickCount');
            setClickCount(parseInt(storedCount) || 0);
        };
        loadCount();
    }, []);

    const increment = async () => {
        const newCount = clickCount + 1;
        await AsyncStorage.setItem('clickCount', newCount.toString());
        setClickCount(newCount); 
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Click Count: {clickCount}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Back to Welcome" onPress={() => navigation.navigate('WelcomeView')} /> 
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
    title: {
        fontSize: 28,
        fontWeight: 'bold', 
        marginBottom: 20
    },
    count: {
        fontSize: 24,
        marginBottom: 20
    },
    navButtons: {
        marginTop: 20
    },
});

export default ButtonIncrementView;