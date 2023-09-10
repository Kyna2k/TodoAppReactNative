import { useState } from "react"
import {TextInput as ReactTextInput, StyleSheet} from 'react-native';

import { TextInputType } from "./type"


export const TextInput = (props : TextInputType) =>{
    const {style,...rest} = props;
    const [focus, setFocus] = useState(false)
    const _onForcus = () =>{
        setFocus(true);
    }
    const _onBlur = () =>{
        setFocus(false)
    }
    return (
        <ReactTextInput
        style = {[{
            borderColor: focus ? 'blue' : 'black',
            borderWidth : 1,
        },style]}
        onBlur={_onBlur}
        onFocus={_onForcus}
        {...rest}
        />
    )
}