import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';

const matchOptions = ["Low", "Medium", "High", "Total"]
const dietaryRestrictionOptions = ["Yes", "No"]

function SearchTab() {
  const [selectedItem1, setMenuText1] = React.useState('')
  const [selectedItem2, setMenuText2] = React.useState('')
  return (
    <ScrollView>
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
      <SelectDropdown
        data={matchOptions}
        onSelect={(selectedItem1, index1) => setMenuText1(selectedItem1)}
      />
      <Text> Account for dietary restrictions?</Text>
      <SelectDropdown
        data={dietaryRestrictionOptions}
        onSelect={(selectedItem2, index2) => setMenuText2(selectedItem2)}
      />
      <Text> </Text>
      <Text>
        The above two dropdown menus currently read as follows: 
      </Text>
      <Text> </Text>
      <Text>
        {selectedItem1}
      </Text>
      <Text> </Text>
      <Text>
        {selectedItem2}
      </Text>
    </ScrollView>
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