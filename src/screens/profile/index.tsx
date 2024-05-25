import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import styles from './styles';
import images from '../../constants/images';
import CustomButton from '../../components/custom_button';
import colors from '../../constants/colors';
import {ProfileProps} from '../../common/types';

const Profile: React.FC<ProfileProps> = ({navigation: {navigate}}) => {
  return (
    <Header title="Profile">
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.cardContainer}>
            <Image
              resizeMode="cover"
              source={images.profile_pic}
              style={styles.profile}
            />

            <View style={styles.cardTextContainer}>
              <Text style={styles.name}>Nimit Handa</Text>
            </View>
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.cardContentContainer}>
            <Text style={styles.title}>Company</Text>
            <Text style={styles.subTitle}>Spatium offices Pvt. Ltd.</Text>
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.cardContentContainer}>
            <Text style={styles.title}>Company email</Text>
            <Text style={styles.subTitle}>nimithanda@spatium.com</Text>
          </View>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.cardContentContainer}>
            <Text style={styles.title}>Phone</Text>
            <Text style={styles.subTitle}>+91 7259356200</Text>
          </View>
        </View>

        <CustomButton
          text="Logout"
          textColor={colors.background}
          onPress={() => navigate('AuthScreen')}
          backgroundColor={colors.logout}
        />
      </View>
    </Header>
  );
};

export default Profile;
