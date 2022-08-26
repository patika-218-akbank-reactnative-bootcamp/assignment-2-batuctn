import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.headerText}>Düzenle</Text>
        </TouchableOpacity>
        <Icon name="edit" size={23} color="#007AFF" />
      </View>
      <View>
        <Text style={styles.chats}>Sohbetler</Text>
        <TextInput
          placeholder="Ara"
          placeholderTextColor="#a9a9a9"
          style={styles.search}>
          <Icon name="search" size={21} color="#a9a9a9" />
        </TextInput>
        <View style={styles.actionTextStyles}>
          <Text style={styles.headerText}>Toplu Mesaj Listeleri</Text>
          <Text style={styles.headerText}>Yeni Grup</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginTop: 15,
  },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#007AFF',
    fontWeight: '350',
    margin: 1,
  },
  chats: {
    fontSize: 30,
    color: 'black',
    fontWeight: '600',
    marginLeft: 10,
    margin: 2,
    padding: 2,
  },
  search: {
    backgroundColor: '#dddddd',
    margin: 12,
    padding: 5,
    borderRadius: 10,
  },
  actionTextStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    borderBottomWidth: 0.3,
  },
});

export default Header;
