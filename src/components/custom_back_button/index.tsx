import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ArrowLeft} from 'react-native-feather';
import colors from '../../constants/colors';
import styles from './styles';
import {PropsCustomBackButton} from '../../common/interfaces';

const CustomBackButton: React.FC<PropsCustomBackButton> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ArrowLeft color={colors.black} height={30} width={30} />
    </TouchableOpacity>
  );
};

export default CustomBackButton;
