import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Modal(props) {
    return (
        <React.Fragment>
                <Dialog open={props.open} onClose={props.closeModal} style={{textAlign:'center'}} fullWidth>
                    <DialogTitle>
                        Here is your delicious burger:
                    </DialogTitle>
                    <Grid container direction={'column'}>
                        <Grid item style={{marginBottom:'10px'}}>
                            <span>Salad: </span> {props.salad}
                        </Grid>
                        <Grid item style={{marginBottom:'10px'}}>
                            <span>Cheese: </span> {props.cheese}
                        </Grid>
                        <Grid item style={{marginBottom:'10px'}}>
                            <span>Meat: </span> {props.meat}
                        </Grid>
                        <Grid item>
                            <span>Bacon: </span> {props.bacon}
                        </Grid>
                    </Grid>
                    <DialogTitle>
                        Price: {props.price.toFixed(2)}
                    </DialogTitle>
                    <Grid container justify={'center'} style={{marginBottom:'20px'}} spacing={3}>
                        <Grid item>
                            <Button variant={'outlined'} style={{borderColor:'green',color:'green'}} onClick={props.openContact}>Continue</Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'outlined'} style={{borderColor:'red',color:'red'}} onClick={props.closeModal}>Cancel</Button>
                        </Grid>
                    </Grid>
                </Dialog>
        </React.Fragment>
    );
}

export default Modal;