import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: '14@s',
    margin: '12@s',
    elevation: '4@s',
    backgroundColor: colors.white,
    borderRadius: '14@s',

    // Shadow properties for iOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
  },
  profileContainer: {
    alignSelf: 'flex-start',
    borderWidth: '1@s',
    borderRadius: '14@s',
    borderColor: colors.field_border,
    marginRight: '8@s',
  },
  profile: {height: '50@s', width: '50@s', borderRadius: '14@s'},
  contentContainer: {flex: 1},
  title: {
    fontSize: '14@s',
    fontFamily: 'Ubuntu-Medium',
    color: colors.black,
    marginBottom: '6@s',
  },
  content: {
    fontSize: '10@s',
    fontFamily: 'Ubuntu-Regular',
    color: colors.text,
    marginBottom: '6@s',
  },
  banner: {width: '100%', height: '100@s', borderRadius: '14@s'},
});

export default styles;
