import {View, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import colors from '../../constants/colors';
import {
  AnnouncementLogo,
  MyPassLogo,
  ProfileLogo,
} from '../../constants/images';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {TabRoutes} from '../../common/types';

const ICONS: Record<TabRoutes, React.FC<{color: string}>> = {
  Announcement: AnnouncementLogo,
  MyPass: MyPassLogo,
  Profile: ProfileLogo,
};

const BottomTab: React.FC<BottomTabBarProps> = ({
  state,
  navigation: {navigate},
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;
        const routeName = route.name as TabRoutes;
        const Icon = ICONS[routeName];

        return (
          <Pressable
            key={route.name}
            style={styles.innerContainer}
            onPress={() => navigate(routeName)}>
            <Icon color={isFocused ? colors.primary : colors.grey} />

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
