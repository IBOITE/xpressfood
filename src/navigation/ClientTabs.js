import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import SearchScreen from "../screens/SearchScreen";
import MyOrdersScreen from "../screens/MyordersScreen";
import MyAccountScreen from "../screens/MyAccount Screen";
import { ClientStack } from "./clientStack";


const ClinetTabs=createBottomTabNavigator()


export default function RootClientTabs(){
    return(
        <ClinetTabs.Navigator  >
            <ClinetTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:colors.orangeC,
                    tabBarLabel:"Home",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="home"
                            type="material"
                            color={color}
                            size={size}
                            
                        />
                    )
                }}
            />

            <ClinetTabs.Screen
                name="SearchScreen"
                component={ClientStack}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:colors.orangeC,
                    tabBarLabel:"Search",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="search"
                            type="material"
                            color={color}
                            size={size}
                            
                        />
                    )
                }}
            />

            <ClinetTabs.Screen
                name="MyOrderScreen"
                component={MyOrdersScreen}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:colors.orangeC,
                    tabBarLabel:"My Orders",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="view-list"
                            type="material"
                            color={color}
                            size={size}
                            
                        />
                    )
                }}
            />
            <ClinetTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{
                    headerShown:false,
                    tabBarActiveTintColor:colors.orangeC,
                    tabBarLabel:"My Account",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="person"
                            type="material"
                            color={color}
                            size={size}
                            
                        />
                    )
                }}
            />
        </ClinetTabs.Navigator>
    )
}