import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

//Navigation
export type StackParamList = {
  AuthScreen: undefined;
  TabScreen: undefined;
  Login: undefined;
  Otp: {email: string};
  Announcement: {icon: number};
  MyPass: {icon: number};
  Profile: {icon: number};
};

export type LoginProps = {
  navigation: StackNavigationProp<StackParamList, 'Login'>;
};

export type OtpProps = {
  navigation: StackNavigationProp<StackParamList, 'Otp'>;
  route: RouteProp<StackParamList, 'Otp'>;
};

export type AnnouncementProps = {
  navigation: StackNavigationProp<StackParamList, 'Announcement'>;
};

export type MyPassProps = {
  navigation: StackNavigationProp<StackParamList, 'MyPass'>;
};

export type ProfileProps = {
  navigation: StackNavigationProp<StackParamList, 'Profile'>;
};
