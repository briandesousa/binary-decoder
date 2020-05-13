import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BinaryInputField from './BinaryInputField';
import DecodedMessage from './DecodedMessage';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
    heading: {
        margin: theme.spacing(1),
        padding: theme.spacing(0)
    }
}));


function DecoderContainer(props) {
    const classes = useStyles();
    const [binaryCode, setBinaryCode] = useState('01110100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01100011 01101111 01101111 01101100');
    const [message, setMessage] = useState('this is cool');

    const handleBinaryCode = binary => {
        setBinaryCode(binary);

        let decodedMessage = binary.split(' ')
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join('');

        setMessage(decodedMessage);
    }

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper elevation={5} className={classes.paper}>
                            <h2 className={classes.heading}>Binary Code</h2>
                            <BinaryInputField value={binaryCode} handleBinaryCode={handleBinaryCode} />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={5} className={classes.paper}>
                            <h2 className={classes.heading}>Secret Message</h2>
                            <DecodedMessage message={message}></DecodedMessage>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default DecoderContainer;