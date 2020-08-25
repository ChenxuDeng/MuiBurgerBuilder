import React,{useState} from 'react';
import classes from './burgercontrols.module.css'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import {closeLoginTip, loginMessage} from "../../../store/action";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Burgercontrols(props) {
    return (
        <div className={classes.wrapper} style={{fontWeight:'bold'}}>
            Total Price: {props.price.toFixed(2)}
            <Grid container className={classes.margin} alignItems={'center'} justify={'center'}>
                <Grid item style={{marginRight:'50px'}}>
                    <Grid container direction={'column'} spacing={6}>
                        <Grid item>
                            Salad
                        </Grid>
                        <Grid item>
                            Cheese
                        </Grid>
                        <Grid item>
                            Bacon
                        </Grid>
                        <Grid item>
                            Meat
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction={'column'} spacing={4}>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.addSalad}>+</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.addCheese}>+</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.addBacon}>+</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.addMeat}>+</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft:'20px'}}>
                    <Grid container direction={'column'} spacing={4}>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.removeSalad} disabled={props.disable['salad']}>-</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.removeCheese} disabled={props.disable['cheese']}>-</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.removeBacon} disabled={props.disable['bacon']}>-</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} color={'primary'} style={{minWidth:'6em'}} onClick={props.removeMeat} disabled={props.disable['meat']}>-</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Button variant={'contained'} style={{backgroundColor:'#FFD700',fontWeight:'bold',marginTop:'30px'}} onClick={props.isAuth?props.openModal:props.openMessage}>Order Now</Button>
            <Snackbar open={props.loginMessage} anchorOrigin={{horizontal:'center',vertical:'top'}} autoHideDuration={6000}>
                <Alert severity={'warning'} onClose={props.closeMessage}>
                    Please login to your account first!
                </Alert>
            </Snackbar>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.token!=null,
        loginMessage:state.burgerBuilder.loginTip
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        openMessage:()=>{dispatch(loginMessage())},
        closeMessage:()=>{dispatch(closeLoginTip())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Burgercontrols);