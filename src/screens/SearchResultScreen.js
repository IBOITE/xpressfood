import React from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import SearchResultCard from '../component/SearchResultCard'
import { restaurantsData } from '../global/Data'
import { colors } from '../global/styles'


const SCREEN_WIDITH=Dimensions.get('window').width

export default  SearchResultScreen=({navigation,route})=> {

    return (
      <View style={styles.container}>

        

        <View>
          <FlatList
            ListHeaderComponent={
              <View>
                <Text style={styles.listHeader}>{restaurantsData.length} Result for {route.params.item} </Text>
              </View>
            }

            showsVerticalScrollIndicator={false}
            style={{backgroundColor:colors.whiteC}}
            data={restaurantsData}
            keyExtractor={item=>item.id}
            renderItem={({item,index})=>(
              <SearchResultCard
                images={item.images}
                averageReview={item.averageReview}
                numberOFReview={item.numberOfReview}
                screenWidth={SCREEN_WIDITH}
                restauantName={item.restaurantName}
                farAway={item.farAway}
                businessAddress={item.businessAddress}
                productData={item.productData}
                OnPressRestaurantCard={()=>{navigation.navigate('ResturantHomeScreen',{id:index,resturant:item.restaurantName})}}
              />
            )}
          />
        </View>
        
        
      </View>
    )

}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    listHeader:{
      color:colors.grey1,
      fontSize:20,
      paddingHorizontal:10,
      paddingVertical:10,
      fontWeight:'bold'
    }
})
