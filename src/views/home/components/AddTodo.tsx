import { Pressable, StyleSheet, View, Text } from "react-native"
import { TextInput } from "../../../common/components/textinput/TextInput"
import React, { SetStateAction, useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../../redux/actions";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

 const AddTodo : React.FC = () =>{
    const dispatch = useDispatch();
    const id = uuidv4();    ;
    const [value, setValue] = useState('');
    const handleOnChange = (text: SetStateAction<string>) => {
        setValue(text);
    };
    const handleOnPressSearch = () =>{
        dispatch(
            addTodoAction(
            {
                id: id,
                name: value,
                status : false,
            }
        ))
        setValue('')
        
    }
    return (
        <View style={useStyle.container}>
      <TextInput style={useStyle.input} value={value} onChangeText={handleOnChange}/>
      <Pressable
        onPress={handleOnPressSearch}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'dodgerblue' : 'deepskyblue',
          },
        useStyle.buttonSearch]}>
        <Text style={useStyle.text}>
            Add
        </Text>
      </Pressable>
    </View>
    )
}
export default AddTodo



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
      justifyContent: 'center',
      alignItems : 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderStartColor: 'transparent',
      borderTopEndRadius : 8,
      borderBottomEndRadius : 8,
      borderStartWidth : 0,
    },
    text : {
        paddingHorizontal: 15,
        color : 'white',
        fontWeight : '600',
        fontSize : 16,
    }
  });