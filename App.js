import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './components/header';
import Todo from './screens/Todo';
import Flexbox from './screens/Flexbox';

class App extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
      <Header textIwant={'YOOOO'} />
        <View style={{ padding: 20 }} />
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
        <View style={{ padding: 20 }} />
        <Button 
          title={'BYE'} 
          color='red' 
          onPress={() => { console.log('bye'); }}
        />
      <Header textIwant={'LOLOL'} />  
      <View style={{ padding: 20 }} />
      <Button
          title="Go to Todo"
          onPress={() => this.props.navigation.navigate('TodoScreen')}
      />
      <Button
          title="Go to Flexbox"
          onPress={() => this.props.navigation.navigate('FlexboxScreen')}
      />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: App,
  TodoScreen: Todo,
  FlexboxScreen: Flexbox
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

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

