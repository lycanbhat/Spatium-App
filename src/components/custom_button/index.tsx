import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PropsCustomButton} from '../../common/interfaces';
import styles from './styles';
import colors from '../../constants/colors';

const CustomButton: React.FC<PropsCustomButton> = ({
  text,
  onPress,
  textColor = colors.white,
  backgroundColor = colors.primary,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.fieldContainer, {backgroundColor}]}>
      <Text style={[styles.fieldText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
