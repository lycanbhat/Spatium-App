import {KeyboardType} from 'react-native';
import {FieldType} from './enum';

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

export interface PropsCustomButton {
  text: string;
  onPress: () => void;
}

export interface PropsCustomBackButton {
  onPress: () => void;
}
