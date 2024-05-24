import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  padding: {paddingHorizontal: 14, paddingTop: 14},
  spatiumLogo: {height: '60@s', width: '120@s'},
  title: {
    fontSize: '24@vs',
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
    marginBottom: '6@s',
  },
});

export default styles;
