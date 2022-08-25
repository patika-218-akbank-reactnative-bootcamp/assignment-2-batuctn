import {View, Text} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import ProfileImage from '../components/ProfileImage';

const Chats = () => {
  return (
    <View>
      <Header />

      <ChatList />
    </View>
  );
};

export default Chats;
