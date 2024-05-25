import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    margin: '12@s',
  },
  innerContainer: {
    padding: '6@s',
    marginBottom: '14@s',
    elevation: '6@s',
    backgroundColor: colors.white,
    borderRadius: '16@s',

    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
  },

  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: '14@s',
    paddingVertical: '10@s',
  },
  cardContentContainer: {
    paddingHorizontal: '14@s',
    paddingVertical: '10@s',
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
    fontSize: '16@s',
    fontFamily: 'Ubuntu-Medium',
  },
  title: {
    color: colors.black,
    fontSize: '14@s',
    fontFamily: 'Ubuntu-Medium',
  },
  subTitle: {
    color: colors.grey,
    fontSize: '12@s',
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
