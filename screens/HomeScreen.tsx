import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});