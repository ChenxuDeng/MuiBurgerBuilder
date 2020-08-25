import * as actionType from './actionType'
import axios from 'axios'

export const authUpStart=()=>{
    return{
        type:actionType.AUTH_UP_START
    }
}

export const authInStart=()=>{
    return{
        type:actionType.AUTH_IN_START
    }
}

export const authUpSuccess=()=>{
    return{
        type:actionType.AUTH_UP_SUCCESS
    }
}

export const authInSuccess=(token,id)=>{
    return{
        type:actionType.AUTH_IN_SUCCESS,
        token:token,
        id:id
    }
}

export const authFailed=(error)=>{
    return{
        type:actionType.AUTH_FAILED,
        error:error
    }
}

export const openSignupForm=()=>{
    return{
        type:actionType.OPEN_SIGNUP_FROM
    }
}

export const closeSignupForm=()=>{
    return{
        type:actionType.CLOSE_SIGNUP_FROM
    }
}

export const closeSuccessMessage=()=>{
    return{
        type:actionType.CLOSE_MESSAGE
    }
}

export const closeLoginMessage=()=>{
    return{
        type:actionType.CLOSE_MESSAGE
    }
}

export const closeErrorMessage=()=>{
    return{
        type:actionType.CLOSE_ERROR_MESSAGE
    }
}

export const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    return{
        type:actionType.LOGOUT
    }
}

export const authUp=(email,password)=>{
    const authData={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return (dispatch)=>{
        dispatch(authUpStart())
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAN-tsoji2NFKt1jB1PDLOx6SG9JKY6Omg',authData).then((response)=>{
            dispatch(authUpSuccess(response.data))
        }).catch((error)=>{
            dispatch(authFailed(error.response.data.error))
        })
    }
}

export const authIn=(email,password)=>{
    const authData={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return (dispatch)=>{
        dispatch(authInStart())
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAN-tsoji2NFKt1jB1PDLOx6SG9JKY6Omg',authData).then((response)=>{
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('id',response.data.localId)
            dispatch(authInSuccess(response.data.idToken,response.data.localId))
        }).catch((error)=>{
            dispatch(authFailed(error.response.data.error))
        })
    }
}

export const autoLogin=()=>{
    return(dispatch)=>{
        const token=localStorage.getItem('token')
        if(!token){
            dispatch(logout())
        }else{
            const id=localStorage.getItem('id')
            dispatch(authInSuccess(token,id))
        }
    }
}