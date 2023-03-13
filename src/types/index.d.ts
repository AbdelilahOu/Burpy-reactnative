import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type StackParams = {
  Home: undefined;
  Pets: undefined;
  Setters: undefined;
};

type Props<T> = NativeStackScreenProps<StackParams, T>;
