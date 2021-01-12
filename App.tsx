import React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './app/Home';
import PDFViewer from './app/PDFViewer';
import FLView from './app/FlatList';

const Stack = createStackNavigator();

enableScreens();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PDF" component={PDFViewer} />
        <Stack.Screen name="FlatList" component={FLView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
