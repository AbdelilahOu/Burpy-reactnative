import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Setters} from './screens/SettersSecreen';
import {Home} from './screens/HomeScreen';
import {Pets} from './screens/PetsScreen';
import {StackParams} from './types';
import * as React from 'react';

const Stack = createNativeStackNavigator<StackParams>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          header: () => undefined,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pets" component={Pets} />
        <Stack.Screen name="Setters" component={Setters} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
