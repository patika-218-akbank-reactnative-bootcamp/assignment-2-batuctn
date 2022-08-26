import {View, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ChatList from '../components/ChatList';

const Chats = () => {
  return (
    <View contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
      <Header />
      <ChatList />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    display: 'flex',
  },
});
export default Chats;
