import {View, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../constants/colors';

const BottomTab = ({state, navigation: {navigate}}: any) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        return (
          <Pressable
            key={route.name}
            style={styles.innerContainer}
            onPress={() => navigate(route.name)}>
            <Image
              source={route.params.icon}
              style={styles.image}
              tintColor={isFocused ? colors.primary : colors.grey}
            />

            <View
              style={[
                styles.dot,
                {backgroundColor: isFocused ? colors.primary : colors.grey},
              ]}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTab;
