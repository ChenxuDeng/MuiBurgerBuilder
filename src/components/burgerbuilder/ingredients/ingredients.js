import React from 'react';
import classes from './ingredients.module.css'
import PropType from 'prop-types'

function Ingredients(props) {
    let ingredients=null
    switch (props.type){
        case('salad'):
            ingredients=<div className={classes.Salad}></div>
            break;
        case('meat'):
            ingredients=<div className={classes.Meat}></div>
            break;
        case('cheese'):
            ingredients=<div className={classes.Cheese}></div>
            break;
        case('bacon'):
            ingredients=<div className={classes.Bacon}></div>
            break;
        default:ingredients=null
    }

    return (
        <React.Fragment>
            {ingredients}
        </React.Fragment>
    );
}

Ingredients.PropType={
    type: PropType.string.isRequired
}

export default Ingredients;