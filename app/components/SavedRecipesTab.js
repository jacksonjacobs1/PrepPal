import React from 'react';
import {StyleSheet, ScrollView, Text } from 'react-native';
import {SearchBar} from 'react-native-elements';

function SavedRecipesTab(props) {
    const [searchText, setSearchText] = React.useState('')
    return (
        <ScrollView>
            <SearchBar
                placeholder="Search recipes"
                onChangeText={searchText => setSearchText(searchText)}
                value={searchText}
            />
            <Text style={styles.savedRecipesTitle}> Your saved recipes: </Text>
            <Text>
                {'\u2B24'} Recipe 1
            </Text>
            <Text>
                {'\u2B24'} Recipe 2
            </Text>
            <Text>
                {'\u2B24'} Recipe 3
            </Text>
            <Text>
                {'\u2B24'} Recipe 4
            </Text>
            <Text>
                {'\u2B24'} Recipe 5
            </Text>
            <Text> </Text>
            <Text>
                The text currently in the search bar is displayed below:
            </Text>
            <Text> </Text>
            <Text>
                {searchText}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    savedRecipesTitle: {
        marginTop: 0,
        paddingVertical: 6,
        borderWidth: 3,
        borderColor: "#20232a",
        color: "black",
        backgroundColor: "green",
        fontSize: 20,
        fontWeight: "bold",
        borderRadius: 6,
        textAlign: "center"
    },
});

export default SavedRecipesTab;