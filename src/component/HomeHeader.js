import React from "react";
import { View,Text, StyleSheet, Image} from "react-native";
import { colors, parameters } from "../global/styles";
import { Icon, withBadge } from "react-native-elements";

export default function HomeHeader({navigation}){
    
    const BadgeIcon=withBadge(0)(Icon)

    return(
        <View style={styles.header}>
            <View style={{alignItems:"center",justifyContent:"center",marginLeft:15}}>
                <Icon
                    type="material-community"
                    name="menu"
                    color={colors.whiteC}
                    size={32}
                    onPress={()=>{
                        navigation.toggleDrawer()
                    }}
                />
            </View>
            <View style={{alignItems:'center',justifyContent:"center"}}>
                <Text style={{color:colors.whiteC,fontSize:25,fontWeight:'bold'}}>XpressFood</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:"center",marginRight:15}}>
                <BadgeIcon
                    type="material-community"
                    name="cart"
                    size={35}
                    color={colors.whiteC}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:colors.orangeC,
        height:parameters.headerHeight,
        justifyContent:'space-between'
    }
})