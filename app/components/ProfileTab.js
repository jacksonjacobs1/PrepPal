import { getAuth } from '@firebase/auth';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Dialog, Headline, IconButton, Portal, Provider, Subheading, TextInput, Title } from 'react-native-paper';
import { getAuth } from 'firebase/auth';

export default function ProfileTab({ navigation }) {
  const auth = getAuth();
  const user = auth.currentUser;
  // replace default states with firebase data later

  const auth = getAuth();
  const user = auth.currentUser;
  const [username, setUsername] = React.useState(user.nickname);
  const [userEmail, setUserEmail] = React.useState(user.email);
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
      <Button mode="contained" testID="signOut" style={styles.button} onPress={() => null}>
        Log Out
      </Button>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 15,
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