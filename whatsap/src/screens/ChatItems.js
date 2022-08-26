import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import HeaderChat from '../components/HeaderChat';
import FooterChat from '../components/FooterChat';

const ChatItems = ({route, navigation}) => {
  const {firstName, lastName, receivedMessages, datetime, image} = route.params;
  const [answer, setAnswer] = useState(null);
  const [message, setMessage] = useState([]);
  const handleClick = () => {
    setMessage([...message, answer]);
    setAnswer(null);
  };
  let tarih = new Date();
  var saat = tarih.getHours() + 3;
  var dakika = tarih.getMinutes();
  return (
    <View style={styles.contain}>
      <HeaderChat firstName={firstName} lastName={lastName} image={image} />
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover">
        <View style={styles.backgroundview}>
          <View style={styles.responseWiew}>
            <Text style={styles.responseMessage}>{receivedMessages}</Text>
            <View style={styles.datetime}>
              <Text>{datetime}</Text>
            </View>
          </View>
          {message.map((item, index) => {
            return (
              <View key={index} style={styles.answerWiew}>
                <Text style={styles.responseMessage}>{item}</Text>
                <View style={styles.datetime}>
                  <Text>{`${saat}:${dakika}`}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ImageBackground>
      <FooterChat
        value={answer}
        onChange={newText => setAnswer(newText)}
        onPressSendClick={handleClick}
      />
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
