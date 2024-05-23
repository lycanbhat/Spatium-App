import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: '16@s',
    borderRadius: '32@s',
    alignSelf: 'baseline',
    elevation: '10@s',
  },
});

export default styles;
