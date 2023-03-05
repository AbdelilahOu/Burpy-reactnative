import {Pressable, Text, View} from 'react-native';

export const HomeScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
      }}>
      <View style={{width: '100%', height: '70%'}}></View>
      <View style={{width: '100%', height: '20%'}}></View>
      <View
        style={{
          width: '100%',
          height: '10%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <Pressable
          style={{
            width: '100%',
            height: 60,
            borderRadius: 10,
            backgroundColor: '#00BBF0',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '500',
            }}>
            Get started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
