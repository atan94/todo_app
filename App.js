import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button 
          title={'Hello'} 
          color='green' 
          onPress={() => { console.log('hello'); }}
        />
        <Avatar
  xlarge
  rounded
  source={{ uri: 'http://ukcdn.ar-cdn.com/recipes/land500/3f02d99c-df8f-40a4-80ae-f768b0f23dc0.jpg' }}
  onPress={() => console.log('Works!')}
  activeOpacity={0.7}
        />
        <Text style={styles.bigblue}>wassup</Text>
        <Button 
          title={'BYE'} 
          color='red' 
          onPress={() => { console.log('bye'); }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
