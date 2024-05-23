import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  fieldContainer: {
    backgroundColor: colors.primary,
    padding: '18@s',
    borderRadius: '6@s',
    alignItems: 'center',
  },
  fieldText: {
    fontSize: '16@s',
    fontFamily: 'Ubuntu-Medium',
    color: colors.white,
  },
});

export default styles;
