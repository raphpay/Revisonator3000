/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  const [days, setDays] = useState(0);

  function compteLesJours() {
    // 17 Décembre
    const dateAujourdhui = new Date();
    const dateDuDevoir = new Date(2024, 11, 17);

    var msDiff = new Date(2024, 11, 17).getTime() - new Date().getTime(); //Future date - current date
    var resultat = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    setDays(resultat + 1);
  }

  useEffect(() => {
    compteLesJours();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.sectionContainer}>
          <Text style={styles.text}>Revisonator3000</Text>
        </View>
        <View style={styles.backgroundColor}>
          <Text style={styles.jour}>Jours jusqu'au devoir commun</Text>
          <Text style={styles.Jour}>{days} jours</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  sectionContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  backgroundColor: {
    backgroundColor: 'grey',
    borderRadius: 20,
    marginTop: 50,
    width: '85%',
    height: 150,
    alignItems: 'center',
  },
  jour: {
    marginTop: 5,
    fontSize: 20,
  },
  Jour: {
    fontSize: 20,
    marginTop: 50,
  },
});

export default App;
