import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

function SearchTab() {
  return (
    <View style={styles.container}>
      <Text>This is the Search Tab</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})

export default SearchTab;