


import {Mui3Test1} from "./comp_mui/Mui3Test1";
import IconSystem from "./virtuoso_try/Icons/IconSystem";
import React from "react";
import IconSVG1 from "./virtuoso_try/Icons/IconSVG1";
import IconTrash_IOS_svg from "./virtuoso_try/Icons/IconTrashIOS_svg_repo";
import IconTrash_IOS_svg_i8 from "./virtuoso_try/Icons/IconTrashIOS_svg_i8";
import IconTrashIOS_svg_ion from "./virtuoso_try/Icons/IconTrashIOS_svg_ion";



function IconsAllTest() {


  return (
    <div className="IconsAllTest"

         style={{
             backgroundRepeat: "no-repeat",
             // backgroundImage: 'url(' + bkg_app + ')'
             backgroundSize:'100% 100%',
             backgroundImage: 'url(' + require('./comp/images_main/bkg3.jpg') + ')',

             display:'flex',
             flexDirection:'column',
             justifyContent:'space-between',
             alignItems:'top',
         }}
    >


        <IconTrash_IOS_svg />
        <p>icons repo</p>
        {/*https://www.svgrepo.com/*/}

        <IconTrash_IOS_svg_i8 />
        <p>icons 8</p>
        <IconTrashIOS_svg_ion />
        <p>Ionic</p>

        <IconSystem  size='25' icon_name={'search'} mode_icon_system={'ios'} />



        <div title={'55555555555'} style={{ flex:1}}>
            <IconSystem icon_name={'search'} mode_icon_system={'fa'} />
        </div>
                <div title={'55555555555'} style={{ flex:1}}>
                    <p>Font Awesome</p>
                </div>

        <div style={{ flex:1}}>
            <IconSystem icon_name={'search'} mode_icon_system={'ios'}  />
        </div>
                <div style={{ flex:1}}>
                    <p>IOS from PNG</p>
                </div>

        <div style={{ flex:1}}>
            <IconSVG1/>
        </div>
                <div style={{ flex:1}}>
                    <p>IOS from PNG styled</p>
                </div>

        <div style={{ flex:1}}>
            <IconSystem icon_name={'search'} mode_icon_system={'mui'} />
        </div>
                <div style={{ flex:1}}>
                    <p>Google Classic</p>
                </div>

        <div style={{ flex:1}}>
            {/*=== new icon STEP1 - name*/}
            <IconSystem SEARCH stl size={50} />
        </div>
                 <div style={{ flex:1}}>
                    <p>Google Material Styled</p>
                </div>



        <Mui3Test1/>


    </div>
  );
}

export default IconsAllTest;
