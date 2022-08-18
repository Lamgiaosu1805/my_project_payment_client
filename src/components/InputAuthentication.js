import { Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types';
import Colors from '../../assets/resources/colors';

export default function InputAuthentication({nameIcon, size, placeHolderText, secureTextEntry, onChangeText, isPassword}) {
  InputAuthentication.prototype = {
    placeHolderText: PropTypes.string.isRequired,
    nameIcon: PropTypes.string,
    size: PropTypes.number,
    secureTextEntry: PropTypes.bool,
  }
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: Colors.mainColors}}>
      <View style={{flexDirection: 'row', padding: 4}}>
        <Icon name={nameIcon} size={size} color={Colors.mainColors}/>
        <TextInput 
          placeholder = {placeHolderText}
          style = {styles.input}
          secureTextEntry = {secureTextEntry==true && showPassword == false}
          onChangeText = {onChangeText}
          autoCapitalize = 'none'
        />
      </View>
      {isPassword == true
        ? <TouchableOpacity 
            style = {{marginRight: 8}} 
            activeOpacity={0.4}
            onPress = {
              () => {
                setShowPassword(!showPassword);
              }
            }
          >
            <Icon name={showPassword ? "eye-slash" : "eye"} size={size} color={Colors.mainColors}/>
          </TouchableOpacity>
        : <View/>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width * 3 / 5,
    fontSize: 16,
    marginLeft: 8
  }
})