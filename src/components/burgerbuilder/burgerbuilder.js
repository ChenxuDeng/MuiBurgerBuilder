import Burgercontrols from "./burgercontrols/burgercontrols";
import Modal from "./modal/modal";
import React, {Component} from 'react';
import Contact from "./contact/contact";
import Loader from "./Loader/Loader";
import Burger from "./burger/burger";
import {connect} from "react-redux";
import * as action from '../../store/action/index'
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

class Burgerbuilder extends Component {

    componentDidMount() {
        this.props.fetchIngredients()
    }

    render() {
        const disable={...this.props.ing}
        for(let key in disable){
            disable[key]=disable[key]<=0
        }

        let mainPage=<Loader/>
        if(this.props.ing){
            mainPage=<React.Fragment>
                    <Burger ingredients={this.props.ing}/>
                <Burgercontrols
                    addMeat={()=>this.props.addMeat('meat')}
                    addBacon={()=>this.props.addBacon('bacon')}
                    addSalad={()=>this.props.addSalad('salad')}
                    addCheese={()=>this.props.addCheese('cheese')}
                    removeMeat={()=>this.props.removeMeat('meat')}
                    removeBacon={()=>this.props.removeBacon('bacon')}
                    removeSalad={()=>this.props.removeSalad('salad')}
                    removeCheese={()=>this.props.removeCheese('cheese')}
                    disable={disable}
                    price={this.props.totalPrice}
                    openModal={this.props.openModal}
                />
                <Modal open={this.props.open}
                       closeModal={this.props.closeModal}
                       salad={this.props.ing.salad}
                       cheese={this.props.ing.cheese}
                       meat={this.props.ing.meat}
                       bacon={this.props.ing.bacon}
                       price={this.props.totalPrice}
                       openContact={this.props.openContactF}
                />
                <Contact openContact={this.props.openContact} closeContact={this.props.closeContactF}/>
            </React.Fragment>
        }

        return (
                mainPage
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        ing:state.burgerBuilder.ingredients,
        totalPrice:state.burgerBuilder.totalPrice,
        openContact:state.burgerBuilder.openContact,
        open:state.burgerBuilder.open,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        addMeat:(name)=>{dispatch(action.addMeat(name))},
        addBacon:(name)=>{dispatch(action.addBacon(name))},
        addCheese:(name)=>{dispatch(action.addCheese(name))},
        addSalad:(name)=>{dispatch(action.addSalad(name))},
        removeMeat:(name)=>{dispatch(action.removeMeat(name))},
        removeBacon:(name)=>{dispatch(action.removeBacon(name))},
        removeCheese:(name)=>{dispatch(action.removeCheese(name))},
        removeSalad:(name)=>{dispatch(action.removeSalad(name))},
        fetchIngredients:()=>{dispatch(action.fetchIngredients())},
        openContactF:()=>{dispatch(action.openContact())},
        closeContactF:()=>{dispatch(action.closeContact())},
        openModal:()=>{dispatch(action.openModal())},
        closeModal:()=>{dispatch(action.closeModal())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Burgerbuilder);

