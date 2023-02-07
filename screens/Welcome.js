/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {icons, images, fontSize} from '../constants/index';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {UIButton} from '../components/index';
const Welcome = () => {
  //state => when a state is changed =>UI is reloads
  const [accountTypes, setAccountTypes] = useState([
    {name: 'Influencer', isSelected: true},
    {name: 'Business', isSelected: false},
    {name: 'Individual', isSelected: false},
  ]);
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
            alignItems: 'center',
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
          {/* <Image
            style={{
              height: 20,
              width: 20,
              tintColor: 'white',
              marginRight: 10,
            }}
            source={icons.icon_question}
          /> */}
          <FontAwesome5Icon
            name={'question-circle'}
            color={'white'}
            size={20}
            style={{
              marginEnd: 15,
            }}
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
          <Text style={{color: '#20B2AA', fontSize: fontSize.h6}}>
            Welcome to
          </Text>
          <Text
            style={{
              color: '#20B2AA',
              fontWeight: 'bold',
              fontSize: fontSize.h3,
            }}
          >
            YOURCOMPANY.CO !
          </Text>
          <Text style={{color: '#20B2AA', fontSize: fontSize.h6}}>
            Please select your account type
          </Text>
        </View>
        <View style={{flex: 40}}>
          {accountTypes.map(accountType => {
            return (
              <UIButton
                onPress={() => {
                  let newAccountTypes = accountTypes.map(eachAccountType => {
                    return {
                      ...eachAccountType,
                      isSelected: eachAccountType.name == accountType.name,
                    };
                  });
                  setAccountTypes(newAccountTypes);
                }}
                title={accountType.name}
                isSelected={accountType.isSelected}
              />
            );
          })}
        </View>
        <View style={{flex: 25}}>
          <UIButton title={'Login'.toUpperCase()} />
          <Text
            style={{
              color: '#20B2AA',
              fontSize: fontSize.h6,
              alignSelf: 'center',
            }}
          >
            Want to register new Account ?
          </Text>
          <TouchableOpacity
            style={{padding: 5}}
            onPress={() => alert('press to register')}
          >
            <Text
              style={{
                color: '#FFB6C1',
                fontSize: fontSize.h5,
                fontWeight: 'bold',
                alignSelf: 'center',
                textDecorationLine: 'underline',
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
