import React, { useState } from 'react';
import { getAuth } from '@firebase/auth';
import { Button, DefaultTheme} from 'react-native-paper';
import { StyleSheet, Text, View, List } from 'react-native';

export default function HomeTab({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;

  const name = user.email
  const [recipe, setFood] = useState([
      {recipe: 'Recipe 1', key: '1'},
      {recipe: 'Recipe 2', key: '2'},
      {recipe: 'Recipe 3', key: '3'},
      {recipe: 'Recipe 4', key: '4'},
      {recipe: 'Recipe 5', key: '5'}
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
    <Button mode="contained" theme={DefaultTheme} testID="WORK" style={styles.button} onPress={() => navigation.navigate('Saved Recipes')}>
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
    flex: 1
  },
  text1: {
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 30,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor:'white',
    fontWeight:'bold'
  },
  listItem:{
    marginTop:5,
    padding:20,
    backgroundColor: '#f6f6f6',
    fontSize: 20,
    textAlign: 'center',
  },
  button:{
    marginTop:65,
    justifyContent:'flex-start',
  }
});