import React from "react";
import { View,Text, StyleSheet, Image} from "react-native";
import { colors } from "../global/styles";

 const ProductCard=({productName,price,image})=>{

    return(
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text style={styles.text1}>{productName}</Text>
                    <Text style={styles.text1}>ZAR{price}</Text>
                </View>
                <View style={styles.view4}>
                    <Image style={styles.Image} source={{uri: image}}/>
                </View>
            </View>
        </View>
    )


 }


 export default ProductCard


 const styles=StyleSheet.create({
    view2: {
        flexDirection:'row',
        padding:0,
        justifyContent:'space-between'
    },
    view3:{
        justifyContent:'space-between',
        width:110
    },
    text1:{
        fontSize:15,
        color:colors.grey1
    },
    view4:{
        width:75,
        height:65
    },
    Image:{
        height:65,
        width:75
    },
    view1:{
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        margin:5,
        width:210,
        padding:10
    }
 })