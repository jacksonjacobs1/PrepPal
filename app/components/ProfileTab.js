import * as React from 'react';
import { Button, IconButton, View } from 'react-native';
import { Dialog, Headline, Portal, Provider, StyleSheet, Subheading, TextInput, Title } from 'react-native-paper';

export default function ProfileTab({ name, restrictions, email }) {
  const [username, setUsername] = React.useState(name);
  const [userEmail, setUserEmail] = React.useState(email);
  const [userRestr, setUserRestr] = React.useState(restrictions);
  
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <View style={styles.line}>
        <Headline>Profile</Headline>
        <IconButton icon='pencil' onPress={showDialog} />
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Edit</Dialog.Title>
          <Dialog.Content>
            <TextInput 
              mode='outlined' 
              label='Name' 
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput 
              mode='outlined' 
              label='Email' 
              value={userEmail}
              onChangeText={text => setUserEmail(text)}
            />
            <TextInput 
              mode='outlined' 
              label='Dietary Restrictions' 
              value={userRestr}
              onChangeText={text => setUserRestr(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Title>{username}</Title>
      <Subheading>Email: {userEmail}</Subheading>
      <Subheading>Dietary restrictions: {userRestr}</Subheading>
    </Provider>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});