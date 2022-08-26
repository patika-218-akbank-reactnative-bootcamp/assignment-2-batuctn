import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FooterChat = ({onChange, value, onPressSendClick}) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <View style={styles.contain}>
      <Icon
        style={styles.marginleft5}
        name="ios-add"
        size={35}
        color="#007AFF"
      />
      <View style={styles.textInputView}>
        <TextInput
          value={value}
          style={styles.textInput}
          onChangeText={onChange}
          onFocus={() => {
            setIsActive(false);
          }}
        />
      </View>
      {isActive === true ? (
        <View style={styles.leftIconView}>
          <Icon
            style={styles.margin3}
            name="ios-camera-outline"
            size={30}
            color="#007AFF"
          />
          <Icon
            style={styles.margin3}
            name="ios-mic-outline"
            size={30}
            color="#007AFF"
          />
        </View>
      ) : (
        <View style={styles.leftIconView}>
          <Icon
            style={styles.margin3}
            name="ios-send"
            size={30}
            color="#007AFF"
            onPress={onPressSendClick}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.19,
    height: '8%',
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 8,
  },
  textInput: {
    minWidth: '68%',
    height: 35,
  },
  margin3: {
    margin: 3,
  },
  leftIconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  marginleft5: {
    marginLeft: 5,
  },
});

export default FooterChat;
