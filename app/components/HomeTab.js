import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeTab({navigation}){
    const name = "Richard";
    return (
        <View style={styles.container}>
            <Text style={styles.title1}>Hello {name}, Welcome to PrepPal! </Text>
            <Text style={styles.title2}>Recent Recipes:</Text>
            <Button style={styles.submitButton}
            title="See All Saved Recipes"
            color ="#E5101C"
            onPress={() => navigation.navigate('SavedRecipes')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title1: {
        marginTop: 0,
        paddingVertical: 6,
        borderWidth: 3,
        borderColor: "#20232a",
        color: "black",
        backgroundColor: "yellow",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 6,
        textAlign: "center"
    },
    title2:{
        marginTop: 6,
        paddingVertical: 6,
        borderWidth: 3,
        borderColor: "#20232a",
        color: "red",
        backgroundColor: "purple",
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 6,
        textAlign: "center"
    },
    container: {
      flex: 1,
      backgroundColor: '0CC3F9',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    submitButton: {
        position: 'absolute',
        bottom:0,
        left:0,
    },
});