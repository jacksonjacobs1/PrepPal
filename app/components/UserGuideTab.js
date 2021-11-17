import React from "react";
import { ScrollView, Text } from 'react-native';

function UserGuideTab() {
  return (
    <ScrollView>
      <Text>PrepPal User Guide</Text>
      <Text> </Text>
      <Text>
        Welcome to PrepPal! If you're looking for the perfect recipe for the ingredients you already have, then this app may be just what you need! To search for a new recipe,
        click the "Find New Recipe" button on the taskbar to let the program know what ingredients you have on hand. We will then look for recipes online and give you the option to
        save them. You can also click "Saved Recipes" on the taskbar to look at the recipes you already have stored.
      </Text>
      <Text> </Text>
      <Text>
        (Note: not all of the above functionality exists or works as promised yet, because this is just a demo.)
      </Text>
      <Text> </Text>
      <Text>
        Credits:
      </Text>
      <Text> </Text>
      <Text>
        Jackson Jacobs
      </Text>
      <Text>
        Harrison Rhodes
      </Text>
      <Text>
        Desmond Weisenberg
      </Text>
      <Text>
        Audrey Zhu
      </Text>
    </ScrollView>
  )
};

export default UserGuideTab;