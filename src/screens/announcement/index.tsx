import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import images from '../../constants/images';
import styles from './styles';

const data = [
  {
    title: 'Spatium',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',
    banner: images.banner,
  },
  {
    title: 'Spatium',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',
    banner: images.banner,
  },
  {
    title: 'Spatium',
    content:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.',
    banner: images.banner,
  },
];

const Announcement = () => {
  return (
    <Header title="Announcement">
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <View style={styles.profileContainer}>
            <Image
              source={images.profile_pic}
              resizeMode="cover"
              style={styles.profile}
            />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <Image
              resizeMode="stretch"
              style={styles.banner}
              source={item.banner}
            />
          </View>
        </View>
      ))}
    </Header>
  );
};

export default Announcement;
