import React from 'react'
import { FlatList, ImageBackground, StyleSheet, Text,View,TouchableOpacity } from 'react-native'
import { colors } from '../global/styles'
import { Icon } from 'react-native-elements'
import ProductCard from './ProductCard'
import { productData } from '../global/Data'

const SearchResultCard=({
    OnPressRestaurantCard,
    restauantName,
    deliveryAbvailabe,
    discountAcailable,
    numberOFReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    productData
})=>{


    return(
        <View>
            <TouchableOpacity onPress={OnPressRestaurantCard}>
                <View style={styles.view1}>
                    <View style={{height:150}}>
                        <ImageBackground
                            style={{height:160}}
                            source={{uri:images}}
                            imageStyle={styles.imageStyle}
                        />
                        <View style={styles.image}>
                            <Text style={styles.text1}>{averageReview}</Text>
                            <Text style={styles.text2}>{numberOFReview}</Text>
                        </View>
                    </View>

                    <View style={styles.view3}>
                        <View style={{paddingTop:5}}>
                            <Text style={styles.text5}>{restauantName}</Text>
                        </View>

                        <View style={{flexDirection:"row"}}>
                            <View style={styles.view4}>
                                <Icon
                                    name='place'
                                    type='material'
                                    color={colors.cardComment}
                                    size={18}
                                    iconStyle={{marginTop:3,marginLeft:-3}}
                                />

                                <Text style={styles.view5}>{farAway} Min</Text>
                            </View>

                            <View style={{flex:9,}}>
                                <Text style={styles.text6}>{businessAddress}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </TouchableOpacity>

            <View style={{marginTop:5,paddingBottom:20}}>

                <FlatList
                    horizontal={true}
                    style={{backgroundColor:colors.whiteC}}
                    data={productData}
                    keyExtractor={({item,index})=>index}
                    renderItem={({item,index})=>(
                        <ProductCard
                            image={item.image}
                            productName={item.name}
                            price={item.price}
                        /> 
                    )}
                />
                

            </View>
        </View>
    )
}

export default SearchResultCard


const styles=StyleSheet.create({
    view1:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    image:{
        position:'absolute',
        top:0,
        right:0,
        backgroundColor:'rgba(52,52,52,0.4)',
        padding:2,
        alignItems:'center',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    imageStyle:{
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    text1:{
        color:'white',
        fontSize:20,
        fontWeight:"bold",
        marginTop:-3
    },
    text2:{
        color:'white',
        fontSize:13,
    },
    text3:{
        fontSize:10,
        fontWeight:"bold",
        color:colors.grey2
    },
    text4:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey2
    },
    view2:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:-5
    },
    view3:{
        flexDirection:'column',
        marginHorizontal:5,
        marginBottom:10,
        marginTop:5

    },
    text5:{
        fontSize:17,
        fontWeight:"bold",
        color:colors.grey1
    },
    view4:{
        flex:4,
        flexDirection:'row',
        borderRightWidth:1,
        marginHorizontal:5,
        borderRightColor:colors.grey4
    },
    view5:{
        fontSize:12,
        fontWeight:"bold",
        color:colors.grey3,
        paddingTop:5
    },
    text6:{
        fontSize:12,
        paddingHorizontal:10,
        color:colors.grey2,
        paddingTop:5
    },
})