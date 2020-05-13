import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3)
    },
}));

function DecodedMessage(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-multiline-static"
                label="See the message here"
                multiline
                rows={4}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                }}
                value={props.message}
                fullWidth
            />
        </div>
    );
}

export default DecodedMessage;