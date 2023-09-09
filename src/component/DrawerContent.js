import React,{useContext} from "react";
import { View, StyleSheet,Text,Switch,Alert,TouchableOpacity} from "react-native";
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
import { colors } from "../global/styles";
import { Avatar, Icon } from "react-native-elements";
import auth from '@react-native-firebase/auth'
import { SignInContext } from "../contexts/authContext";



export default function DrawerContent(props){

    const {dispatchSingedIn}=useContext(SignInContext)

    async function signOut(){
        
        try {
            auth().signOut().then(()=>{
                console.log('user successfully signed out')
                //dispatchSingedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
            })
        } catch (error) {
            Alert.alert(error.code)
        }
    }

    return(
        <View style={styels.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.orangeC,}}>
                    <View style={{flexDirection:"row",alignItems:'center',paddingLeft:20,paddingVertical:10}}>
                        <Avatar
                            rounded
                            avatarStyle={styels.avatar}
                            size={75}
                            source={{uri:"https://thumbs.dreamstime.com/z/donner-meat-chips-28663380.jpg"}}
                        />
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:'bold',color:colors.whiteC,fontSize:18}}>Ibrahim wahbeh</Text>
                            <Text style={{color:colors.whiteC,fontSize:14}}>ibo@gamil.com</Text>
                        </View>
                        
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-evenly",paddingBottom:5}}>
                        <View style={{flexDirection:"row",marginTop:0,}}>
                            <View style={{marginLeft:10,alignItems:"center",justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',color:colors.whiteC,fontSize:18}}>1</Text>
                                <Text style={{color:colors.whiteC,fontSize:14}}>My Facorites</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:"row",marginTop:0,}}>
                            <View style={{marginLeft:10,alignItems:"center",justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',color:colors.whiteC,fontSize:18}}>0</Text>
                                <Text style={{color:colors.whiteC,fontSize:14}}>My Cart</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props}/>

                <DrawerItem
                    label={'Payment'}
                    icon={({color,size})=>(
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label={'Promotions'}
                    icon={({color,size})=>(
                        <Icon
                            type="material-community"
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label={'Settings'}
                    icon={({color,size})=>(
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label={'Help'}
                    icon={({color,size})=>(
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={color}
                            size={size}
                        />
                    )}
                />


                <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
                    <Text  style={styels.perferences}>Preferences</Text>

                    <View style={styels.switchText}>
                        <Text style={styels.darkthemeText}>Dark Theme</Text>

                        <View style={{paddingRight:10}}>
                            <Switch
                                trackColor={{false:"#767577",true:"#81b0ff"}}
                                thumbColor="#f4f3f4"
                            />
                        </View>
                    </View>
                </View>



            </DrawerContentScrollView>


            
            <DrawerItem
                label={'Sign Out'}
                icon={({color,size})=>(
                    <Icon
                        type="material-community"
                        name="logout-variant"
                        color={color}
                        size={size}
                        onPress={()=>{signOut()}}
                    />
                )}
            />
        </View>
    )
}


const styels=StyleSheet.create({
    avatar:{
        borderWidth:4,
        borderColor:colors.whiteC
    },
    container:{
        flex:1
    },
    perferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkthemeText:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        fontWeight:'bold'
    }
})