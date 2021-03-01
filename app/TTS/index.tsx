import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TextInput, Pressable} from 'react-native';
import TTS, {Voice, Engine} from 'react-native-tts';

function TTSScreen() {
  const [voiceList, setVL] = useState<Voice[]>([]);
  const [engineList, setEL] = useState<Engine[]>([]);
  const [text, setText] = useState<string>(
    '刀鲚（俗称刀鱼）是一种洄游性鱼类，每年春季的2到3月会由海入江，进行产卵洄游。Trump also painted a dire and fearful portrait of America under the Biden administration during his speech Sunday.',
  );

  useEffect(() => {
    (async () => {
      const list = await TTS.voices();
      setVL(list);
      const list2 = await TTS.engines();
      setEL(list2);
      TTS.setDefaultLanguage('zh-CN');
    })();
  }, []);

  const handleSpeak = async () => {
    try {
      // await TTS.getInitStatus();
      TTS.speak(text);
    } catch (e) {
      console.log(e);
    }
  };
  const handleStop = () => {
    TTS.stop();
  };

  return (
    <ScrollView style={{margin: 8}}>
      <TextInput
        style={{backgroundColor: '#ddd', padding: 8, borderRadius: 4}}
        value={text}
        onChangeText={(t) => setText(t)}
        multiline
      />
      <View style={{flexDirection: 'row'}}>
        <Pressable style={{padding: 16}} onPress={handleSpeak}>
          <Text>Speak</Text>
        </Pressable>
        <Pressable style={{padding: 16, marginLeft: 8}} onPress={handleStop}>
          <Text>Stop</Text>
        </Pressable>
      </View>
      <Text>Voice List:</Text>
      {voiceList.map((voice) => <Text key={voice.id}>{voice.id}, name: {voice.name}, language: {voice.language}</Text>)}
      <Text style={{marginTop: 8}}>Engine List:</Text>
      {engineList.map((engine) => <Text key={engine.name}>{engine.label}</Text>)}
    </ScrollView>
  );
}

export default TTSScreen;
