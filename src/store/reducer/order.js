import * as actionType from '../action/actionType'

const initialState={
    order:[],
    loading:true,
    error:false
}

const order=(state=initialState,action)=>{
    switch (action.type){
        case(actionType.FETCH_ORDER_START):
            return{
                ...state,
                loading:true
            }
        case(actionType.FETCH_ORDER_SUCCESS):
            return{
                ...state,
                order:action.orderData,
                loading:false
            }
        case(actionType.FETCH_ORDER_FAILED):
            return{
                ...state,
                error:true,
            }
        default:
            return state
    }
}

export default order