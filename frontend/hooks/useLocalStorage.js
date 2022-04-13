import React,{useState,useEffect} from "react";

export default function useLocalStorage(key,value){
    const [valueLS,setValueLS] = useState(()=>{
        const item = window.localStorage.getItem(key)
        return item? JSON.parse(item):value
    })
    const setValue = value=>{
        const stringy = JSON.stringify(value)
        window.localStorage.setItem(key,stringy)
        setValueLS(value)
    }
    return [valueLS,setValue]
}