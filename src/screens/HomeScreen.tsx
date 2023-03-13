import {
  Canvas,
  Group,
  Image,
  rect,
  rrect,
  useImage,
} from '@shopify/react-native-skia';
import {Pressable, Text, useWindowDimensions, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Props} from '../types';

export const Home = ({navigation}: Props<'Home'>) => {
  const homeImage = useImage(require('../assets/home.jpg'));
  const {width, height} = useWindowDimensions();
  const roundedRect = rrect(rect(0, 0, width - 20, height * 0.75 - 20), 10, 10);

  return (
    <View style={{...homeStyle.Main, height, width}}>
      <View style={{...homeStyle.Image, width}}>
        <Canvas style={{width: width - 20, height: height * 0.75 - 20}}>
          <Group clip={roundedRect}>
            {homeImage && (
              <Image
                image={homeImage}
                x={0}
                y={0}
                width={width - 20}
                height={height * 0.75 - 20}
                fit="cover"
              />
            )}
          </Group>
        </Canvas>
      </View>
      <View style={homeStyle.Content}>
        <Text style={homeStyle.Title}>Let's Find A Lovely Pet Or A Friend</Text>
        <Text>
          now it's easier than vever to find a friend or a new replacement for
          the family
        </Text>
      </View>
      <View style={homeStyle.ButtonParent}>
        <Pressable
          onPress={() => navigation.push('Pets')}
          style={homeStyle.Button}>
          <Text style={homeStyle.ButtonText}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const homeStyle = StyleSheet.create({
  Main: {
    backgroundColor: '#fff',
  },
  Image: {
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    // backgroundColor: '#000',
    padding: 10,
    width: '100%',
    height: '15%',
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  },
  Title: {
    fontWeight: '500',
    fontSize: 25,
    color: '#000',
    width: '100%',
  },
  ButtonParent: {
    width: '100%',
    height: '10%',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  Button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00BBF0',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
});
