import type {FC} from 'react';
import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {AppInfoModule} from 'app-info-package';

export const AppInfoScreen: FC = () => {
  const [appBuildNumber, setAppBuildNumber] = useState<string | null>(null);
  const [appBundleId, setAppBundleId] = useState<string | null>(null);
  const [appVersion, setAppVersion] = useState<string | null>(null);
  const getAppBuildNumber = () => {
    setAppBuildNumber(AppInfoModule.getAppBuildNumber());
  };

  const getAppBundleId = () => {
    setAppBundleId(AppInfoModule.getAppBundleId());
  };

  const getAppVersion = () => {
    setAppVersion(AppInfoModule.getAppVersion());
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>App Info module</Text>
        <View style={styles.body}>
          <View style={styles.buttonWrapper}>
            <Button onPress={getAppBuildNumber} title="Check build number" />
            <Text style={styles.value}>{appBuildNumber}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={getAppBundleId} title="Check bundle id" />
            <Text style={styles.value}>{appBundleId}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button onPress={getAppVersion} title="Check app version" />
            <Text style={styles.value}>{appVersion}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
