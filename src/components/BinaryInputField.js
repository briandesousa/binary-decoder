import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3)
    },
}));


function BinaryInputField(props) {
    const classes = useStyles();

    const handleChange = (event) => {
        props.handleBinaryCode(event.target.value);
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-multiline-static"
                label="Enter binary code here"
                multiline
                rows={4}
                variant="outlined"
                value={props.value}
                onChange={handleChange}
                fullWidth
            />
        </form>
    );
}

export default BinaryInputField;