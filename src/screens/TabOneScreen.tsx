import * as React from 'react';
import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { RootTabScreenProps } from '../../types';

const { APP_NAME, NODE_ENV } = Constants.manifest!.extra!.env;

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Text style={styles.text}>
        {APP_NAME} ({NODE_ENV})
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
