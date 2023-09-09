import { useState } from "react"
import { TextInputType } from "./type"



export const TextInput : React.FC = ({...rest} : TextInputType) =>{
    const [forcus, setforcus] = useState(false)
    const _onForcus = () =>{
        setforcus(true);
    }
    const _onBlur = () =>{
        setforcus(false)
    }
    return (
        <TextInput
        style = {[{
            with : 100,
            height : 50,
            borderWidth : forcus ? 2 : 1,
            padding : 10
        }]}
        onBlur={_onBlur}
        onFocus={_onForcus}
        {...rest}
        />
    )
}