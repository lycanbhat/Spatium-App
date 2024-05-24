import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  innerContainer: {
    backgroundColor: colors.white,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: '10@s',
    width: '30%',
  },
  image: {height: '16@s', width: '16@s'},
  dot: {
    marginTop: '4@s',
    height: '4@s',
    width: '4@s',
    borderRadius: '4@s',
  },
});

export default styles;
