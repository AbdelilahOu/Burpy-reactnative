import {
  Canvas,
  Group,
  Image,
  rect,
  rrect,
  Skia,
  useImage,
} from '@shopify/react-native-skia';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

export const HomeScreen = () => {
  const homeImage = useImage(require('../assets/home.jpg'));
  const {width, height} = useWindowDimensions();
  const roundedRect = rrect(rect(0, 0, width - 20, height * 0.75 - 20), 10, 10);

  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          width: width,
          height: '75%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Canvas
          style={{
            width: width - 20,
            height: height * 0.75 - 20,
          }}>
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
      <View style={{width: '100%', height: '15%'}}></View>
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
            height: 55,
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
