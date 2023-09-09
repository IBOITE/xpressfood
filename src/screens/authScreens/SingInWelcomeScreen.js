import React,{useEffect,useContext} from "react";
import { View,Text, StyleSheet, Image} from "react-native";
import { colors,parameters} from "../../global/styles";
import Swiper from "react-native-swiper";
import { Button } from "react-native-elements";
import { SignInContext } from "../../contexts/authContext";
import auth from '@react-native-firebase/auth'





export default function SingInWelcomeScreen({navigation}){

    const{dispatchSingedIn}=useContext(SignInContext)

    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
            if(user){
                dispatchSingedIn({type:'UPDATE_SIGN_IN',payload:{userToken:'signed-in'}})
            }else{
                dispatchSingedIn({type:'UPDATE_SIGN_IN',payload:{userToken:null}})
            }
        })
        
    },[])


    return(
        <View style={{flex:1}}>
            <View  style={{flex:3,justifyContent:"flex-start",alignItems:"center",paddingTop:20 }  }>
                <Text style={{fontSize:26,color:colors.orangeC,fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
                <Text  style={{fontSize:26,color:colors.orangeC,fontWeight:'bold'}}>IN YOUR AREA</Text>
            </View>
            <View style={{flex:4,justifyContent:"center"}}> 
                <Swiper autoplay={true}>
                    <View style={styles.slide1}> 
                        <Image
                            source={{uri:"https://thumbs.dreamstime.com/z/donner-meat-chips-28663380.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide2}> 
                        <Image
                            source={{uri:"https://www.northcoastwetsuits.co.uk/wp-content/uploads/2020/07/donner-kebab-1400x788.jpg"}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}> 
                        <Image
                            source={{uri:"https://media.istockphoto.com/id/1040971902/tr/foto%C4%9Fraf/t%C3%BCrk-geleneksel-haddelenmi%C5%9F-et-donner-beyaz-izole.jpg?s=1024x1024&w=is&k=20&c=exZY5xll5cB7QGZHn72YQ9nMCPFNDz5MJxwCS8prSug="}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                    <View style={styles.slide3}> 
                        <Image
                            source={{uri:"https://media.istockphoto.com/id/1351968565/tr/foto%C4%9Fraf/homemade-lavash-shawarma-with-vegetables-chicken-studio-photo.jpg?s=1024x1024&w=is&k=20&c=KQTWwEogzSNYBDvSkXJXZaZXgPRTu8Q2ithvHNzHaIo="}}
                            style={{height:"100%",width:"100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex:4,justifyContent:"flex-end",marginBottom:20}}>
                <View  style={{marginHorizontal:20,marginTop:30}}>
                    <Button
                        title={"SIGN IN"}
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>navigation.navigate('SignInScreen')}
                        
                    />
                </View>
                <View style={{marginHorizontal:20,marginTop:20}}>
                    <Button
                        title={"Create an account"}
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={()=>{navigation.navigate('SignUpScreen')}}
                    />
                </View>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    slide1:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#9DD6EB"
    },
    slide2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#97CAE5"
    },
    slide3:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#92BBD9"
    },
    createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.orangeC,
        height:50,
        paddingHorizontal:20,
    },
    createButtonTitle:{
        color:colors.grey1,
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",
        marginTop:-3
    }
    
})