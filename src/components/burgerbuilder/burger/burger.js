import React from 'react';
import classes from './burger.module.css'
import Ingredients from "../ingredients/ingredients";
import CssBaseline from "@material-ui/core/CssBaseline";

function Burger(props) {
    let ingredient=Object.keys(props.ingredients).map((igKey)=>{
        return [...Array(props.ingredients[igKey])].map((_,index)=>{
            return <Ingredients key={igKey+index} type={igKey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(ingredient.length===0){
        ingredient=<p>Please start adding ingredients</p>
    }

    return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.Burger}>
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}/>
                        <div className={classes.Seeds2}/>
                    </div>
                    {ingredient}
                    <div className={classes.BreadBottom}/>
                </div>
            </React.Fragment>
    );
}

export default Burger;