import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: colors.white, padding: '14@s'},
  signInLogo: {height: '320@s', width: '320@s'},
  spatiumLogo: {
    position: 'absolute',
    top: '-50@s',
    height: '150@s',
    width: '150@s',
  },
  logoContainer: {
    marginTop: '10@s',
    alignItems: 'center',
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
