import React from "react";
import IconSystem from "./IconSystem";

type Props = {
    props?:any;
    mode_icon_system?:any;
    globals_?:any;
    children:React.ReactNode;
    // onClick:(e:any)=>void;
}


const IconSVG1 : React.FC<Props> = (props) => {

const size=(50).toString()
const color = "#A41FAF", gradientColor = "#A41FAF"

return (
    <div>

        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width={size + ".000000px"} height={size + ".000000px"}
             viewBox="0 0 100.000000 100.000000"
             preserveAspectRatio="xMidYMid meet">

            <defs>
                <linearGradient
                    id="linearGradient-1"
                    x1={1} y1={0} x2={1} y2={1}>
                    <stop offset="0%" style={{stopColor:'rgb(255,0,0)', stopOpacity:'1' }} />
                    <stop offset="100%" style={{stopColor:'rgb(244,0,255)', stopOpacity:'1' }} />
                </linearGradient>

            </defs>

            <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
               fill="#000000" stroke="none">
                <path
                    fill="url(#linearGradient-1)"
                    d="M314 922 c-93 -33 -166 -100 -207 -189 -34 -74 -31 -199 6 -275 35
                    -72 93 -130 165 -165 49 -24 69 -28 142 -28 73 0 93 4 144 29 l58 29 129 -129
                    129 -129 27 28 28 27 -128 128 -129 129 30 47 c106 167 39 393 -145 482 -72
                    36 -176 42 -249 16z m240 -56 c105 -51 161 -144 161 -266 0 -85 -21 -142 -74
                    -203 -82 -92 -237 -121 -353 -64 -160 79 -215 278 -118 430 80 126 246 170
                    384 103z"
                />
                        </g>
                </svg>



    </div>
);

}
export default IconSVG1

