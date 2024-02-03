import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;



// // import { AntDesign } from '@expo/vector-icons';
// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, Alert, Switch } from 'react-native';
// // import { styles } from './style';
// // import { useNavigation } from '@react-navigation/native';
// // import Home from './Home';

// // const App = () => {
// //   const nice = () => {
// //     Alert.alert('Button Pressed', 'Yow');
// //   };
// //   const [isEnabled, setIsEnabled] = useState(false);
// //   const toggleSwitch = () => {
// //     setIsEnabled((previousState) => !previousState);
// //     // Additional logic as needed when the switch is toggled
// //   };

// //   const navigation = useNavigation();
// //   const gotoAnotherPage = () => {
// //     navigation.navigate('Home');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.textStyle}>Joe OJT Test React</Text>
// //       <View style={styles.containerView}>
// //         <Text style={styles.textStyleText2}>Proxy Hosts</Text>
// //         <TouchableOpacity style={styles.buttonz} onPress={gotoAnotherPage}>
// //           <Text>
// //            <AntDesign name="doubleright" size={20} color="black" />
// //           </Text>
// //         </TouchableOpacity>
// //       </View>

// //       <View style={styles.containerView}>
// //         <View>
// //           <Text style={styles.textStyleText3}>Matching Game Log Switch</Text>
// //         </View>
// //         <View>
// //           <Switch
// //             trackColor={{ false: "#767577", true: "#81b0ff" }}
// //             thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
// //             ios_backgroundColor="#3e3e3e"
// //             onValueChange={toggleSwitch}
// //             value={isEnabled}
// //           />
// //         </View>
// //       </View>
// //       <View style={styles.containerView}>
// //         <Text style={styles.textStyleText}>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
// //       </View>

// //     </View>
// //   );
// // };

// // export default App;

// import { AntDesign } from '@expo/vector-icons';
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert, Switch } from 'react-native';
// import { styles } from './style';
// import { useNavigation } from '@react-navigation/native';

// const App = () => {
//   const nice = () => {
//     Alert.alert('Button Pressed', 'Yow');
//   };

//   const [isEnabled, setIsEnabled] = useState(false);

//   const toggleSwitch = () => {
//     setIsEnabled((previousState) => !previousState);
//     // Additional logic as needed when the switch is toggled
//   };

//   const navigation = useNavigation();

//   const gotoAnotherPage = () => {
//     // Assuming you have a screen named 'Home' properly defined
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.textStyle}>Joe OJT Test React</Text>
//       <View style={styles.containerView}>
//         <Text style={styles.textStyleText2}>Proxy Hosts</Text>
//         <TouchableOpacity style={styles.buttonz} onPress={gotoAnotherPage}>
//           <Text>
//             <AntDesign name="doubleright" size={20} color="black" />
//           </Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.containerView}>
//         <View>
//           <Text style={styles.textStyleText3}>Matching Game Log Switch</Text>
//         </View>
//         <View>
//           <Switch
//             trackColor={{ false: "#767577", true: "#81b0ff" }}
//             thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//             ios_backgroundColor="#3e3e3e"
//             onValueChange={toggleSwitch}
//             value={isEnabled}
//           />
//         </View>
//       </View>
//       <View style={styles.containerView}>
//         <Text style={styles.textStyleText}>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
//       </View>
//     </View>
//   );
// };

// export default App;
