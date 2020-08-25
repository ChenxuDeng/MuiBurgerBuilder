import * as actionType from '../action/actionType'

const initialState={
    ingredients: null,
    totalPrice:6,
    error:false,
    loading:false,
    openContact:false,
    open:false,
    openMessage:false,
    loginTip:false,
    drawer:false
}
const ingredientsPrice={
    bacon:2,
    cheese:1.5,
    meat:2,
    salad:1.5
}

const burgerBuilder=(state=initialState,action)=>{
    switch (action.type){
        case(actionType.ADD_MEAT):
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]+1
                },
                totalPrice: state.totalPrice+ingredientsPrice[action.name]
            }
        case(actionType.ADD_BACON):
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]+1
                },
                totalPrice: state.totalPrice+ingredientsPrice[action.name]
            }
        case(actionType.ADD_CHEESE):
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]+1
                },
                totalPrice: state.totalPrice+ingredientsPrice[action.name]
            }
        case(actionType.ADD_SALAD):
            return{
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]+1
                },
                totalPrice: state.totalPrice+ingredientsPrice[action.name]
            }
        case(actionType.REMOVE_MEAT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]-1
                },
                totalPrice: state.totalPrice-ingredientsPrice[action.name]
            }
        case(actionType.REMOVE_BACON):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]-1
                },
                totalPrice: state.totalPrice-ingredientsPrice[action.name]
            }
        case(actionType.REMOVE_CHEESE):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]-1
                },
                totalPrice: state.totalPrice-ingredientsPrice[action.name]
            }
        case(actionType.REMOVE_SALAD):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.name]:state.ingredients[action.name]-1
                },
                totalPrice: state.totalPrice-ingredientsPrice[action.name]
            }
        case(actionType.FETCH_INGREDIENTS_SUCCESS):
            return{
                ...state,
                ingredients:action.ingredients,
                totalPrice:6
            }
        case(actionType.FETCH_INGREDIENTS_FAILED):
            return{
                ...state,
                error:true
            }
        case(actionType.SEND_ORDER_START):
            return{
                ...state,
                loading: true
            }
        case(actionType.SEND_ORDER_SUCCESS):
            return{
                ...state,
                loading:false,
                openContact:false,
                openMessage:true
            }
        case(actionType.SEND_ORDER_FAILED):
            return{
                ...state,
                error:true,
                openContact:false,
                loading:false
            }
        case(actionType.OPEN_CONTACT):
            return{
                ...state,
                openContact:true,
                open:false
            }
        case(actionType.CLOSE_CONTACT):
            return{
                ...state,
                openContact:false
            }
        case(actionType.OPEN_MODAL):
            return{
                ...state,
                open:true
            }
        case(actionType.CLOSE_MODAL):
            return{
                ...state,
                open:false
            }
        case(actionType.CLOSE_MESSAGE):
            return{
                ...state,
                openMessage:false
            }
        case(actionType.LOGIN_MESSAGE):
            return{
                ...state,
                loginTip:true
            }
        case (actionType.CLOSE_LOGIN_MESSAGE):
            return{
                ...state,
                loginTip:false
            }
        case(actionType.OPEN_DRAWER):
            return{
                ...state,
                drawer:true
            }
        case(actionType.CLOSE_DRAWER):
            return{
                ...state,
                drawer:false
            }
        default:
            return state
    }
}

export default burgerBuilder