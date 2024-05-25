import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {PassCardType} from './enum';

//Navigation
export type StackParamList = {
  AuthScreen: undefined;
  TabScreen: undefined;
  Login: undefined;
  Otp: {email: string};
  Announcement: undefined;
  MyPass: undefined;
  Profile: undefined;
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

// TabRoutes
export type TabRoutes = 'Announcement' | 'MyPass' | 'Profile';

// BuildingPassProps
export type BuildingPassProps = {
  passCardText: PassCardType.buildingPass;
  issueDate: string;
};

// ParkingPassProps
export type ParkingPassProps = {
  passCardText: PassCardType.parkingPass;
  vehicle: string;
};

// CardProps
export type CardProps = {
  name: string;
  location: string;
} & (BuildingPassProps | ParkingPassProps);
