import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SingInWelcomeScreen from '../screens/authScreens/SingInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';
import {NavigationContainer}from '@react-navigation/native'
import RootClientTabs from './ClientTabs';
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../screens/authScreens/SignUpScreen';




const Stack=createNativeStackNavigator();

export function AuthStack(){
    return(
        
            <Stack.Navigator>
                <Stack.Screen
                    name='SignInWelcomeScreen'
                    component={SingInWelcomeScreen}
                    options={{
                        headerShown:false,
                    }}
                />
                <Stack.Screen
                    name='SignInScreen'
                    component={SignInScreen} 
                    options={{
                        headerShown:false,
                    }}
                />

                <Stack.Screen
                    name='SignUpScreen'
                    component={SignUpScreen} 
                    options={{
                        headerShown:false,
                    }}
                />

                
            </Stack.Navigator>
        
    )
}