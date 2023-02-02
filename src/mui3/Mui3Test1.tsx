
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

type Props1 = {
    props?:any;
    title?:string;
    children?:React.ReactElement;
}

type Props2 = {
    props?:any;
    title?:string;
    children?:React.ReactElement;
}

const Hook  = () => {
    const classes = useStyles();
    return (<Button className={classes.root}>Hook</Button> as React.ReactElement);
}


type AppProps = { message?: string }; /* could also use interface */

const Mui3Test1: React.FC<AppProps> = ({ message }) => {

    const classes = useStyles();

    return (
        <Button className={classes.root}>Hook</Button>
    )

};

// const Mui3Test1 : React.FC<Props2> = (props: Props2 ) => {
//
//     // console.log("=== === IconBasic props ",props)
//
// return(
//
//     {Hook}
//
// )}
//


export {Mui3Test1}
