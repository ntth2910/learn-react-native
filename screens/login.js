/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import {images, icons, fontSize} from '../constants/index';
const Login = props => {
  return (
    <View
      style={{
        flex: 100,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          height: 200,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'black',
            fontSize: fontSize.h2,
            fontWeight: 'bold',
            width: '50%',
          }}
        >
          Already have an Account ?
        </Text>
        <Image
          source={images.logo}
          tintColor={'#FFB6C1'}
          style={{
            width: 100,
            height: 100,
            //tintColor để trong phần style cũng được
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={{color: '#20B2AA', fontSize: fontSize.h6}}>Email:</Text>
      <TextInput placeholder="examp1e@email.com" />
    </View>
  );
};
export default Login;
