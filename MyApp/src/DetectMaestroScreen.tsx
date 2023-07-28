import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {DetectMaestro} from 'react-native-detect-maestro';

export function DetectMaestroScreen() {
  const [value, setValue] = useState<boolean | null>(null);

  const detectMaestro = () => {
    setValue(DetectMaestro.isMaestro());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>App Info module</Text>
        <View style={styles.body}>
          <View style={styles.buttonWrapper}>
            <Button onPress={detectMaestro} title="Detect Maestro" />
            <Text style={styles.value}>{JSON.stringify({value})}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  buttonWrapper: {
    alignSelf: 'stretch',
    paddingVertical: 30,
  },
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
    textTransform: 'capitalize',
  },
  safeArea: {
    alignSelf: 'stretch',
    flex: 1,
  },
  value: {
    fontSize: 16,
    padding: 8,
  },
});
