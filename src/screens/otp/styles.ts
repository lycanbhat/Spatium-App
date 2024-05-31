import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    flexGrow: 1,
    padding: '14@s',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
  },
  otpLogo: {height: '300@s', width: '300@s'},
  bodyContainer: {
    flex: 1,
  },
  title: {
    fontSize: '32@s',
    fontFamily: 'Ubuntu-Bold',
    color: colors.black,
    marginBottom: '12@s',
  },
  subText: {
    fontSize: '14@s',
    color: colors.black,
    fontFamily: 'Ubuntu-Medium',
  },
  timerContainer: {
    marginBottom: '12@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countdownText: {
    fontSize: '12@s',
    color: colors.grey,
    fontFamily: 'Ubuntu-Medium',
  },
  resendText: {
    fontSize: '12@s',
    color: colors.black,
    fontFamily: 'Ubuntu-Medium',
    textDecorationLine: 'underline',
    textDecorationColor: colors.black,
  },
});

export default styles;
