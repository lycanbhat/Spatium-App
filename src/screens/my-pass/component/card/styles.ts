import {ScaledSheet} from 'react-native-size-matters';
import colors from '../../../../constants/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    margin: '12@s',
    elevation: '4@s',
    backgroundColor: colors.white,
    borderRadius: '16@s',
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
  },
  buildingPass: {
    width: '100%',
    height: '160@s',
    borderTopLeftRadius: '16@s',
    borderTopRightRadius: '16@s',
  },
  buildingPassText: {
    position: 'absolute',
    color: colors.white,
    fontSize: '24@s',
    fontFamily: 'Ubuntu-Medium',
    bottom: 0,
    padding: '16@s',
  },
  cardContentContainer: {
    flexDirection: 'row',
    paddingHorizontal: '18@s',
    paddingVertical: '14@s',
  },
  profile: {
    height: '50@s',
    width: '50@s',
    borderRadius: '50@s',
    borderWidth: '1@s',
    marginRight: '14@s',
  },
  cardTextContainer: {justifyContent: 'center'},
  name: {
    color: colors.black,
    fontSize: '14@s',
    fontFamily: 'Ubuntu-Medium',
  },
  location: {
    color: colors.grey,
    fontSize: '10@s',
    fontFamily: 'Ubuntu-Regular',
  },
  line: {height: '1@s', backgroundColor: colors.grey},
  issueDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '18@s',
    paddingVertical: '14@s',
  },
  issueTitleDate: {
    color: colors.grey,
    fontSize: '10@s',
    fontFamily: 'Ubuntu-Medium',
  },
  issueDate: {
    color: colors.black,
    fontSize: '12@s',
    fontFamily: 'Ubuntu-Medium',
  },
  passBuildingCardStatus: {
    backgroundColor: colors.activeBackground,
    padding: '10@s',
    borderRadius: '12@s',
  },
  passBuildingCardText: {
    color: colors.activeText,
    fontSize: '12@s',
    fontFamily: 'Ubuntu-Medium',
  },

  passParkingCardStatus: {
    backgroundColor: colors.grey,
    padding: '10@s',
    borderRadius: '12@s',
  },
  passParkingCardText: {
    color: colors.text,
    fontSize: '12@s',
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
