import React,{useEffect} from 'react';
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import Loader from "../../burgerbuilder/Loader/Loader";

function Order(props) {

    useEffect(()=>{
            props.fetchOrder(props.token)
    },[])

    let content=<div>
        {props.orderData.map((ingredients)=>{
            return <TableContainer component={Paper} style={{width:'60%',margin:'6% auto'}}>
                <Table>
                    <TableBody>
                        {Array(ingredients.ingredients).map((ing)=>{
                            return <TableRow>
                                <TableCell>
                                    Ingredients:
                                </TableCell>
                                <TableCell>
                                    Meat: {ing.meat}
                                </TableCell>
                                <TableCell>
                                    Salad: {ing.salad}
                                </TableCell>
                                <TableCell>
                                    Cheese: {ing.cheese}
                                </TableCell>
                                <TableCell>
                                    Bacon: {ing.bacon}
                                </TableCell>
                            </TableRow>
                        })}
                        <TableRow>
                            <TableCell>
                                Price: <span style={{fontWeight:'bold'}}>USD {ingredients.price.toFixed(2)}</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        })}
    </div>
        if(props.loading && props.token){
            content=<Loader/>
        }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        orderData:state.order.order,
        loading:state.order.loading,
        token:state.auth.token
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchOrder:(token)=>{dispatch(action.fetchOrder(token))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);