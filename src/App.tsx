import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from './screens/HomeScreen';
import {View} from 'react-native';
import * as React from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Timer"
        screenOptions={{headerStyle: {backgroundColor: '#ffff'}}}>
        <Stack.Screen
          name="Timer"
          options={({}) => ({
            headerShadowVisible: false,
            header: () => <View></View>,
          })}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
