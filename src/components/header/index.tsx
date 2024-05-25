import {View, Image, Text, ScrollView} from 'react-native';
import React from 'react';
import images from '../../constants/images';
import styles from './styles';
import {HeaderProps} from '../../common/interfaces';

const Header: React.FC<HeaderProps> = ({title, children}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.padding}>
        <Image
          source={images.spatium_logo}
          resizeMode="contain"
          style={styles.spatiumLogo}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </ScrollView>
  );
};

export default Header;
