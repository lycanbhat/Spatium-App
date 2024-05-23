import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import images from '../../constants/images';
import CustomField from '../../components/custom_field';
import {FieldType, KeyboardType} from '../../common/enum';
import CustomButton from '../../components/custom_button';
import CustomFooter from '../../components/custom_footer';
import {LoginProps} from '../../common/types';
import {scale} from 'react-native-size-matters';

const Login: React.FC<LoginProps> = ({navigation: {navigate}}) => {
  const [email, setEmail] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="center"
          source={images.sign_in_logo}
          style={{height: scale(320), width: scale(320)}}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Login</Text>
        <CustomField
          text="Email"
          value={email}
          onChangeText={setEmail}
          fieldType={FieldType.text}
          keyboardType={KeyboardType['email-address']}
          placeholder="Enter your official email ID"
        />
        <CustomButton onPress={() => navigate('Otp')} text="Send OTP" />
      </View>
      <CustomFooter />
    </ScrollView>
  );
};

export default Login;
