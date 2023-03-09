import React from "react";

import {FaExclamationTriangle, FaSearch, FaTrash} from "react-icons/fa";
import {IconBasic} from "../IconBasic";
import {globals_} from "../globals";
import IconTint from 'react-icon-tint';


//=== DOC https://mui.com/system/styles/basics/
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import {Search} from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@mui/styles";
import styled from "styled-components";
import {readFileSync} from "fs";

type Props = {
    props?:any;
    mode_icon_system?:any;
    globals_?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}


// const con = async () =>{
//     const result = await png2svg({
//         tracer: 'imagetracer',
//         optimize: true,
//         // input: readFileSync('./i_search.png') ,
//         input: './i_search.png' ,
//         numberofcolors: 24,
//         pathomit: 1,
//     })
//
//     return result
//
// }


const IconSystem : React.FC<Props> = (props) => {

    console.log("=== globals_",globals_.system.mode_icons)

    // const res1 = con()
    // console.log("============= res1",res1)

    const Ret2 = (props:any) =>

    {
        // const {id} = props
        // const id_local = id
        console.log('=== props ', props)

        var var2: any = []
        var2['empty_icon'] =
            <div
                {...props}
                style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'1px solid teal',

                    color:'red',
                }}
            >
                <FaExclamationTriangle {...props}  fontSize='25'  />
            </div>

        //mode_icon_system name

        {/*=== new icon STEP3 - in div*/}
        var2['fa_search'] =
            <div
                {...props}
                 style={{
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center',
                     border:'1px solid teal',

                     color:'teal',
                 }}
            >
                    <FaSearch {...props}  fontSize='50'  />
            </div>

        var2['ios_search'] =
            <div
                {...props}
                 style={{
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center',
                     border:'1px solid teal',
                 }}
            >
                    {/*======== https://icons8.com/icons/ios*/}
                    {/*=== go styled = Fweb( png->svg ) !!! */}
                    <IconTint src={require("./i_search.png")} color="teal"
                              {...{maxWidth: 50, maxHeight: 50, }}
                    />

            </div>

        var2['mui_search'] =
            <div
                {...props}
                 style={{
                     display:'flex',
                     flexDirection:'column',
                     justifyContent:'center',
                     alignItems:'center',
                     border:'1px solid teal',

                     color:'teal',
                 }}
            >
                <SearchIcon style={{width:'50px', height:'50px'}}  />
            </div>


        var2['stl_search'] =
            <div
                {...props}
                 style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                    border:'1px solid teal',
                }}
            >


                {/*=========== react linearGradient grnerator  https://angrytools.com/gradient/ */}
                {/*=========== react base64 grnerator https://angrytools.com/img-base64/  */}
                {/*<div style={{flex:1}}>*/}
                <svg width={0} height={0}>
                    <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                        <stop offset="0%" style={{stopColor:'rgb(244,0,255)', stopOpacity:'1' }} />
                        <stop offset="100%" style={{stopColor:'rgb(255,0,0)', stopOpacity:'1' }} />
                    </linearGradient>
                </svg>

                <SearchIcon
                    style={{ width:'50px', height:'50px',
                             fill: "url(#linearColors)"
                    }}
                />

            </div>


        var icon_name_local = ''
        var mode_icon_system_local = 'ios'
        const icon_systems_name = ['fa','mui','ios','stl']
        {/*=== new icon STEP2 - in array*/}
        const icon_names = [
            'search',
            'trash',
            'up',
            'down',
        ]

        if(props.mode_icon_system) {
            mode_icon_system_local = props.mode_icon_system
        }
        else{
            for (let i = 0; i <icon_systems_name.length ; i++) {
                if(props[icon_systems_name[i]]){
                    mode_icon_system_local = icon_systems_name[i]
                }
            }
        }


        if(props.icon_name) {
            icon_name_local = props.icon_name
        }
        else
        {
                var exist_system=''

                for ( const [kk,vv] of Object.entries(props) ) {
                    console.log('=== kk',kk)

                    for (let i = 0; i <icon_names.length ; i++) {

                        if (icon_names[i] == kk.toLowerCase()) {
                            exist_system = icon_names[i]
                            break
                        }
                    }
                }

                icon_name_local = exist_system

        }

        var result =  var2[mode_icon_system_local+'_'+icon_name_local]
        if( !result )  result = var2['empty_icon']


        return(
            result
        )
    }

    return(

        //=== !!! (!ret1)?<div></div>:ret1

            <Ret2 {...props} />


)}

export default IconSystem
