import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import {loadCart,cartEmpty} from "./helper/cartHelper";
import { getmeToken, processPayment } from "./helper/paymentbhelper";
import { isAuthenticated } from "../auth/helper";
import {createOrder} from "./helper/orderHelper";
import DropIn from "braintree-web-drop-in-react";

const Paymentb=({products,setReload=f=>f,reload=undefined})=>{

    const [info,setInfo]=useState({
        loading:false,
        success:false,
        clientToken:null,
        error:""
    });

    const userId=isAuthenticated() && isAuthenticated().user._id
    const token=isAuthenticated() && isAuthenticated().token

    const getToken=(userId,token)=>{
        getmeToken(userId,token).then(info=>{    
            if(info.error){
                setInfo({...info,error:info.error})
            }else{
                const clientToken=info.clientToken
                setInfo({clientToken})
            }
        })
    }
    
    useEffect(()=>{
        getToken(userId,token)
    },[])


    return(
        <div>
            <h3>Test Braintree</h3>
        </div>
    )
}

export default Paymentb;