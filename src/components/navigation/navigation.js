import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import burgerIcon from '../../assets/27.1 burger-logo.png.png'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from "../../store/action";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useTheme from "@material-ui/core/styles/useTheme";
import * as action from '../../store/action/index'
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ListAltIcon from '@material-ui/icons/ListAlt';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu'

function Navigation(props) {
    const useStyles=makeStyles((theme)=>{
        return{
            burgerIcon:{
                height:'50px',
            },
            tab:{
                minWidth:'3em',
                opacity:1,
                height:'64px'
            },
            tabs:{
                marginLeft:'auto',
            },
            drawer:{
                backgroundColor:theme.palette.common.lightBrown
            },
            selected:{
                background:theme.palette.common.brown
            }
        }
    })
    const classes=useStyles()
    const theme=useTheme()
    const match=useMediaQuery(theme.breakpoints.down('xs'))
    const [index,setIndex]=useState(0)
    const [logout,setLogout]=useState(false)
    const [drawerIndex,setDrawerIndex]=useState(0)
    const changeHandler=(event,index)=>{
        setIndex(index)
    }
    const logoutHandler=()=>{
        setLogout(true)
    }
    const redirectHandler=()=>{
        setLogout(false)
    }

    useEffect(()=>{
        if(window.location.pathname==='/orders'){
            setIndex(1)
            setDrawerIndex(1)
        }else if(window.location.pathname==='/auth' && props.token){
            setIndex(2)
        }else if(window.location.pathname==='/auth' && !props.token){
            setIndex(1)
            setDrawerIndex(2)
        }else if(window.location.pathname==='/'){
            setIndex(0)
            setDrawerIndex(0)
        }
    },[props.token])

    let authRedirect=null
    if(props.isAuth && window.location.pathname==='/auth'){
        authRedirect=<Redirect to={'/'}/>
    }else if(window.location.pathname==='/' && !props.isAuth && logout){
        authRedirect=<Redirect to={'/auth'}/>
    }else if(window.location.pathname==='/orders' && !props.isAuth){
        authRedirect=<Redirect to={'/auth'}/>
    }

    const drawer=<React.Fragment>
        <SwipeableDrawer open={props.drawer} classes={{paper:classes.drawer}} onOpen={props.openDrawer} onClose={props.closeDrawer}>
            <List onClick={props.closeDrawer}>
                <ListItem>
                    <div style={{height:'60px',padding:'3px',backgroundColor:'white',borderRadius:'5px'}}>
                        <img src={burgerIcon} alt="burger-icon" className={classes.burgerIcon}/>
                    </div>
                </ListItem>
                <ListItem style={{marginTop:'2.5em',height:'5em',color:'white'}}
                          button
                          divider
                          component={Link}
                          to={'/'}
                          selected={drawerIndex===0}
                          onClick={()=>{setDrawerIndex(0)}}
                >
                    <ListItemIcon>
                        <FastfoodIcon style={{color:'white'}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Burger Builder
                    </ListItemText>
                </ListItem>
                {props.isAuth?<ListItem style={{color:'white'}}
                                        button
                                        divider
                                        component={Link}
                                        to={'/orders'}
                                        selected={drawerIndex===1}
                                        onClick={()=>{setDrawerIndex(1)}}
                >
                    <ListItemIcon>
                        <ListAltIcon style={{color:'white'}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Order
                    </ListItemText>
                </ListItem>:null}
                {!props.isAuth?<ListItem style={{color:'white'}}
                                         button
                                         divider
                                         component={Link}
                                         to={'/auth'}
                                         selected={drawerIndex===2}
                                         onClick={()=>{setDrawerIndex(2)}}
                >
                    <ListItemIcon>
                        <VpnKeyIcon style={{color:'white'}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Auth
                    </ListItemText>
                </ListItem>:null}
                {props.isAuth?<ListItem style={{color:'white',background:'#FF4500'}} button divider component={Link} to={'/auth'} onClick={props.logout}>
                    <ListItemIcon>
                        <MeetingRoomIcon style={{color:'white'}}/>
                    </ListItemIcon>
                    <ListItemText>
                        Logout
                    </ListItemText>
                </ListItem>:null}
            </List>
        </SwipeableDrawer>
    </React.Fragment>

    const toggle=<React.Fragment>
        <IconButton style={{marginLeft:'auto'}} onClick={()=>{props.openDrawer()}}>
            <MenuIcon style={{height:'50px',width:'50px'}}/>
        </IconButton>
    </React.Fragment>

    const tabs=<React.Fragment>
        <Tabs className={classes.tabs} value={index} onChange={changeHandler}>
            <Tab label={'Burger Builder'} className={classes.tab} component={Link} to={'/'} onClick={redirectHandler}/>
            {props.token?<Tab label={'Orders'} className={classes.tab} component={Link} to={'/orders'}/>:null}
            {!props.token?<Tab label={'Auth'} className={classes.tab} component={Link} to={'/auth'}/>:null}
            {props.isAuth?<Tab label={'Logout'} onClick={()=>{props.logout();logoutHandler()}} className={classes.tab}/> :null}
        </Tabs>
    </React.Fragment>

    return (
            <div style={{display:'flex',flexDirection:'column'}}>
                {authRedirect}
                <AppBar position={'sticky'}>
                    <Toolbar>
                        <img src={burgerIcon} alt="burger-icon" className={classes.burgerIcon}/>
                        {match?drawer:tabs}
                        {match?toggle:null}
                    </Toolbar>
                </AppBar>
            </div>
    );
}

const mapStateToProps=(state)=>{
    return{
        token:state.auth.token,
        isAuth:state.auth.token!=null,
        drawer:state.burgerBuilder.drawer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        logout:()=>{dispatch(logout())},
        openDrawer:()=>{dispatch(action.openDrawer())},
        closeDrawer:()=>{dispatch(action.closeDrawer())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);