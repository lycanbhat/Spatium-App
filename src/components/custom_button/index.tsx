import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {PropsCustomButton} from '../../common/interfaces';
import styles from './styles';

const CustomButton: React.FC<PropsCustomButton> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.fieldContainer}>
      <Text style={styles.fieldText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
