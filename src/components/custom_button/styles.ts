import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  fieldContainer: {
    padding: '18@s',
    borderRadius: '6@s',
    alignItems: 'center',
  },
  fieldText: {
    fontSize: '16@s',
    fontFamily: 'Ubuntu-Medium',
  },
});

export default styles;
