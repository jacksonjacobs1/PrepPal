import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

function SearchTab() {
  return (
    <View style={styles.container}>
      <TextInput></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  }
})

export default SearchTab;