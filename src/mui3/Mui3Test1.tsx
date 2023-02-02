

//=== DOC https://v3.mui.com/css-in-js/basics/
import React from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import styled from "styled-components";
// import * as mui from '@material-ui/icons';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';

//=== https://v4.mui.com/components/icons/
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import PropTypes from 'prop-types';


const styledBy1 = (property:any, mapping:any) => (props:any) => mapping[props[property]];


const useStyles3 = makeStyles({
    root: {
        position:"relative",
        height: '500px',
    }})



const useStyles1 = makeStyles({
    root: {
        position:"relative",
        background: styledBy1('color', {
            red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        }),
        border: 0,
        borderRadius: 3,
        boxShadow: styledBy1('color', {
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



const Hook1  = ():JSX.Element => {
    const classes = useStyles();
    console.log("=== classes",classes)
    console.log("=== classes.root",classes.root)

    const classes3 = useStyles3()

    return (
        <div className={classes3.root} style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            // height:'1400px',
        }}>
                <div

                    style={{

                        flex:1,

                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <Button className={classes.root}>Hook</Button>;
                    <MyButton>Styled Components</MyButton>
                    <SearchIcon
                        // className={classes.root}
                        style={{textAlign:'center', width:'50px', height:'50px', color:"teal"}}
                    />
                    <DeleteIcon />
                    <DeleteForeverOutlinedIcon />
                </div>

                <br></br>
                <div style={{flex:1}}>
                    <MyButton1 color="red">Red</MyButton1>
                    <br />
                    <br />
                    <MyButton1 color="blue">Blue</MyButton1>
                </div>
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
