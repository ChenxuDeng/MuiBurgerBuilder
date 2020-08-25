import React,{useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import {connect} from 'react-redux'
import * as action from '../../../store/action/index'
import Button from "@material-ui/core/Button";
import Loader from "../../burgerbuilder/Loader/Loader";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Typography from "@material-ui/core/Typography";

function Signupform(props) {
    const[email,setEmail]=useState(null)
    const[password,setPassword]=useState(null)

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }

    const passwordHandler=(event)=>{
        setPassword(event.target.value)
    }

    let content=<React.Fragment>
        <DialogContent>
            <DialogTitle style={{textAlign:'center',marginBottom:'1em'}}>
                <Typography component='h1' variant='h5'>
                    Create your account
                </Typography>

            </DialogTitle>
            <DialogContentText>
                <TextField fullWidth variant={'outlined'} label={'Setup email'} autoFocus value={email} onChange={emailHandler}/>
            </DialogContentText>
            <DialogContentText>
                <TextField fullWidth variant={'outlined'} label={'Setup password'} value={password} onChange={passwordHandler}/>
            </DialogContentText>
        </DialogContent>
        <Button variant={'contained'} color={'primary'} style={{width:'30%',margin:'10px auto'}} onClick={()=>props.authUp(email,password)}>Submit</Button>
    </React.Fragment>
    if(props.loading){
        content=<div style={{width:'444px',height:'298px',paddingTop:'4.5em'}}>
            <Loader/>
        </div>
    }
    return (
        <React.Fragment>
                <Dialog open={props.open} onClose={props.closeForm} fullWidth maxWidth={'xs'}>
                    {content}
                </Dialog>
            <Snackbar open={props.successMessage} onClose={props.closeMessage} autoHideDuration={6000} anchorOrigin={{horizontal:'center',vertical:'top'}}>
                <Alert severity={'success'} onClose={props.closeMessage}>
                    Account created!
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}

const mapStateToProps=(state)=>{
    return{
        open:state.auth.open,
        loading:state.auth.loading,
        successMessage:state.auth.successMessage,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        closeForm:()=>{dispatch(action.closeSignupForm())},
        authUp:(email,password)=>{dispatch(action.authUp(email,password))},
        closeMessage:()=>{dispatch(action.closeSuccessMessage())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signupform);