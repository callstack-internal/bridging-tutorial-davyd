import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {WidgetPicker} from 'react-native-widget-picker';

export function WidgetPickerScreen(): React.JSX.Element {
  const [isSupported, setIsSupported] = React.useState<boolean | null>(null);
  const isRequestPinAppWidgetSupported = () => {
    const val = WidgetPicker.isRequestPinAppWidgetSupported();
    setIsSupported(val);
  };

  const requestPinAppWidget = async () => {
    WidgetPicker.requestPinAppWidget("MyAppWidget")
      .then(val => {
        console.log(' --- xdebug', {val});
      })
      .catch(e => {
        console.log(' --- xdebug', e);
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>Pin widget</Text>
        <View style={styles.body}>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={isRequestPinAppWidgetSupported}
              title={`Check ${JSON.stringify({isSupported})}`}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              onPress={requestPinAppWidget}
              title="Request Pin AppWidget"
            />
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
});
