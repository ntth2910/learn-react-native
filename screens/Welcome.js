/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {icons, images} from '../constants/index';
const Welcome = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 100}}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={{flex: 100}}
      >
        <View
          style={{
            margin: 5,
            paddingTop: 5,
            flexDirection: 'row',
            flex: 10,
            // height: 50,
            backgroundColor: '#FFB6C1',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRadius: 15,
          }}
        >
          <Image
            style={{
              height: 30,
              width: 30,
              marginStart: 10,
            }}
            source={icons.icon_fire}
          />
          <Text style={{color: 'white', paddingLeft: 5}}>YOURCOMPANY.CO</Text>
          <View style={{flex: 100}} />
          <Image
            style={{
              height: 20,
              width: 20,
              tintColor: 'white',
              marginRight: 10,
            }}
            source={icons.icon_question}
          />
        </View>
        <View
          style={{
            flex: 25,
            // backgroundColor: 'white',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Text style={{color: '#20B2AA', fontSize: 12}}>Welcome to</Text>
          <Text style={{color: '#20B2AA', fontWeight: 'bold'}}>
            YOURCOMPANY.CO !
          </Text>
          <Text style={{color: '#20B2AA', fontSize: 12}}>
            Please select your account type
          </Text>
        </View>
        <View style={{flex: 50}}>
          <TouchableOpacity
            style={{
              borderColor: 'white',
              borderWidth: 1,
              height: 45,
              borderRadius: 5,
              marginHorizontal: 15,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              //   backgroundColor: '#20B2AA',
            }}
          >
            <Text
              style={{
                color: '#FFB6C1',
              }}
            >
              Influencer
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 15, backgroundColor: 'green'}} />
      </ImageBackground>
    </View>
  );
};

export default Welcome;
