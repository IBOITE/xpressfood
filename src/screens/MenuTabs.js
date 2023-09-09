import React from "react";
import {  Text, View, StyleSheet, TouchableOpacity,  } from "react-native";
import MenuCard from "../component/MenuCard";
import { FlatList } from "react-native-gesture-handler";
import { menuDetailedData } from "../global/Data";


export function Route1({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.view2}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={{backgroundColor:'white'}}
                    data={menuDetailedData}
                    keyExtractor={(item,index)=>index}
                    renderItem={({item,index})=>(
                        <TouchableOpacity onPress={()=>{navigation.navigate('PreferenceScreen',{id:item.id})}}> 
                            <MenuCard
                                productName={item.meal}
                                image={item.image}
                                price={item.price}
                                productDetails={item.details}

                            />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}


export const Route2=()=>(<View style={styles.scene}/>)
export const Route3=()=>(<View style={styles.scene}/>)
export const Route4=()=>(<View style={{...styles.scene,backgroundColor:'green'}}/>)
export const Route5=()=>(<View style={styles.scene}/>)
export const Route6=()=>(<View style={styles.scene}/>)
export const Route7=()=>(<View style={styles.scene}/>)
export const Route8=()=>(<View style={styles.scene}/>)



const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7'
    },
    view2: {
        marginTop: 5,
        paddingBottom: 20
    },
    scene2: {
        backgroundColor: '#673ab7'
    }
})