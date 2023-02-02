

//=== DOC https://v3.mui.com/css-in-js/basics/
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styled from "styled-components";


const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

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

const Hook1  = ():JSX.Element => {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.root}>Hook</Button>;
            <MyButton>Styled Components</MyButton>
        </div>
    );
}
const Hook  = ():JSX.Element => {
    const classes = useStyles();
    return (
        <Button className={classes.root}>Hook</Button>
    );
}


interface AppProps {
        message?: string;
        //=== https://www.carlrippon.com/react-children-with-typescript/
        children:
        | React.ReactNode
        | React.ReactNode[]
        | string
        | string[];
}; /* could also use interface */

const Mui3Test1: React.FC<AppProps> = (props: AppProps)  => {

    const classes = useStyles();

    return (
            <Hook1 />
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
