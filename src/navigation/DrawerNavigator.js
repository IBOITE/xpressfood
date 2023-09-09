import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../component/DrawerContent";

const Drawer=createDrawerNavigator()


export default function DrawerNavigator(){
    return(
        <Drawer.Navigator drawerContent={props=> <DrawerContent {...props}/>}>
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}

                options={{
                    title:"Client",
                    headerShown:false,
                    drawerIcon:({focuseed,size})=>(
                        <Icon
                            type="material-community"
                            name="home"
                            color={focuseed?'#7cc':colors.grey2}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}

                options={{
                    title:"Business console",
                    headerShown:false,
                    drawerIcon:({focuseed,size})=>(
                        <Icon
                            type="material"
                            name="business"
                            color={focuseed?'#7cc':colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}