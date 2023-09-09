import React,{useState,useEffect} from "react";
import { ImageBackground, Text,View,StyleSheet,Animated } from "react-native";
import { colors } from "../global/styles";
import { restaurantsData } from "../global/Data";
import { Icon } from "react-native-elements";




    
 

export default function RestaurantHeader({navigation,id}){

    const [liked,setLiked]=useState(false)
    const [counter,setCounter]=useState(-2)
    const [visible,setVisible]=useState(false)
    const index2=10
    const currentValue=new Animated.Value(1)


    const likeHander=()=>{
        if(liked==false)
            setVisible(true)

        setLiked(!liked)
        setCounter(index2)
    }

    useEffect(()=>{
        if(liked==true){
            Animated.spring(currentValue,{
                toValue:3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue,{
                    toValue:1,
                    friction:2,
                    useNativeDriver:true
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[liked])



    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={{uri:restaurantsData[id].images}}
                imageStyle={styles.image}
            >

                <View style={styles.view1}>
                    <View  style={styles.view2}> 
                        <Icon
                            name="arrow-left"
                            type="material-community"
                            color={'black'}
                            size={25}
                            onPress={()=>navigation.goBack()}
                        />
                    </View>

                    <View  style={styles.view3}> 
                        <Icon
                            name={liked &&(index2==counter)? 'favorite':'favorite-border'}
                            type="material"
                            color={'red'}
                            size={30}
                            onPress={likeHander}
                        />
                    </View>
                </View>

                <View style={styles.view4}>
                    {
                        visible&&(index2==counter)&&
                        <Animated.View style={{transform:[{scale:currentValue}]}}>
                            <Icon  name="favorite"  size={40}  color={'red'} type="material"/>
                        </Animated.View>
                    }
                </View>

            </ImageBackground>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        height:150
    },
    image:{
    },
    view1:{
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:"space-between"
    },
    view2:{
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.whiteC,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view3:{
        
        marginTop:0,
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.whiteC,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view4:{
        alignItems:'center',
        justifyContent:'center',
        
    }
})