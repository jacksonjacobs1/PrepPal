import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Chip, TextInput } from 'react-native-paper';

function SearchTab() {

  const [ingredients, setIngredients] = useState([]);

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Search for Recipes</Text>
      <TextInput
        label="Enter an ingredient"
        value={ingredients}
        onChangeText={text => setIngredients(ingredients.concat(text))}
      />
      <Surface style={styles.box}>
        {ingredients.map(ingredient => (
          <Chip onClose={() => {
            var index = ingredients.indexOf(ingredient);
            if (index > -1) {
              ingredients.splice(index, 1);
            }
            setIngredients(ingredients);
          }}
          >
            {ingredient}
          </Chip>
        ))}
      </Surface>

    </View>
  )
}

const styles = StyleSheet.create({
  ingredientEntryBarStyle: {
    height: 20,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    alignItems: "center"
  },
  box: {
    flexDirection: "row",
    padding: 8,
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    elevation: 0,
    color: '#fafafa'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default SearchTab;