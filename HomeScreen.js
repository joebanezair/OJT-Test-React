// HomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style';

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToMainScreen = () => {
    navigation.navigate('MainScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Another React Page</Text>
      <TouchableOpacity onPress={goToMainScreen}>
        <Text style={styles.button}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
