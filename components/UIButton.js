/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {} from '../constants/index';
const UIButton = props => {
  const {onPress, title, isSelected} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderColor: 'white',
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: isSelected == true ? '#20B2AA' : null,
      }}
    >
      {isSelected == true && (
        <FontAwesome5Icon
          name={'check-circle'}
          style={{
            color: '#FFB6C1',
            position: 'absolute',
            top: 10,
            left: 10,
          }}
          size={20}
        />
      )}
      <Text
        style={{
          color: '#FFB6C1',
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default UIButton;
