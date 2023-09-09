import React from "react";
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../global/styles";


export default function MenuCard({productName,price,image,productDetails}){
    return(
        <View style={styles.view1}>
         <View style={styles.view2}>
            <View style={styles.view3} >
               <Text style={styles.text1}>{productName}</Text>
               <View >
                  <Text style={styles.text2}>{productDetails}</Text>
               </View>
               <Text style={styles.text3}>ZAR {price}</Text>
               
            </View>
            <View style={{flex:2}}>
               <Image style={styles.image} source={{uri:image}}/>
            </View>
         </View>
        </View>
    )
}

const styles=StyleSheet.create({
     view1:{
        backgroundColor:'white',
        shadowOpacity:0.4,
        shadowColor:'black',
        margin:5,
        padding:10
     },
     view2:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
     },
     view3:{
        flex:6,
        justifyContent:"space-between"
     },
     text2:{
        fontSize:15,
        color:colors.grey3,
        marginRight:2
     },
     text3:{
        fontSize:15,
        color:colors.black
     },
     text1:{
        fontSize:15,
        color:colors.grey1,
        fontWeight:'bold'
     },
     image:{
        flex:1
     }
})