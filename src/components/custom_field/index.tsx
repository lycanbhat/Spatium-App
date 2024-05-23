import React from 'react';
import {Text, TextInput, View} from 'react-native';
import colors from '../../constants/colors';
import styles from './styles';
import {FieldType, KeyboardType} from '../../common/enum';
import {PropsCustomField} from '../../common/interfaces';

const CustomField: React.FC<PropsCustomField> = ({
  text,
  placeholder,
  keyboardType = KeyboardType.default,
  value,
  onChangeText,
  fieldType = FieldType.text,
}) => {
  return (
    <View style={styles.fieldContainer}>
      {fieldType == FieldType.text ? (
        <>
          <Text style={styles.fieldname}>{text}</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              cursorColor={colors.black}
              placeholder={placeholder}
              placeholderTextColor={colors.field_border}
            />
          </View>
        </>
      ) : fieldType == FieldType.otp ? (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              maxLength={6}
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              keyboardType={KeyboardType.default}
              secureTextEntry={true}
              cursorColor={colors.black}
            />
          </View>
        </>
      ) : null}
    </View>
  );
};

export default CustomField;
