import React, {useCallback, useEffect, useRef, useState} from 'react';
import CustomBackButton from '../../components/custom_back_button';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import images from '../../constants/images';
import CustomField from '../../components/custom_field';
import {FieldType} from '../../common/enum';
import CustomButton from '../../components/custom_button';
import {OtpProps} from '../../common/types';
import CustomFooter from '../../components/custom_footer';

const Otp: React.FC<OtpProps> = ({navigation: {popToTop, navigate}}) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(30);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerTimer = () => {
    intervalRef.current = setInterval(() => {
      if (timer > 0) {
        setTimer((prevTime: number) => prevTime - 1);
      }
    }, 1000);
  };

  useEffect(() => {
    if (timer == 0) setTimer(30);

    return () => {
      if (timer == 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timer]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomBackButton onPress={() => popToTop()} />

      <View style={styles.logoContainer}>
        <Image
          resizeMode="center"
          source={images.otp_logo}
          style={{height: 400, width: 400}}
        />
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.title}>OTP Verification</Text>

        <Text style={styles.subText}>
          We’ve sent a verification code to akshay.bhat93@gmail.com
        </Text>

        <CustomField
          text={''}
          fieldType={FieldType.otp}
          onChangeText={setOtp}
          value={otp}
        />

        <View style={styles.timerContainer}>
          <Text style={styles.countdownText}>{`00:${
            timer < 10 ? '0' : ''
          }${timer}`}</Text>
          <TouchableOpacity onPress={triggerTimer}>
            <Text style={styles.resendText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>

        <CustomButton onPress={() => navigate('Otp')} text="Login" />
      </View>

      <CustomFooter />
    </ScrollView>
  );
};

export default Otp;
