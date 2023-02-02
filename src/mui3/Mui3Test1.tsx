

//=== DOC https://v3.mui.com/css-in-js/basics/
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
// import * as mui from '@material-ui/icons';
import {Delete, Search} from '@material-ui/icons';
//=== https://v4.mui.com/components/icons/
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import PropTypes from 'prop-types';


const styledBy = (property:any, mapping:any) => (props:any) => mapping[props[property]];


const useStyles1 = makeStyles({
    root: {
        background: styledBy('color', {
            red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        }),
        border: 0,
        borderRadius: 3,
        boxShadow: styledBy('color', {
            red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        }),
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
});

type props1 = {
    children?:any;
    color?:any;
}

function MyButton1(props:props1) {
    const { color } = props;
    // const { color, ...other } = props;
    const classes = useStyles1(props);
    return <Button className={classes.root}> {props.children} </Button>
    // return <Button className={classes.root} {...other} />;
}

MyButton1.propTypes = {
    color: PropTypes.string.isRequired,
};

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
    console.log("=== classes",classes)
    console.log("=== classes.root",classes.root)
    return (
        <>
        <div
            style={{

                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
            }}
        >
            <Button className={classes.root}>Hook</Button>;
            <MyButton>Styled Components</MyButton>
            <Search
                // className={classes.root}
                style={{textAlign:'center', width:'50px', height:'50px', color:"teal"}}
            />
            <Delete />
            <DeleteForeverOutlinedIcon />
        </div>

    <div>
        <MyButton1 color="red">Red</MyButton1>
        <br />
        <br />
        <MyButton1 color="blue">Blue</MyButton1>
    </div>
    </>

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
