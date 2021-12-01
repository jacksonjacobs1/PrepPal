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
    }, [])

    if (!data.length) return (<Text>Loading...</Text>);

    return (
        <View>
            <SearchBar
                placeholder="Search recipes"
                onChangeText={searchText => setSearchText(searchText)}
                value={searchText}
            />
            <ScrollView>
            <List.AccordionGroup>
                {
                    data.map(item => (
                        <List.Accordion key={item.uid} title={item.name} id={item.uid}>
                            <View>
                                <List.Item title='Ingredients' description={item.ingredients}  />
                                <List.Item title='Instructions' description={item.instructions} />
                            </View>
                        </List.Accordion>
                    ))
                }
            </List.AccordionGroup>
        </ScrollView>
        </View>
        

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