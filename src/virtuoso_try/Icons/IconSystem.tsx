import React from "react";

import {FaSearch, FaTrash} from "react-icons/fa";
import {IconBasic} from "../IconBasic";
import {globals_} from "../globals";
import IconTint from 'react-icon-tint';

//=== DOC https://mui.com/system/styles/basics/
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import {Search} from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@mui/styles";
import styled from "styled-components";

type Props = {
    props?:any;
    name?:any;
    mode_icon_system?:any;
    globals_?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}



const useStyles1 = makeStyles({
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

const DivSize5050 = styled.div`
  height: 50px;
  width: 50px;
`



const IconSystem : React.FC<Props> = (props) => {

    console.log("=== globals_",globals_.system.mode_icons)

    const classes = useStyles1();

    const Ret2 = (props:any) =>

    {
        const {id} = props
        const id_local = id

        var var2: any = []
        //mode_icon_system name

        var2['fa_search'] =
            <div id={id_local}
                 style={{
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center',
                     border:'1px solid teal',
                     color:'teal',
                 }}
            >
                    <FaSearch color='teal' fontSize='50' />
            </div>

        var2['ios_search'] =
            <div id={id_local}
                 style={{
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center',
                 }}
            >

            {/*======== https://icons8.com/icons/ios*/}
                <div style={{ border:'1px solid teal', width: 50, height: 50, }}>
                    <IconTint src={require("./i_search.png")} color="teal"
                              {...{maxWidth: 50, maxHeight: 50, }}
                    />
                </div>

            </div>

        var2['mui_search'] =
            <div id={id_local}
                 style={{
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center',
                 }}
            >

                <SearchIcon id={id_local}  sx={{ color:'teal', fontSize: 50, border:'1px solid teal' }} />
            </div>


        var2['stl_search'] =
            <div id={id_local}
                 style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >


                {/*=========== react linearGradient grnerator  https://angrytools.com/gradient/ */}
                {/*=========== react base64 grnerator https://angrytools.com/img-base64/  */}
                {/*<div style={{flex:1}}>*/}
                <svg width={0} height={0}>
                    <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                        {/*<stop offset={0} stopColor="rgba(241,184,74,1)" />*/}
                        {/*<stop offset={1} stopColor="rgba(207,113,8,1)" />*/}
                        <stop offset="0%" style={{stopColor:'rgb(244,0,255)', stopOpacity:'1' }} />
                        <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity:'1' }} />
                    </linearGradient>
                </svg>
                {/*</div>*/}


                <SearchIcon
                    // className={classes.root}
                    style={{textAlign:'center', width:'50px', height:'50px',
                        border:'1px solid teal',
                        // color:"teal",
                        fill: "url(#linearColors)"
                    }}
                />

            </div>

        return(
            var2[props.mode_icon_system+'_'+props.name]
        )
    }




    const Ret1 = (props:any) => {


        return(
            // <div

                // style={{
                //     display:'flex',
                //     flexDirection:'column',
                //     justifyContent:'space-between',
                //     alignItems:'top',
                // }}


                Ret2(props)

                // </div>



            //=== DOC
            //  https://www.npmjs.com/package/react-icon-tint
            //  https://www.youtube.com/watch?v=Ni49a8gZQxY


    // https://codesandbox.io/examples/package/ionicons
    )} //ret1


    return(

        //=== !!! (!ret1)?<div></div>:ret1

        // <IonIcon></IonIcon>

         <IconBasic title={'icon ' + props.name} {...{...props, ...{icon: FaTrash}}}>
            {<Ret1 {...props} />}
         </IconBasic>




)}

export default IconSystem
