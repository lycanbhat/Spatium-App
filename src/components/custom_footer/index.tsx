import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const CustomFooter = () => {
  return (
    <>
      <Text style={styles.alignCenter}>
        Copyright Spatium offices Pvt. Ltd. 2024.
      </Text>
      <Text style={styles.alignCenter}>All Rights Reserved</Text>
    </>
  );
};

export default CustomFooter;
