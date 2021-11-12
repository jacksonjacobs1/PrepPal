import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const matchOptions = ["Low", "Medium", "High", "Total"]
const dietaryRestrictionOptions = ["Yes", "No"]

function SearchTab() {
  return (
    <View testID='searchTab'>
      <Text>This is the page that will allow the user to search for new recipes online. </Text>
      <Text> </Text>
      <Text>Enter available ingredients:</Text>
      <SafeAreaView>
        <TextInput style={styles.ingredientEntryBarStyle}/>
        <TextInput style={styles.ingredientEntryBarStyle}/>
        <TextInput style={styles.ingredientEntryBarStyle}/>
      </SafeAreaView>
      <Text> </Text>
      <Text> Search Options:</Text>
      <Text> </Text>
      <Text> Match existing ingredients</Text>
      <SelectDropdown data={matchOptions}></SelectDropdown>
      <Text> Account for dietary restrictions?</Text>
      <SelectDropdown data={dietaryRestrictionOptions}></SelectDropdown>
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
  }
})

export default SearchTab;