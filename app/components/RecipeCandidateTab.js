import React from "react";
import { ScrollView, Text, Button } from 'react-native';

function RecipeCandidateTab() {
  const [instructions, setInstructions] = React.useState('');
  const [ingredients, setIngredients] = React.useState('');
  return (
    <ScrollView>
      <Text>
        A recipe we found is displayed below. Do you wish to save this recipe,
        or keep searching?
      </Text>
      <Text> </Text>
      <Text> Recipe Ingredients: </Text>
      <Text> </Text>
      <Text> {ingredients} </Text>
      <Text> </Text>
      <Text> Recipe Instructions: </Text>
      <Text> </Text>
      <Text> {instructions} </Text>
      <Button
        title="Save recipe."
        color ='#2f4f4f'
      />
      <Button
        title="Keep searching."
        color ='#2f4f4f'
      />
    </ScrollView>
  )
};

export default RecipeCandidateTab;