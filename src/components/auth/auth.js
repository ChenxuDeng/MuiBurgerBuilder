import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as action from '../../store/action/index'
import {connect} from 'react-redux'
import Signupform from "./signupform/signupform";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Loader from "../burgerbuilder/Loader/Loader";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function Auth(props) {
    const classes = useStyles();
    const [email,setEmail]=useState(null)
    const [password,setPassword]=useState(null)

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }

    const passwordHandler=(event)=>{
        setPassword(event.target.value)
    }

    let errorMessage=null
    if(props.error){
        errorMessage=props.error.message
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={emailHandler}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={passwordHandler}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={()=>{props.authIn(email,password);props.closeLoginTip()}}
                    >
                        Sign in
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={props.openForm}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Signupform/>
            <Snackbar open={props.loginMessage} onClose={props.closeLoginMessage} anchorOrigin={{horizontal:'center',vertical:'top'}} autoHideDuration={6000}>
                <Alert severity={'success'} onClose={props.closeLoginMessage}>
                    {props.isAuth?'Login success!':'Logout success!'}
                </Alert>
            </Snackbar>
            <Backdrop open={props.backDrop} style={{zIndex:'2000'}}>
                <div style={{marginBottom:'6em'}}>
                    <Loader style={{zIndex:'2001'}}/>
                </div>
            </Backdrop>
            <Snackbar open={props.openError} onClose={props.closeErrorMessage} anchorOrigin={{horizontal:'center',vertical:'top'}} autoHideDuration={6000}>
                <Alert severity={'error'} onClose={props.closeErrorMessage}>
                    {errorMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
}

const mapStateToProps=(state)=>{
    return{
        loading:state.auth.loading,
        id:state.auth.id,
        loginMessage:state.auth.loginMessage,
        error:state.auth.error,
        openError:state.auth.openError,
        backDrop:state.auth.openBackDrop,
        isAuth:state.auth.token!=null
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        authIn:(email,password)=>{dispatch(action.authIn(email,password))},
        openForm:()=>{dispatch(action.openSignupForm())},
        closeLoginMessage:()=>{dispatch(action.closeLoginMessage())},
        closeErrorMessage:()=>{dispatch(action.closeErrorMessage())},
        closeLoginTip:()=>{dispatch(action.closeLoginTip())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)