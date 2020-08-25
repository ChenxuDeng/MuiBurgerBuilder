import * as actionType from '../action/actionType'
import axios from 'axios'

export const fetchOrderStart=()=>{
    return{
        type:actionType.FETCH_ORDER_START
    }
}

export const fetchOrderSuccess=(orderData)=>{
    return{
        type:actionType.FETCH_ORDER_SUCCESS,
        orderData:orderData
    }
}

export const fetchOrderFailed=()=>{
    return{
        type:actionType.FETCH_ORDER_FAILED
    }
}

export const fetchOrder=(token)=>{
    return (dispatch)=>{
        dispatch(fetchOrderStart())
        axios.get('https://creat-burger.firebaseio.com/order2.json?auth='+token).then((response)=>{
            const orderData=[]
            for(let key in response.data){
                orderData.push({
                    ...response.data[key],
                    id:key
                })
            }
            dispatch(fetchOrderSuccess(orderData))
        }).catch((error)=>{
            dispatch(fetchOrderFailed(error))
        })
    }
}