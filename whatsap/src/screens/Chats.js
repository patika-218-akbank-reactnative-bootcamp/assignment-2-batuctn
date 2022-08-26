import React from 'react';
import Header from '../components/Header';
import ChatList from '../components/ChatList';
import {ScrollView} from 'react-native';

const Chats = () => {
  return (
    <ScrollView>
      <Header />
      <ChatList />
    </ScrollView>
  );
};

export default Chats;
