import {SetStateAction, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import SreachICon from '../../../assets/icons/serach';
import { TextInput } from '../../../common/components/textinput/TextInput';
import { Color } from '../../../common/themes/colors';

const useStyle = StyleSheet.create({
  container : {
    flexDirection: 'row'
  },  
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius : 8,
    borderBottomLeftRadius : 8,
  },
  buttonSearch: {
    width: 40,
    justifyContent: 'center',
    alignItems : 'center',
    borderWidth: 1,
    borderColor: Color.fadeColor,
    borderStartColor: 'transparent',
    borderTopEndRadius : 8,
    borderBottomEndRadius : 8,
    borderStartWidth : 0,
  }
});

export const Search: React.FC = () => {
  const [keySearch, setKeySearch] = useState('hello');

  const handleOnChange = (text: SetStateAction<string>) => {
    setKeySearch(text);
  };
  const handleOnPressSearch = () =>{
    setKeySearch("hello");

    console.log("hello");
    
  }
  return (
    <View style={useStyle.container}>
      <TextInput style={useStyle.input} onChangeText={handleOnChange}/>
      <Pressable
        onPress={handleOnPressSearch}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
        useStyle.buttonSearch]}>
        <SreachICon/>
      </Pressable>
    </View>
  );
};
