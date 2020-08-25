import React,{useState} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import Loader from "../Loader/Loader";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function Contact(props) {
    const[method,setMethod]=useState('Fastest')
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [street,setStreet]=useState(null)
    const [zipcode,setZipcode]=useState(null)
    const [country,setCountry]=useState(null)
    const changeHandler=(event)=>{
        setMethod(event.target.value)
    }
    const nameChangeHandler=(event)=>{
        setName(event.target.value)
        console.log(name)
    }
    const emailChangeHandler=(event)=>{
        setEmail(event.target.value)
    }
    const streetChangeHandler=(event)=>{
        setStreet(event.target.value)
    }
    const zipcodeChangeHandler=(event)=>{
        setZipcode(event.target.value)
    }
    const countryChangeHandler=(event)=>{
        setCountry(event.target.value)
    }
    const customerData={
        name,
        email,
        street,
        zipcode,
        country,
        method
    }
    const orderData={
        ingredients:props.ing,
        orderData:customerData,
        price:props.price
    }
    const sendHandler=()=>{
        props.sendOrder(orderData,props.token)
    }
    let content=<div>
        <DialogTitle>
            Enter Your Contact Data
        </DialogTitle>
        <DialogContent>
            <TextField margin={'dense'} label={'Your Name'} fullWidth variant={'outlined'} onChange={nameChangeHandler}/>
            <TextField margin={'dense'} label={'Your Email'} fullWidth variant={'outlined'} onChange={emailChangeHandler}/>
            <TextField margin={'dense'} label={'Street'} fullWidth variant={'outlined'} onChange={streetChangeHandler}/>
            <TextField margin={'dense'} label={'Zip Code'} fullWidth variant={'outlined'} onChange={zipcodeChangeHandler}/>
            <TextField margin={'dense'} label={'Country'} fullWidth variant={'outlined'} onChange={countryChangeHandler}/>
            <Select value={method} fullWidth style={{marginTop:'10px',height:'40px'}} onChange={changeHandler} variant={'outlined'}>
                <MenuItem value={'Fastest'}>Fastest</MenuItem>
                <MenuItem value={'Cheapest'}>Cheapest</MenuItem>
            </Select>
            <div style={{marginTop:'20px',textAlign:'center'}}>
                <Button style={{fontWeight:'bold',color:'green'}} onClick={sendHandler}>Order</Button>
            </div>
        </DialogContent>
    </div>

    if(props.loading){
        content=<div style={{height:'446px',width:'600px'}}>
            <div style={{paddingTop:'6.6em'}}>
                <Loader/>
            </div>
        </div>


    }
    return (
        <React.Fragment>
            <Dialog open={props.openContact} onClose={props.closeContact}>
                {content}
            </Dialog>
            <Snackbar open={props.openMessage} onClose={props.closeMessage} anchorOrigin={{vertical:'top',horizontal:'center'}} autoHideDuration={6000}>
                <Alert severity={'success'} onClose={props.closeMessage}>
                    We have received your order!
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        ing:state.burgerBuilder.ingredients,
        loading:state.burgerBuilder.loading,
        price:state.burgerBuilder.totalPrice,
        openMessage:state.burgerBuilder.openMessage,
        token:state.auth.token
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendOrder:(orderData,token)=>{dispatch(action.sendOrder(orderData,token))},
        closeMessage:()=>{dispatch(action.closeMessage())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Contact);