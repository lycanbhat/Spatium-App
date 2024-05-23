import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import {KeyboardAvoidingView, Platform} from 'react-native';

function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <Routes />
    </KeyboardAvoidingView>
  );
}

export default App;
