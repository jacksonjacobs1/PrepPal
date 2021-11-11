import { signInAnonymously } from "@firebase/auth";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import {signUp, signIn} from '../firebaseApp'

export default function Login({ navigation }) {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function handleSignUp() {
        this.props.login_handler
        try {
            await signUp(email, password)
            //TODO add code to switch tabs
        } catch (error) {
            console.log(error.toString())
        }
    }

    async function handleSignIn() {
        try {
            await signIn(email, password)
            //TODO add code to switch tabs
        } catch (error) {
            console.log(error.toString())
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                mode='outlined'
                label='Email'
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                mode='outlined'
                label='Password'
                value={password}
                onChangeText={password => setPassword(password)}
            />
            <Button mode='contained' onPress={handleSignIn}>Sign In</Button>
            <Button mode='contained' onPress={handleSignUp}>Sign Up</Button>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        padding: 10,
        top: 100,
        justifyContent: 'flex-start',
    },
    button: {
        padding: 10,
        flex: 4,
        justifyContent: 'flex-start'
    }
});