import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView,
    Image, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import InputAuthentication from '../components/InputAuthentication'
import { StatusBar } from 'expo-status-bar'
import Colors from '../../assets/resources/colors';

export default function SignInScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    console.log({
      username, password
    })
  }

  const onChangeTextUsername = (value) => {
    setUsername(value);
  }

  const onChangeTextPassword = (value) => {
    setPassword(value);
  };
  return (
    <KeyboardAvoidingView style = {styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <StatusBar style = "auto" /> 
        <View style = {{marginBottom: 24, alignItems:'center'}}>
          <Image 
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/vi/0/0e/Logo_MTA_new.png'
            }}
            style = {styles.logo} 
          />
        </View>
        <View style={{padding: 8}}>
          <InputAuthentication nameIcon="user" size={20} placeHolderText="Tên tài khoản" onChangeText = {onChangeTextUsername}/>
          <View style = {{height: 30}}/>
          <InputAuthentication nameIcon="lock" size={20} placeHolderText="Mật khẩu" secureTextEntry={true} onChangeText = {onChangeTextPassword} isPassword={true}/>
        </View>
        <TouchableOpacity 
          style={styles.signInButton}
          onPress={signIn}
          activeOpacity = {0.4}
        >
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{marginTop: 32, padding: 8}} 
          activeOpacity={0.4}
          onPress={
            () => {
              navigation.navigate('SignUp')
            }
          }
        >
          <Text style={{fontSize: 16, fontWeight: '500', fontStyle: 'italic'}}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
       </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    signInButton: {
      marginTop: 32,
      padding: 10,
      width: Dimensions.get('window').width * 3 / 5,
      borderRadius: 10,
      backgroundColor: Colors.mainColors,
      justifyContent: 'center',
      alignItems: 'center'
    }
})