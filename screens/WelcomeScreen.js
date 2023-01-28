/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {sum2Number, substract2Number, PI} from '../utilities/Calculation';
//component = function

const WelcomeScreen = props => {
  const {x, y} = props;
  const {person, products} = props;
  //destructuring person object
  const {name, age, email} = person;
  // debugger;

  alert(`y=${y}, x=${x}`);
  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>this is home screen</Text>
      <Text>
        Name: {name}, Age: {age}, Email: {email}
      </Text>
      {/* <Text>{JSON.stringify(products)}</Text> */}
      {products.map(product => (
        <View>
          <Text>Name: {product.productName}</Text>
          <Text>Year: {product.year}</Text>
        </View>
      ))}
      <Text>sum of 2 and 3 = {sum2Number(2, 3)}</Text>
      <Text>substract of 4 and 3 = {substract2Number(4, 3)}</Text>
      <Text>PI = {PI}</Text>
    </View>
  );
};
export default WelcomeScreen;
