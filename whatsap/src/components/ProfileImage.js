import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

const ProfileImage = ({image, height, width}) => {
  const inlineStyle = {
    width: width,
    height: height,
  };
  return (
    <View style={[styles.image, inlineStyle]}>
      <Image resizeMode="cover" source={image} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    overflow: 'hidden',
    borderRadius: 50,
    margin: 10,
  },
});
export default ProfileImage;
