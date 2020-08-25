import * as actionType from './actionType'
import axios from 'axios'

export const addMeat=(meat)=>{
    return{
        type:actionType.ADD_MEAT,
        name:meat,
    }
}

export const addBacon=(bacon)=>{
    return{
        type:actionType.ADD_BACON,
        name:bacon
    }
}

export const addCheese=(cheese)=>{
    return{
        type:actionType.ADD_CHEESE,
        name:cheese
    }
}

export const addSalad=(salad)=>{
    return{
        type:actionType.ADD_SALAD,
        name:salad
    }
}

export const removeMeat=(meat)=>{
    return{
        type:actionType.REMOVE_MEAT,
        name:meat
    }
}

export const removeBacon=(bacon)=>{
    return{
        type:actionType.REMOVE_MEAT,
        name:bacon
    }
}

export const removeCheese=(cheese)=>{
    return{
        type:actionType.REMOVE_MEAT,
        name:cheese
    }
}

export const removeSalad=(salad)=>{
    return{
        type:actionType.REMOVE_MEAT,
        name:salad
    }
}

export const fetchIngredientsSuccess=(ingredients)=>{
    return{
        type:actionType.FETCH_INGREDIENTS_SUCCESS,
        ingredients:ingredients
    }
}

export const fetchIngredientsFailed=()=>{
    return{
        type:actionType.FETCH_INGREDIENTS_FAILED
    }
}

export const fetchIngredients=()=>{
    return (dispatch)=>{
        axios.get('https://creat-burger.firebaseio.com/ingredients.json').then((response)=>{
            dispatch(fetchIngredientsSuccess(response.data))
        }).catch((error)=>{
            dispatch(fetchIngredientsFailed(error))
        })
    }
}

export const sendOrderStart=()=>{
    return{
        type:actionType.SEND_ORDER_START
    }
}

export const sendOrderSuccess=(orderData)=>{
    return{
        type:actionType.SEND_ORDER_SUCCESS,
        orderData:orderData
    }
}

export const sendOrderFailed=()=>{
    return{
        type:actionType.SEND_ORDER_FAILED
    }
}

export const sendOrder=(orderData,token)=>{
    return (dispatch)=>{
        dispatch(sendOrderStart())
        axios.post('https://creat-burger.firebaseio.com/order2.json?auth='+token,orderData).then((response)=>{
            dispatch(sendOrderSuccess(response.data))
        }).catch((error)=>{
            dispatch(sendOrderFailed(error))
        })
    }
}

export const openContact=()=>{
    return{
        type:actionType.OPEN_CONTACT
    }
}

export const closeContact=()=>{
    return{
        type:actionType.CLOSE_CONTACT
    }
}

export const openModal=()=>{
    return{
        type:actionType.OPEN_MODAL
    }
}

export const closeModal=()=>{
    return{
        type:actionType.CLOSE_MODAL
    }
}

export const closeMessage=()=>{
    return{
        type:actionType.CLOSE_MESSAGE
    }
}

export const loginMessage=()=>{
    return{
        type:actionType.LOGIN_MESSAGE
    }
}

export const closeLoginTip=()=>{
    return{
        type:actionType.CLOSE_LOGIN_MESSAGE
    }
}

export const openDrawer=()=>{
    return{
        type:actionType.OPEN_DRAWER
    }
}

export const closeDrawer=()=>{
    return{
        type:actionType.CLOSE_DRAWER
    }
}
