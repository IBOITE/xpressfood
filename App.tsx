import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { colors } from './src/global/styles';
import RootNavigator from './src/navigation/RootNavigator';
import { SignInContextProvider } from './src/contexts/authContext';







function App() {
  
  return (
    <SignInContextProvider>
      <View  style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.orangeC}
        />
        <RootNavigator/>
      </View>
    </SignInContextProvider>
    
  );
}


const styles = StyleSheet.create({
  container:{flex:1}
});


export default App;
