import {StackNavigationProp} from '@react-navigation/stack';

//Navigation
export type StackParamList = {
  Login: undefined;
  Otp: undefined;
};

export type LoginProps = {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
};

export type OtpProps = {
  navigation: StackNavigationProp<StackParamList, 'Otp'>;
};
