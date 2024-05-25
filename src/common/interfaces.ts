import {KeyboardType} from 'react-native';
import {FieldType} from './enum';

// PropsCustomField
export interface PropsCustomField {
  value: string;
  onChangeText: (value: string) => void;
  text: string;
  secureText?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardType;
  fieldType?: FieldType;
  maxLength?: number;
}

// PropsCustomButton
export interface PropsCustomButton {
  text: string;
  textColor?: string;
  onPress: () => void;
  backgroundColor?: string;
}

// PropsCustomBackButton
export interface PropsCustomBackButton {
  onPress: () => void;
}

// HeaderProps
export interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}
