import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderChat from '../components/HeaderChat';
import FooterChat from '../components/FooterChat';

const ChatItems = ({route, navigation}) => {
  const {firstName, lastName, messages, datetime} = route.params;
  const [answer, setAnswer] = useState(null);
  return (
    <View style={styles.contain}>
      <HeaderChat firstName={firstName} lastName={lastName} />
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover">
        <View style={styles.backgroundview}>
          <View style={styles.responseWiew}>
            <Text style={styles.responseMessage}>{messages}</Text>
            <View style={styles.datetime}>
              <Text>{datetime}</Text>
            </View>
          </View>
          {answer ? (
            <View style={styles.answerWiew}>
              <Text style={styles.responseMessage}>{answer}</Text>
            </View>
          ) : null}
        </View>
      </ImageBackground>
      <FooterChat value={answer} />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    height: '100%',
  },
  backgroundview: {
    height: '82%',
  },
  responseWiew: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  responseMessage: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 4,
    fontSize: 16,
  },
  answerWiew: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  datetime: {
    marginLeft: 15,
    top: 8,
  },
});
export default ChatItems;
