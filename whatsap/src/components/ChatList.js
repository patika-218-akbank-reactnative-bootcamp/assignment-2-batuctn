import {View, Text, FlatList} from 'react-native';
import React from 'react';
import chatData from '../services/api';
import ProfileImage from './ProfileImage';

const ChatList = () => {
  const renderUser = ({item, index}) => (
    <View style={{flexDirection: 'row'}}>
      <View>
        <ProfileImage />
      </View>
      <View style={{width: '80%', borderBottomWidth: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              fontWeight: '500',
              color: 'black',
              padding: 3,
            }}>
            {`${item.receiver.firstName} ${item.receiver.lastName}`}
          </Text>
          <Text style={{padding: 3}}>{item.messages[0].datetime}</Text>
        </View>
        <Text style={{marginLeft: 5, padding: 2}}>{item.messages[0].text}</Text>
      </View>
    </View>
  );
  return <FlatList data={chatData} renderItem={renderUser} />;
};

export default ChatList;
