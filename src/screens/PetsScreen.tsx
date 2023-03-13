import {StyleSheet, useWindowDimensions, View} from 'react-native';
import {Categories} from '../components/Categories';
import {Props} from '../types';

export const Pets = ({navigation}: Props<'Pets'>) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={style.Main}>
      <View style={style.Header}>
        <View style={style.Menu}>{/* mENU / PROFILE */}</View>
        <View style={style.Search}>{/* Search */}</View>
      </View>
      <Categories />
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  Main: {
    height: '100%',
    width: '100%',
    padding: 10,
  },
  Header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  Menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Search: {},
});
