import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

function Home({navigation}: StackScreenProps<any>) {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={{padding: 16}}
        onPress={() => navigation.navigate('PDF')}>
        <Text>To PDF</Text>
      </Pressable>
      <Pressable
        style={{padding: 16}}
        onPress={() => navigation.navigate('FlatList')}>
        <Text>To Flat list</Text>
      </Pressable>
      <Pressable
        style={{padding: 16}}
        onPress={() => navigation.navigate('TTS')}>
        <Text>To TTS</Text>
      </Pressable>
    </View>
  );
}

export default Home;
