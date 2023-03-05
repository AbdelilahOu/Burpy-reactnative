import {
  Canvas,
  Group,
  Image,
  rect,
  rrect,
  Skia,
  useImage,
} from '@shopify/react-native-skia';
import {Pressable, Text, useWindowDimensions, View} from 'react-native';

export const HomeScreen = () => {
  const homeImage = useImage(require('../assets/home.jpg'));
  const {width, height} = useWindowDimensions();
  const roundedRect = rrect(
    rect(10, 20, width - 10 * 2, height - 10 * 2),
    10,
    10,
  );
  // const roundedRect = Skia.Path.MakeFromSVGString(
  //   'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z',
  // )!;
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          width: '100%',
          height: '70%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        <Canvas
          style={{
            width: width,
            height: height * 0.75 - 10,
          }}>
          <Group clip={roundedRect}>
            {homeImage && (
              <Image
                image={homeImage}
                x={0}
                y={0}
                width={width}
                height={height}
                fit="cover"
              />
            )}
          </Group>
        </Canvas>
      </View>
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
