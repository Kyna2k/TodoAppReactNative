import { Text, View,StyleSheet,TextInput,SafeAreaView } from "react-native";
import { Container } from "../../common/components/container/Container";
import { Search } from "./components/Search";
import { useState } from "react";




const HomeScreen : React.FC = () =>{
    return (
        <Container>
           <Search/>
        </Container>
    )
}
export default HomeScreen;