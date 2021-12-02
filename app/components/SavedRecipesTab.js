import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, FlatList, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { List } from 'react-native-paper';
import { getUserRecipes } from '../firebaseApp';
import { getAuth } from '@firebase/auth';

function SavedRecipesTab({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    getUserRecipes(user).then(response => { setData(response) })
  }, []);

  if (!data.length) return (<Text>Loading...</Text>);

  console.log(data.ingredients)

  return (
    <ScrollView>
      <SearchBar
        placeholder="Search recipes"
        onChangeText={searchText => setSearchText(searchText)}
        value={searchText}
      />
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
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  // savedRecipesTitle: {
  //   marginTop: 0,
  //   paddingVertical: 6,
  //   borderWidth: 3,
  //   borderColor: "#20232a",
  //   color: "black",
  //   backgroundColor: "green",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   borderRadius: 6,
  //   textAlign: "center"
  // },
  ingredient: {
    padding: 0,
    margin: 0
  },
  instructions: {
    wordBreak: 'break-word',
    flexShrink: 1
  }
});

export default SavedRecipesTab;