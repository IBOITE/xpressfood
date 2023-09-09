import React from 'react'
import {createNativeStackNavigator,} from '@react-navigation/native-stack'
import RestaurantsMapScreen from '../screens/RestaurantsMapScreen';
import DrawerNavigator from './DrawerNavigator';


const App=createNativeStackNavigator();

export function AppStack(){
    return(
        <App.Navigator>
            <App.Screen
                name='DrawerNavigator'
                component={DrawerNavigator} 
                options={{
                    headerShown:false,
                }}
            />
            <App.Screen
                name='RestaurantsMapScreen'
                component={RestaurantsMapScreen} 
                options={{
                    headerShown:false,
                }}
            />
        </App.Navigator>
    )
}