import React,{createContext,useReducer} from 'react'
import { SignInReducer } from '../reducers/authReducers'

export const SignInContext=createContext()

export const SignInContextProvider=(props)=>{
    const [singedIn,dispatchSingedIn]=useReducer(SignInReducer,{userToken:null})

    return(
        <SignInContext.Provider value={{singedIn,dispatchSingedIn}}>
            {props.children}
        </SignInContext.Provider>
    )
}