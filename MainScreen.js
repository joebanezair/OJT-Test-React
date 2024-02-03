import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, Switch } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // Load the saved state from AsyncStorage when the component mounts
    loadSwitchState();
  }, []);

  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    saveSwitchState(newState);
    // Additional logic as needed when the switch is toggled
  };

  const saveSwitchState = async (state) => {
    try {
      await AsyncStorage.setItem('is_show_matching_game_Jog', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving switch state:', error);
    }
  };

  const loadSwitchState = async () => {
    try {
      const savedState = await AsyncStorage.getItem('is_show_matching_game_Jog');
      if (savedState !== null) {
        setIsEnabled(JSON.parse(savedState));
      }
    } catch (error) {
      console.error('Error loading switch state:', error);
    }
  };

  const gotoHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Joe OJT Test React</Text>
      <View style={styles.containerView}>
        <Text style={styles.textStyleText2}>Proxy Hosts</Text>
        <TouchableOpacity style={styles.buttonz} onPress={gotoHomeScreen}>
          <AntDesign name="doubleright" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerView}>
        <View>
          <Text style={styles.textStyleText3}>Matching Game Log Switch</Text>
        </View>
        <View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.containerView}>
        <Text style={styles.textStyleText}>{isEnabled ? 'Saved new state to assync storage' : 'assync is OFF'}</Text>
      </View>
    </View>
  );
};

export default MainScreen;


 