import React,{useContext} from "react";
import {NavigationContainer}from '@react-navigation/native'
import { AppStack } from "./appStack";
import { SignInContext } from "../contexts/authContext";
import { AuthStack } from "./authNavigators";




export default function RootNavigator(){

    const{singedIn}=useContext(SignInContext)

    return(
        <NavigationContainer>
            {
                singedIn.userToken ===null?(<AuthStack/>):(<AppStack/>)
            }
        </NavigationContainer>
    )
}