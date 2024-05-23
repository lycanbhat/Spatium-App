import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: colors.white, padding: '14@s'},
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
  title: {
    fontSize: '32@vs',
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
  },
});

export default styles;
