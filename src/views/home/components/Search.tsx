import {SetStateAction, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import SreachICon from '../../../assets/serach';
import { TextInput } from '../../../common/components/textinput/TextInput';

const useStyle = StyleSheet.create({
  container : {
    flexDirection: 'row'
  },  
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    padding: 10,
  },
  buttonSearch: {
    width: 50,
    justifyContent: 'center',
    alignItems : 'center',
    borderWidth: 1,
    borderStartColor: 'transparent',
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
