import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import images from '../../../../constants/images';
import colors from '../../../../constants/colors';
import {PassCardType} from '../../../../common/enum';

type BuildingPassProps = {
  passCardText: PassCardType.buildingPass;
  issueDate: string;
};

type ParkingPassProps = {
  passCardText: PassCardType.parkingPass;
  vehicle: string;
};

type CardProps = {
  name: string;
  location: string;
} & (BuildingPassProps | ParkingPassProps);

const Card: React.FC<CardProps> = (props: CardProps) => {
  const isBuildingPass = props.passCardText === PassCardType.buildingPass;
  return (
    <View style={styles.container}>
      <View>
        <Image
          resizeMode="cover"
          source={isBuildingPass ? images.building_pass : images.parking_pass}
          style={styles.buildingPass}
        />
        <Text style={styles.buildingPassText}>{props.passCardText}</Text>
      </View>

      <View style={styles.cardContentContainer}>
        <Image
          resizeMode="cover"
          source={images.profile_pic}
          style={styles.profile}
        />

        <View style={styles.cardTextContainer}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.location}>{props.location}</Text>
        </View>
      </View>

      <View style={styles.line} />

      {isBuildingPass ? (
        <View style={styles.issueDateContainer}>
          <View>
            <Text style={styles.issueTitleDate}>Issue date:</Text>
            <Text style={styles.issueDate}>{props.issueDate}</Text>
          </View>
          <View style={styles.passBuildingCardStatus}>
            <Text style={styles.passBuildingCardText}>Active</Text>
          </View>
        </View>
      ) : (
        <View style={styles.issueDateContainer}>
          <View>
            <Text style={styles.issueTitleDate}>Vehicle type:</Text>
            <Text style={styles.issueDate}>{props.vehicle}</Text>
          </View>
          <View style={styles.passParkingCardStatus}>
            <Text style={styles.passParkingCardText}>F-230</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Card;
