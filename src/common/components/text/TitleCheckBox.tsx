import { memo } from "react";
import { StyleSheet, Text } from "react-native";

type TitleCheckBoxProp = {
    title : String,
}
const useStyle = StyleSheet.create({
    text : {
        color : 'black',
        fontSize : 16, 
        marginStart : 4
    }
})


const TitleCheckBox  = (prop : TitleCheckBoxProp) =>{
    const {title} = prop;
    return (
        <Text style={useStyle.text}>
            {title}
        </Text>
    )
}
export default memo(TitleCheckBox)