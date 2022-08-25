import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from './src/screens/Chats';
import ChatItems from './src/screens/ChatItems';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatItems" component={ChatItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
