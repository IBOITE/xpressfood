import React from "react";
import { View,Text, FlatList,TouchableWithoutFeedback,ImageBackground, StyleSheet, Dimensions} from "react-native";
import SearchComponent from "../component/SearchComponent";
import { filterData2 } from "../global/Data";
import { colors } from "../global/styles";



const SCREEN_WIDITH=Dimensions.get('window').width

export default function SearchScreen({navigation}){
    return(
        <View style={{marginBottom:10,flex:1}}>
            <SearchComponent/>

            <View style={{marginTop:10}}>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={{marginBottom:10}}
                    data={filterData2}
                    keyExtractor={item=>item.id}
                    ListHeaderComponent={<Text style={styles.listHeaer}>Top Categories </Text>}
                    ListFooterComponent={<Footer/>}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback
                            onPress={()=>{
                                navigation.navigate("SearchResultScreen",{item:item.name})
                            }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground  style={styles.image}  source={{uri:item.image}}>
                                    <View style={styles.textView}>
                                        <Text style={{color:colors.whiteC}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                />
            </View>
        </View>
    )
}



const Footer=()=>{
    return(
        <View style={{marginTop:10}}>
            <View style={{marginBottom:20}}>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    style={{marginBottom:10}}
                    data={filterData2}
                    keyExtractor={item=>item.id}
                    ListHeaderComponent={<Text style={styles.listHeaer}>More Categories</Text>}
                    renderItem={({item})=>(
                        <TouchableWithoutFeedback 
                            onPress={()=>{
                                navigation.navigate("SearchResultScreen",{item:item.name})
                            }}
                        >
                            <View style={styles.imageView}>
                                <ImageBackground  style={styles.image}  source={{uri:item.image}}>
                                    <View style={styles.textView}>
                                        <Text style={{color:colors.whiteC}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                        )}
                />
            </View>
        </View>
    )
}



const styles=StyleSheet.create({
    image:{
        height:SCREEN_WIDITH*0.4475,
        width:SCREEN_WIDITH*0.4475,
        borderRadius:10
    },
    listHeaer:{
        fontSize:16,
        color:colors.grey2,
        paddingBottom:10,
        marginLeft:12
    },
    textView:{
        height:SCREEN_WIDITH*0.4475,
        width:SCREEN_WIDITH*0.4475,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(52,52,52,0.3)'
    },
    imageView:{
        height:SCREEN_WIDITH*0.4475,
        width:SCREEN_WIDITH*0.4475,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:SCREEN_WIDITH*0.035,
        marginBottom:SCREEN_WIDITH*0.035
    },
})