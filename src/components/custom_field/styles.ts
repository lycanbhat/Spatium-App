import colors from '../../constants/colors';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  fieldContainer: {
    marginVertical: '16@s',
  },
  fieldname: {
    fontSize: '16@s',
    color: colors.black,
    fontFamily: 'Ubuntu-Medium',
    marginBottom: '12@s',
  },
  inputContainer: {
    padding: '12@s',
    borderWidth: '2@s',
    borderRadius: '6@s',
    borderColor: colors.field_border,
  },
  input: {
    fontSize: '14@s',
    fontFamily: 'Ubuntu-Regular',
  },
});

export default styles;
