import * as React from 'react';
import { IconButton, View } from 'react-native';
import { Dialog, Headline, Portal, Provider, StyleSheet, Title } from 'react-native-paper';

export default function ProfileTab({ name, restrictions, email }) {
  const [userName, setUserName] = React.useState(name);
  
  const [nameVisible, setNameVisible] = React.useState(false);

  const showName = () => setNameVisible(true);

  const hideName = () => setNameVisible(false);

  return (
    <Provider>
      <Headline>Profile</Headline>
      <View style={styles.line}>
        <Title>{userName}</Title>
        <IconButton icon='pencil' onPress={showName} />
        <Portal>
          <Dialog visible={nameVisible} onDismiss={hideName}>
            <Dialog.Content>

            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})