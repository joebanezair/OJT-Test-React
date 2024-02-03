// AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Rename the screen to HomeScreen
import MainScreen from './MainScreen'; // Rename the main component to MainScreen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }} // Hide the header for MainScreen
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} // Hide the header for HomeScreen
      />
      {/* Add more screens as needed */}
    </Stack.Navigator>
  );
};

export default AppNavigator;


// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './HomeScreen'; // Rename the screen to HomeScreen
// import MainScreen from './MainScreen'; // Rename the main component to MainScreen

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="MainScreen">
//       <Stack.Screen name="My Screen" component={MainScreen} />
//       <Stack.Screen name="HomeScreen" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;
