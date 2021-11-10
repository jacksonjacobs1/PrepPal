import React, { useState } from 'react';
import { Button, DefaultTheme} from 'react-native-paper';
import { StyleSheet, Text, View, List } from 'react-native';

export default function HomeTab() {
      const name = "Richard"
      const [recipe, setFood] = useState([
          {recipe: 'penne a la vodka', key: '1'},
          {recipe: 'food', key: '2'},
          {recipe: 'edible substance', key: '3'},
        ]);
      return (
        <View style={styles.container}>
        <Text style={styles.text1} > Hello {name}, Welcome to PrepPal! </Text>
        <Text style={styles.listItem}>Recent Recipes:</Text>
        { recipe.map((item) => {
          return(
            <View key = {item.key}>
            <Text style={styles.listItem}>{item.recipe}</Text>
            </View>
          )
        })}
        <Button mode="contained" theme={DefaultTheme} style={styles.button} onPress={() => console.log('Pressed')}>
          See All Saved Recipes
        </Button>
        </View>
      );
    }


const theme = {
    ...DefaultTheme,
    roundness: 3,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      flex: 1,
      backgroundColor: "f6f6f6"
      },
    text1: {
      color: '6200ee',
      fontWeight: 'bold',
      fontSize: 30,
      borderWidth: 1,
      textAlign: "center",
      backgroundColor:"white",
      fontWeight:"bold"
      },
    listItem:{
      marginTop:5,
      padding:20,
      backgroundColor: "#f6f6f6",
      fontSize: 20,
      text: "black",
      textAlign: "center",
      },
    button:{
      marginTop:260,
      justifyContent:"flex-start",
      }
      });