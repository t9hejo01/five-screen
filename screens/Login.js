
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { TextInput, Text, View, Button, StyleSheet } from "react-native";



const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            if (username.trim() && password.trim()) {
                await AsyncStorage.setItem('username', username);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'WelcomeView' }],
                });
            }
        } catch (e) {
            console.error('Failed to save username.', e);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                testID="text-input"                
            />           
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
                testID="password-input"
            />
           
            <Button title="Login" testID="button" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 12
    }
});

export default Login;