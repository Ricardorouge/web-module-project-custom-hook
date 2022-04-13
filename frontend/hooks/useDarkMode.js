import React,{useState,useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(value){
    const [darkMode,setDarkMode] = useLocalStorage(value)
    return [darkMode,setDarkMode]
}