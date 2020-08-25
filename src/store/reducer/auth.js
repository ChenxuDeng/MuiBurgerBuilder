import * as actionType from '../action/actionType'

const initialState={
    id:null,
    token:null,
    loading:false,
    open:false,
    successMessage:false,
    loginMessage:false,
    error:null,
    openError:false,
    openBackDrop:false
}

const auth=(state=initialState,action)=>{
    switch (action.type){
        case(actionType.AUTH_UP_START):
            return{
                ...state,
                loading:true,
            }
        case(actionType.AUTH_IN_START):
            return{
                ...state,
                openBackDrop:true
            }
        case(actionType.AUTH_UP_SUCCESS):
            return{
                ...state,
                loading:false,
                open:false,
                successMessage:true
            }
        case(actionType.AUTH_IN_SUCCESS):
            return{
                ...state,
                id:action.id,
                token:action.token,
                loading:false,
                loginMessage:true,
                openBackDrop:false
            }
        case(actionType.AUTH_FAILED):
            return{
                ...state,
                loading:false,
                error:action.error,
                openError:true,
                openBackDrop:false
            }
        case(actionType.OPEN_SIGNUP_FROM):
            return{
                ...state,
                open:true
            }
        case(actionType.CLOSE_SIGNUP_FROM):
            return{
                ...state,
                open:false
            }
        case(actionType.CLOSE_MESSAGE):
            return{
                ...state,
                successMessage:false,
                loginMessage:false
            }
        case(actionType.CLOSE_ERROR_MESSAGE):
            return{
                ...state,
                openError:false
            }
        case(actionType.LOGOUT):
            return{
                ...state,
                token:null
            }
        default:
            return state
    }
}

export default auth