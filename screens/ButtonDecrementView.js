import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";


const ButtonDecrementView = ({ navigation }) => {
    const [clickCount, setClickCount] = useState(0);
    
    useEffect(() => {
        const loadCount = async () => {
            const storedCount = await AsyncStorage.getItem('clickCount');
            setClickCount(parseInt(storedCount) || 0);
        };
        loadCount();
    }, [])

    const decrement = async () => {
        const newCount = clickCount > 0 ? clickCount - 1 : 0;
        await AsyncStorage.setItem('clickCount', newCount.toString());
        setClickCount(newCount);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Decrement View</Text>
            <Text style={styles.count}>Current Count: {clickCount}</Text>
            <Button title="Decrement" onPress={decrement}></Button>
            <View style={styles.navButtons}>
                <Button title="Back to Welcome" onPress={() => navigation.navigate('WelcomeView')} />
            </View>
        </View>
    );
};

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
        marginbottom: 20
    },
    count: {
        fontSize: 24,
        marginbottom: 20
    },
    navButtons: {
        marginTop: 20
    }
});

export default ButtonDecrementView;