import {create} from "zustand"
import { StoreType } from "../Type"

export const useAppStore=create<StoreType>((set,get)=>({


    isLogin:false,
    setIsLogin:(params)=>{
        set({isLogin:params})
    },

    isLoading:false,
    setIsLoading:(params)=>{
        set({isLoading:params})
    }


}))