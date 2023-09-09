import React,{useLayoutEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'
import ResturantHomeScreen from '../screens/ResturantHomeScreen'
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'
import MenuProductScreen from '../screens/MenuProductScreen'
import PreferenceScreen from '../screens/PreferenceScreen'

const ClientSearch=createNativeStackNavigator()


export function  ClientStack({navigation,route}){


    useLayoutEffect(()=>{

        const routeName=getFocusedRouteNameFromRoute(route)
        if(routeName==='ResturantHomeScreen'||'MenuProductScreen'){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
    },[navigation,route])
    

    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name='SearchScreenn'
                component={SearchScreen}
                options={{
                    headerShown:false
                    
                }}

            />

            <ClientSearch.Screen
                name='SearchResultScreen'
                component={SearchResultScreen}
                options={{
                    headerShown:false
                }}
            />

            <ClientSearch.Screen
                name='ResturantHomeScreen'
                component={ResturantHomeScreen}
                options={{
                    headerShown:false
                    
                }}
            />

            <ClientSearch.Screen
                name='MenuProductScreen'
                component={MenuProductScreen}
                options={{
                    headerShown:false
                    
                }}
            />

            <ClientSearch.Screen
                name='PreferenceScreen'
                component={PreferenceScreen}
                options={{
                    headerShown:false
                    
                }}
            />
        </ClientSearch.Navigator>
    )

}
