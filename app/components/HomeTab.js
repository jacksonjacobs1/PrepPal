import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeTab({navigation}){
    const name = "Richard";
    const recipe1 = "chicken flambae";
    const recipe2 = "eggs benedict";
    const recipe3 = "chocolate chip cookies";
    return (
        <View style={styles.container} testID='homeTab'>
            <Text style={styles.title1}>Hello {name}, Welcome to PrepPal! </Text>
            <Text style={styles.title2}>Recent Recipes:{"\n"}{recipe1}{"\n"}{recipe2}{"\n"}{recipe3} </Text>
            <Button style={styles.submitButton}
            title="See All Saved Recipes"
            color ="#E5101C"
            onPress={() => navigation.navigate('Saved Recipes')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title1: {
        marginTop: 0,
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: "#20232a",
        color: "black",
        backgroundColor: "yellow",
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 6,
        textAlign: "center"
    },
    title2:{
        marginTop: 0,
        paddingVertical: 6,
        borderWidth: 3,
        borderColor: "#20232a",
        color: "red",
        backgroundColor: "blue",
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 6,
        textAlign: "center"
    },
    container: {
      flex: 1,
      backgroundColor: '#0CC3F9',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
});
