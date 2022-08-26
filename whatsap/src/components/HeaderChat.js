import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Octicons';
import ProfileImage from '../components/ProfileImage';
import {useNavigation} from '@react-navigation/native';
const HeaderChat = ({firstName, lastName, image}) => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.contain}>
      <Icon
        onPress={() => {
          goBack('Chats');
        }}
        name="chevron-back"
        size={29}
        color="#007AFF"
        style={styles.padding5}
      />
      <ProfileImage height={40} width={40} image={image} />
      <Text style={styles.headerText}>{`${firstName} ${lastName}`}</Text>
      <View style={styles.headerRightİconView}>
        <Icons
          name="device-camera-video"
          size={26}
          color="#007AFF"
          style={styles.marginRight15}
        />
        <Icon name="call-outline" size={26} color="#007AFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    height: '10%',
  },
  padding5: {
    padding: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginLeft: 5,
  },
  headerRightİconView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    margin: 10,
  },
  marginRight15: {
    marginRight: 15,
  },
});
export default HeaderChat;
