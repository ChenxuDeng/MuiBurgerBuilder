import Navigation from "./components/navigation/navigation";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from '../src/components/theme/theme'
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Burgerbuilder from "./components/burgerbuilder/burgerbuilder";
import Order from "./components/orderpage/order/order";
import Auth from "./components/auth/auth";
import {connect} from 'react-redux'
import * as action from './store/action/index'
import React, {Component} from 'react';

class App extends Component {
    render() {
        this.props.autoLogin()
        return (
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <div>
                            <Navigation/>
                            <Switch>
                                <Route path={'/auth'} component={Auth}/>
                                <Route path={'/orders'} component={Order}/>
                                <Route path={'/'} component={Burgerbuilder}/>
                            </Switch>
                        </div>
                    </ThemeProvider>
                </BrowserRouter>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        autoLogin:()=>{dispatch(action.autoLogin())}
    }
}

export default connect(null,mapDispatchToProps)(App);

