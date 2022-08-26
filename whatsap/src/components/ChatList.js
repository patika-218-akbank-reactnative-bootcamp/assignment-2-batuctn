import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import chatData from '../services/api';
import ProfileImage from './ProfileImage';
import {useNavigation} from '@react-navigation/native';

const ChatList = () => {
  const {navigate} = useNavigation();
  const renderUser = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        navigate('ChatItems', {
          firstName: item.receiver.firstName,
          lastName: item.receiver.lastName,
          receivedMessages: item.messages[0].text,
          datetime: item.messages[0].datetime,
          image: item.receiver.image,
        });
      }}>
      <ScrollView nestedScrollEnabled>
        <View style={styles.contain}>
          <View>
            <ProfileImage image={item.receiver.image} height={60} width={60} />
          </View>
          <View style={styles.chatScreen}>
            <View style={styles.fullNameTextView}>
              <Text style={styles.fullNameText}>
                {`${item.receiver.firstName} ${item.receiver.lastName}`}
              </Text>
              <Text style={styles.padding3}>{item.messages[0].datetime}</Text>
            </View>
            <Text style={styles.messages}>{item.messages[0].text}</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
  return <FlatList data={chatData} renderItem={renderUser} />;
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
  },
  chatScreen: {
    width: '80%',
    borderBottomWidth: 0.5,
  },
  fullNameTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  fullNameText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    padding: 3,
  },
  padding3: {
    padding: 3,
  },
  messages: {
    marginLeft: 5,
    padding: 2,
  },
});

export default ChatList;
