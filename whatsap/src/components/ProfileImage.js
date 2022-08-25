import {View, Text} from 'react-native';
import React from 'react';

const ProfileImage = ({image}) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        height: 60,
        width: 60,
        borderRadius: 50,
        margin: 8,
        padding: 8,
      }}>
      {image}
    </View>
  );
};

export default ProfileImage;
