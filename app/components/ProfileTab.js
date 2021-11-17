import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Headline, IconButton, Portal, Provider, Subheading, TextInput, Title } from 'react-native-paper';

export default function ProfileTab({ navigation }) {
  // replace default states with firebase data later
  const [username, setUsername] = React.useState('Richard');
  const [userEmail, setUserEmail] = React.useState('richardzhu@example.edu');
  const [userRestr, setUserRestr] = React.useState([]);
  
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>        
      <View style={styles.line}>
        <Headline style={styles.title}>{username}</Headline>
        <IconButton icon='pencil' onPress={showDialog} />
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Edit</Dialog.Title>
          <Dialog.Content>
            <TextInput style={styles.textInput}
              mode='outlined' 
              label='Name' 
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput style={styles.textInput}
              mode='outlined' 
              label='Email' 
              value={userEmail}
              onChangeText={text => setUserEmail(text)}
            />
            <TextInput style={styles.textInput}
              mode='outlined' 
              label='Dietary Restrictions' 
              value={userRestr.toString()}
              onChangeText={text => setUserRestr(text.split(', '))}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Subheading style={styles.text}>Email: {userEmail}</Subheading>
      <Subheading style={styles.text}>Dietary restrictions: {userRestr.toString()}</Subheading>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 15,
    paddingTop: 40,
    fontSize: 40
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 20
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    paddingVertical: 10
  }
});