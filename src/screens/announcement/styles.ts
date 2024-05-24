import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: '10@s',
    margin: '12@s',
    elevation: '4@s',
    backgroundColor: colors.white,
    borderRadius: '16@s',
    shadowColor: '#000', // Shadow properties for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
  },
  profileContainer: {
    alignSelf: 'flex-start',
    borderWidth: '1@s',
    borderRadius: '10@s',
    borderColor: colors.field_border,
    marginRight: '8@s',
  },
  profile: {height: '40@s', width: '40@s'},
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
  banner: {width: '100%', height: '100@s'},
});

export default styles;
