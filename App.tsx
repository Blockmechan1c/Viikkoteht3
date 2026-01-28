import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import SecondScreen from './screens/SecondScreen'
import CustomNavigationBar from './appbar';

export type RootStackParamList = {
  Home: {};
  Second: {};
};

const Stack = createStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <PaperProvider>
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
    </Stack.Navigator>
  </NavigationContainer>
</PaperProvider>
  );
}