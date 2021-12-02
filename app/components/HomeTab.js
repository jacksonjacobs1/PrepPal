import React, { useEffect, useState } from 'react';
import { Button, DefaultTheme, List } from 'react-native-paper';
import { StyleSheet, Text, View, } from 'react-native';
import { sortByDate } from '../firebaseApp';
import { getAuth } from '@firebase/auth';

export default function HomeTab({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const name = user.email;
  const [data, setData] = useState([]);

  useEffect(() => {
    sortByDate(user).then(response => { setData(response) })
  }, []);

  if (!data.length) return (<Text>Loading...</Text>);

  return (
    <View style={styles.container}>
      <Text style={styles.text1} > Hello {name}, Welcome to PrepPal! </Text>
      <Text style={styles.listItem}>Recent Recipes:</Text>
      <List.AccordionGroup>
        {
          data.map(item => (
            <List.Accordion key={item.name} title={item.name} id={item.timestamp}>
              <List.Section title='INGREDIENTS'>
                {item.ingredients.map((ingredient) => (
                  <List.Item
                    key={ingredient}
                    title={ingredient}
                    left={props => <List.Icon {...props} icon="circle-small" style={styles.ingredient} />}
                    style={styles.ingredient}
                  />
                ))}
              </List.Section>
              <List.Section title='INSTRUCTIONS'>
                <List.Item title={item.instructions} style={styles.instructions} titleNumberOfLines={100} />
              </List.Section>
            </List.Accordion>
          ))
        }
      </List.AccordionGroup>
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
    backgroundColor: 'white',
    fontWeight: 'bold'
  },
  listItem: {
    marginTop: 5,
    padding: 20,
    backgroundColor: '#f6f6f6',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 65,
    justifyContent: 'flex-start',
  },
  ingredient: {
    padding: 0,
    margin: 0
  },
  instructions: {
    wordBreak: 'break-word',
    flexShrink: 1
  }
});